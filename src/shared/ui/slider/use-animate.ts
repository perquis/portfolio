import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { slides } from "@/data";

const DEFAULT_PAGINATION_SIZE = 20;

/**
 * Constants for calculating the width
 * ratio between active and inactive slides
 *
 * This was determined by the ratio of
 * tailwind class w-10/12 (non-active slide)
 */
const TWEEN_WIDTH_RATIO_FROM = 10;
const TWEEN_WIDTH_RATIO_TO = 12;
const STARTING_INITIAL_VALUE = 0;

export const useAnimate = () => {
  const [translateX, setTranslateX] = useState(STARTING_INITIAL_VALUE);
  const [page, setPage] = useState(STARTING_INITIAL_VALUE);

  const slideRef = useRef<HTMLDivElement>(null);

  const calculateOffsetBetweenSlides = useCallback(
    (n: number) => {
      const activeSlideWidth =
          slideRef.current?.offsetWidth ?? STARTING_INITIAL_VALUE,
        inactiveSlideWidth =
          (activeSlideWidth * TWEEN_WIDTH_RATIO_FROM) / TWEEN_WIDTH_RATIO_TO,
        diff = inactiveSlideWidth + DEFAULT_PAGINATION_SIZE;

      setTranslateX(diff * -(page + n));
    },
    [page],
  );

  useEffect(() => {
    const resizeEvent = () => {
      setTranslateX(STARTING_INITIAL_VALUE);
      setPage(STARTING_INITIAL_VALUE);
    };

    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  const actions = useMemo(
    () =>
      [
        {
          name: "ArrowLeft",
          onClick: () => {
            paginate(-1);
            calculateOffsetBetweenSlides(-1);
          },
          disabled: page === STARTING_INITIAL_VALUE,
        },
        {
          name: "ArrowRight",
          onClick: () => {
            paginate(1);
            calculateOffsetBetweenSlides(1);
          },
          disabled: page === slides.length - 1,
        },
      ] as const,
    [page, calculateOffsetBetweenSlides],
  );

  const paginate = (newPage: number) =>
    setPage((prevPage) => {
      if (prevPage + newPage < STARTING_INITIAL_VALUE)
        return STARTING_INITIAL_VALUE;
      if (prevPage + newPage > slides.length - 1) return slides.length - 1;

      return prevPage + newPage;
    });

  const duration = useRef({
    type: "spring",
    damping: 100,
    stiffness: 1000,
  });

  return {
    actions,
    page,
    slideRef,
    duration,
    translateX,
  };
};

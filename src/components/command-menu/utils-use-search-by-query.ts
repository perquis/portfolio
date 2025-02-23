import { useCallback, useMemo } from "react";

import { useCommandMenu } from "@/components/command-menu/context-command-menu-provider";
import type {
  Article,
  ICommandMenu,
} from "@/components/command-menu/feature-command-menu";

export const useSearchByQuery = (data: ICommandMenu["data"]) => {
  const { searchQuery, setSearchQuery } = useCommandMenu();
  const [posts, projects] = data;

  const onValueChange = (search: string) => setSearchQuery(search);

  const filteringItems = useCallback(
    (items: Article[]) => {
      if (!searchQuery) return [];
      const filteredItems = items.filter(({ title }) =>
        title.toLowerCase().startsWith(searchQuery.toLowerCase()),
      );

      return filteredItems;
    },
    [searchQuery],
  );

  const filteredPosts = useMemo(
    () => filteringItems(posts),
    [posts, filteringItems],
  );
  const filteredProjects = useMemo(
    () => filteringItems(projects),
    [projects, filteringItems],
  );

  return [[filteredPosts, filteredProjects], onValueChange] as const;
};

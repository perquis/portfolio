import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fonts = {
  inter,
} as const;

type Family = keyof typeof fonts;

interface ITypography {
  children?: React.ReactNode;
  family: Family;
}

export default function Typography({ children, family }: ITypography) {
  return <div className={fonts[family].className}>{children}</div>;
}

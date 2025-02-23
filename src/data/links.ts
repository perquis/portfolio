import {
  DevicePhoneMobileIcon,
  FolderIcon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

const links = [
  { Icon: HomeIcon, label: "About", href: "/" } as const,
  { Icon: FolderIcon, label: "Portfolio", href: "/portfolio" } as const,
  { Icon: NewspaperIcon, label: "Blog", href: "/blog" } as const,
  { Icon: DevicePhoneMobileIcon, label: "Contact", href: "/contact" } as const,
];

export default links;

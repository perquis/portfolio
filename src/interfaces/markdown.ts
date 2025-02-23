export type Location = "projects" | "posts";

export interface IDocs {
  data: Data[];
}

export interface Data {
  metadata: Frontmatter;
}

export interface Frontmatter {
  slug: string;
  title: string;
  year: number;
  description: string;
  light_img: string;
  dark_img: string;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  open_graph_img: string;
}

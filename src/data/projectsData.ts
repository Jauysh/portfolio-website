import { PROJECTS_PART_1 } from "./projectsPart1";
import { PROJECTS_PART_2 } from "./projectsPart2";
import { ProjectItem } from "./types";

export const ALL_PROJECTS: ProjectItem[] = [
  ...PROJECTS_PART_1,
  ...PROJECTS_PART_2,
];

export const FEATURED_PROJECTS: ProjectItem[] = ALL_PROJECTS.filter(
  (p) => p.featured
);

export const B2B_PRODUCTS: ProjectItem[] = ALL_PROJECTS.filter(
  (p) => p.b2bReady
);

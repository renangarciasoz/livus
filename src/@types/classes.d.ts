export type Classes = {
  id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

export type ClassesCatalog = {
  title: string;
  classes: Classes[];
};

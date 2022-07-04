

export type Person = {
  id: number;
  name: string;
  image: string;
  height: number;
  mass: string;
  gender: string;
  homeworld: string;
  url?: string;
};

export type PeoplePage = {
  nextPage: number | null;
  prevPage: number | null;
  count: number;
  total: number;
  people: Person[];
};

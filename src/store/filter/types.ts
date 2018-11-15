export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface FilterState {
  language?: string;
}

export enum FilterActionTypes {
  SET_LANGUAGE = "@@filter/SET_LANGUAGE"
}

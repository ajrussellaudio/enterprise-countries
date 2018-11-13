export interface Country {
  name: string;
  population: number;
  capital: string;
  flag: string;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
}

export type ApiResponse = Record<string, any>;

export enum CountriesActionTypes {
  FETCH_REQUEST = "@@countries/FETCH_REQUEST",
  FETCH_SUCCESS = "@@countries/FETCH_SUCCESS",
  FETCH_FAILURE = "@@countries/FETCH_FAILURE"
}

export interface CountriesState {
  readonly list: Country[];
  readonly isLoading: boolean;
  readonly error?: string;
}

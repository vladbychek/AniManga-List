export interface MangaType {
  id?: string;
  type?: string;
  attributes?: {
    description: string;
    canonicalTitle: string;
    averageRating: string;
    startDate: string;
    ageRating: string;
    subtype: string;
    status: string;
    posterImage: {
      original: string;
    };
    chapterCount: number;
    volumeCount: number;
    serialization: string;
  };
};

export type MangaArrType = Array<MangaType>;

export interface MangaStateType {
  mangaArr: MangaArrType;
  fullMangaInfoArr: MangaType;
  mangaCurrSort: string;
  currMangaPage: number;
  mainPageMangaArr: MangaArrType;
  favoriteMangaArr: MangaArrType;
};

export interface MangaNewArrType {
  newArr: MangaArrType;
};

export interface MangaFullInfoType {
  fullInfo: MangaType;
};

export interface MangaMainPageType {
  mainPageArr: MangaArrType;
};

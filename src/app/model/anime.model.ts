import { Format } from './enum/format';

interface APIResponse {
  status_code: number;
  data: any;
  message: string;
  version: string;
}

interface BaseAPIResponse extends Omit<APIResponse, 'data'> {}

interface Anime {
  id: number;
  titles: {
    [x: string]: string | null;
  };
  descriptions: {
    [x: string]: string | null;
  };
  trailer_url: string;
  score: number;
  cover_image: string;
  banner_image: string;
  genres: string[];
  episodes_count: number;
  format: Format;
}

interface AnimesAPIResponse extends BaseAPIResponse {
  data: {
    current_page: number;
    count: number;
    last_page: number;
    documents: Anime[];
  };
}

interface AnimeAPIResponse extends BaseAPIResponse {
  data: Anime;
}

interface AnimeAPINewsResponse extends BaseAPIResponse {
  data: Anime[];
}

interface GenresAPIResponse extends BaseAPIResponse {
  data:{
    genres: string[];
  }
}

export {
  Anime,
  AnimesAPIResponse,
  AnimeAPIResponse,
  AnimeAPINewsResponse,
  GenresAPIResponse,
};

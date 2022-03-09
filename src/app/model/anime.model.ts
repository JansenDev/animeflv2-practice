import { Format } from './enum/format';

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

interface AnimesAPIResponse {
  status_code: number;
  message: string;
  data: {
    current_page: number;
    count: number;
    last_page: number;
    documents: Anime[];
  };
  version: string;
}

interface AnimeApiResponse
  extends Pick<AnimesAPIResponse, 'status_code' | 'message' | 'version'> {
  data: Anime;
}

interface AnimeAPINewsResponse extends Omit<AnimesAPIResponse, 'data'> {
  data: Anime[];
}

export { Anime, AnimesAPIResponse, AnimeApiResponse, AnimeAPINewsResponse };

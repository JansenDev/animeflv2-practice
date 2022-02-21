export interface Anime {
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
}

export interface animeAPIResponse{
  status_code:number,
  message:string,
  data:{
    current_page:number,
    count:number,
    last_page:number,
    documents:Anime[]
  },
  version:string,
}
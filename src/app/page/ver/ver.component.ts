import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faHome,
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faThList,
  faFlag,
  faEye,
  faLightbulb,
  faDownload,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { Anime } from 'src/app/model/anime.model';
import { Format } from 'src/app/model/enum/format';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss'],
})
export class VerComponent implements OnInit {
  //Icons
  faHome = faHome;
  faCaretRight = faCaretRight;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faThList = faThList;
  faFlag = faFlag;
  faEye = faEye;
  faLightbulb = faLightbulb;
  faDownload = faDownload;
  faExpand = faExpand;

  //atributes
  videoURL = 'https://www.youtube.com/embed/3jdQVZk8RSU';
  currentAnime: Anime = {
    banner_image: '',
    cover_image: '',
    descriptions: {},
    episodes_count: 1,
    format: Format.ANIME,
    genres: [],
    id: 0,
    score: 0,
    trailer_url: '',
    titles: {},
  } as Anime;
  episode = '1';
  isLoaded = false;
  animeNews: Anime[] = [] as Anime[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.getAnime();
    this.getAnimeNews();
  }

  getAnime() {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   console.log(params.get('id_anime'));
    // });

    const id_anime = this.activatedRoute.snapshot.paramMap.get('id_anime');
    const episodeCount =
      this.activatedRoute.snapshot.paramMap.get('episodeCount');

    this.animeService.getAnimeById(id_anime!).subscribe((queryResult) => {
      console.log(queryResult);
      this.videoURL = queryResult.trailer_url;
      this.currentAnime = queryResult;
      this.episode = episodeCount!;
      this.isLoaded = true;
    });
  }

  getAnimeNews() {
    const x = this.animeService.getAnimeNews().subscribe((animeList) => {
      console.log(animeList);
      this.animeNews = animeList;
    });
  }

  URLServerOpcion(nOpcion: string) {
    this.videoURL = nOpcion;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JikanService } from 'src/app/services/jikan.service';

@Component({
  standalone:false,
  selector: 'app-anime-details',
  templateUrl: './anime-details.page.html',
  styleUrls: ['./anime-details.page.scss'],
})
export class AnimeDetailsPage implements OnInit {
  anime: any;

  constructor(
    private route: ActivatedRoute,
    private jikanService: JikanService,
    private router: Router,
  ) {}

  ngOnInit() {
    const animeId = this.route.snapshot.paramMap.get('id');
    if (animeId) {
      this.jikanService.getAnimeDetails(Number(animeId)).subscribe((data) => {
        this.anime = data.data;
      });
    }
  }

  addToFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.some((fav: any) => fav.mal_id === this.anime.mal_id)) {
      favorites.push(this.anime);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  volverAHome() {
    this.router.navigate(['/']);
  }

}


  
  
  



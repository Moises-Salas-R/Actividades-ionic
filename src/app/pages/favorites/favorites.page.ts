import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  favorites: any[] = [];

  constructor(private router: Router) {
    this.loadFavorites();
  }

  loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  removeFavorite(animeId: number) {
    this.favorites = this.favorites.filter(anime => anime.mal_id !== animeId);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  volverAHome() {
    this.router.navigate(['/']);
  }

  

}

import { Component, OnInit } from '@angular/core';
import { JikanService } from 'src/app/services/jikan.service';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  animes: any[] = [];  // Lista de animes
  page: number = 1;    // Página para paginación
  query: string = '';  // Texto de búsqueda

  constructor(private jikanService: JikanService, private router: Router) {}

  ngOnInit() {
    this.obtenerAnimes();  // Cargar animes al iniciar la página
  }

  obtenerAnimes() {
    this.jikanService.getAnimes(this.page, this.query).subscribe((response) => {
      this.animes = response.data; // Guardar animes en la lista
    });
  }

  buscarAnime(event: any) {
    this.query = event.target.value;
    this.page = 1;  // Reiniciar la página a la primera
    this.obtenerAnimes(); // Hacer la búsqueda
  }

  cargarMas(event: any) {
    this.page++;  // Siguiente página
    this.jikanService.getAnimes(this.page, this.query).subscribe((response) => {
      this.animes = [...this.animes, ...response.data]; // Agregar más animes a la lista
      event.target.complete(); // Terminar el scroll infinito
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['/anime', id]); // Ir a la página de detalles del anime
  }

  verFavoritos() {
    this.router.navigate(['/favorites']);
  }

}

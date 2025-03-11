import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AnimeCardComponent,
    AnimeListComponent,
    AnimeDetailComponent
  ],
  imports: [CommonModule,IonicModule],
  exports: [
    AnimeCardComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { AnimeDetailsPageRoutingModule } from './anime-details-routing.module';

import { AnimeDetailsPage } from './anime-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [AnimeDetailsPage]
})
export class AnimeDetailsPageModule {}

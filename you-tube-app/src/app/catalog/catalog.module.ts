import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';

import { VideoReaderComponent } from './../components/video-reader/video-reader.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { VideoListComponent } from '../videos/video-list/video-list.component';

@NgModule({
  declarations: [CatalogListComponent, VideoReaderComponent, VideoListComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MatListModule,
    NgxYoutubePlayerModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class CatalogModule { }

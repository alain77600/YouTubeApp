import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [VideoListComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class VideosModule { }

import { Component, OnInit, SimpleChanges } from '@angular/core';

import { UsersService } from 'src/app/services/api/users.service';
import { CatalogModel } from 'src/app/models/catalog.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  videoList = [];
  videoSelected = '';
  showSearch = false;
  userName: string;

  constructor(public users: UsersService) { }


  ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit() {
    this.userName = history.state.data;
    this.getCatalogFromUser(this.userName);

  }

  getCatalogFromUser(user: string) {
    this.users.getUserCatalog(user)
    .subscribe((resp) => {
      this.videoList = resp.videos;
    });
  }

  deleteVideo(item: any) {
    this.users.getUserCatalog(this.userName).subscribe((resp: CatalogModel) => {
      const updatedVideo = [];
      resp['videos'].forEach( elt => {
        if (elt.id !== item.id) {
          updatedVideo.push(elt);
        }
      });
      this.users.updateVideoInCatalog(this.userName, updatedVideo)
      .subscribe(resp => {
        this.videoList = updatedVideo;
      });
    });
  }

  getId(videoId: string) {
    this.showSearch = false;
    this.videoSelected = videoId;
  }

  searchVideo() {
    this.videoSelected = '';
    this.showSearch = true;
  }

  catalogUpdated($event) {
    this.getCatalogFromUser($event.name);
  }
}

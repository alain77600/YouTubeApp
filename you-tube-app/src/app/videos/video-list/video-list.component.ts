import { VideoModel } from 'src/app/models/video.model';
import { CatalogModel } from './../../models/catalog.model';
import { FormBuilder, Validators, FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { YoutubeService } from './../../services/youtube.service';
import { UsersService } from 'src/app/services/api/users.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() user: string;
  @Output() videoSubmitted = new EventEmitter<{
    name: string,
    submitted: boolean
  }>();

  private unsubscribe$: Subject<any> = new Subject();

  userName: string;
  showResult = false;
  video: VideoModel = {
    title: '',
    id: ''
  };
  videos: any[];
  searchForm: FormGroup;

  constructor(private spinner: NgxSpinnerService,
              private youTubeService: YoutubeService,
              private fb: FormBuilder,
              private userService: UsersService) { }

  ngOnInit() {
    this.userName = this.user;
    this.searchForm = this.fb.group({
      videoName: ['', Validators.required],
      numberOfVideo: ['', Validators.required]
    });
  }

  onSubmit() {
    this.showResult = true;
    const criteria = this.searchForm.value;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.videos = [];
    this.youTubeService.getVideosByName(criteria.videoName, criteria.numberOfVideo)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(list => {
      for (const element of list['items']) {
        this.videos.push(element);
      }
    });
  }

  addVideoInCatalog(videoItem: any) {
    this.video.id = videoItem.id.videoId;
    this.video.title = videoItem.snippet.title;
    this.userService.getUserCatalog(this.userName).subscribe((resp: CatalogModel) => {
      const newVideo = resp['videos'];
      newVideo.push(this.video);
      this.userService.updateVideoInCatalog(this.userName, newVideo)
      .subscribe(resp => {
        this.videoSubmitted.emit({ name: this.userName, submitted: true});
      });
    });
  }

}

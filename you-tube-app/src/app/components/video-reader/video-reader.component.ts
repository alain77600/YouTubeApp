import { OnInit, Input, SimpleChanges, Component } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-reader',
  templateUrl: './video-reader.component.html',
  styleUrls: ['./video-reader.component.scss']
})
export class VideoReaderComponent implements OnInit {
  @Input() videoItem: string;

  youTubeUrl = 'https://www.youtube.com/embed/';
  youTubeUrlId: SafeResourceUrl;
  showVideo: boolean;

  constructor(private sanitizer: DomSanitizer ) {
    this.showVideo = false;
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.videoItem.currentValue) {
      this.lunchYouTube(changes.videoItem.currentValue);
    } else {
      this.showVideo = false;
    }
  }

  lunchYouTube( id: string) {
    this.showVideo = true;
    this.youTubeUrlId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youTubeUrl + id);
  }
}

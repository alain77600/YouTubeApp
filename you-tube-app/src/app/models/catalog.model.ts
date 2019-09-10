import { VideoModel } from './video.model';

export interface CatalogModel {
  name: string;
  videos: VideoModel[];
}


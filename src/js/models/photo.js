// @flow
import _ from 'lodash';

export default class Photo {
  id: number;
  originalUrl: string;
  thumbnailUrl: string;
  message: string;
  favoriteUserIds: number[];
  createUserId: number;
  createDate: Date;

  constructor(
    id: number,
    originalUrl: string,
    thumbnailUrl: string,
    message: string,
    favoriteUserIds: number[],
    createUserId: number,
    createDate: Date
  ) {
    this.id = id;
    this.originalUrl = originalUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.message = message;
    this.favoriteUserIds = favoriteUserIds;
    this.createUserId = createUserId;
    this.createDate = createDate;
  }

  canRemove(userId: number): boolean {
    return userId === this.createUserId;
  }

  favoriteCount(): number {
    return this.favoriteUserIds.length;
  }

  isFavorite(): boolean {
    return _.contains(this.favoriteUserIds, this.createUserId);
  }
}
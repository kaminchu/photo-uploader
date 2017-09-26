//@flow
import React, {Component} from 'react';
import PostDialog from './post_dialog';
import RemoveDialog from './remove_dialog';
import PhotoCardComponent from './photo_card';


// type

export type Props = {
  photoCards: PhotoCard[];
  selectedRemovePhotoId: ?number;
  isOpenRemoveDialog: boolean;
  isOpenPostDialog: boolean;
  imageFile: ?File;
  message: string;

  // action
  serverDoFavorite: (id: number) => void;
  serverRemovePhoto: (id: number) => void;
  openPhoto: (id: number) => void;
  openPostDialog: () => void;
  openRemoveDialog: (id: number) => void;
  closeRemoveDialog: () => void;
  changeFile: (file: File) => void;
  changeMessage: (message: string) => void;
  closePostDialog: () => void;
}

type PhotoCard = {
  group: string;
  name: string;
  postTime: Date;
  originalUrl: string;
  thumbnailUrl: string;
  message: string;
  favoriteCount: number;
  isFavorite: boolean;
  canRemove: boolean;
}
export default class Timeline extends Component<Props> {
  render() {
    return (
      <div>
        {this.renderPhotos()}
        {this.renderDialog()}
      </div>
    );
  }

  renderPhotos() {
    const {
      photoCards,
      serverDoFavorite,
      openRemoveDialog,
      openPhoto
    } = this.props;

    return photoCards.map(photoCard => {
      const {photoId} = photoCard;
      const photoCardProps = {
        ...photoCard,
        onClickFavorite: () => serverDoFavorite(photoId),
        onClickRemove: () => openRemoveDialog(),
        onClickPhoto: () => openPhoto(photoId)
      };
      return (<PhotoCardComponent key={photoId} {...photoCardProps}/>);
    });
  }

  renderDialog() {
    const {
      isOpenRemoveDialog,
      selectedRemovePhotoId,
      closeRemoveDialog,
      serverRemovePhoto,
      isOpenPostDialog,
      imageFile,
      message,
      changeFile,
      changeMessage,
      closePostDialog
    } = this.props;

    return (
      <div>
        {isOpenRemoveDialog &&
        <RemoveDialog
          onClickClose={closeRemoveDialog}
          onClickCancel={closeRemoveDialog}
          onClickRemove={() => serverRemovePhoto(selectedRemovePhotoId)}
        />
        }
        {isOpenPostDialog &&
        <PostDialog
          imageFile={imageFile}
          message={message}
          onChangeFile={changeFile}
          onChangeMessage={changeMessage}
          onClickClose={closePostDialog}
        />
        }
      </div>
    );

  }
}
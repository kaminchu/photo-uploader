// @flow
import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';
import {StyleSheet, css} from 'aphrodite';

// component
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import CancelIcon from 'material-ui-icons/Cancel';
import Lightbox from 'react-image-lightbox';



type Props = {
  id: number;
  group: string;
  name: string;
  postTime: Date;
  originalUrl: string;
  thumbnailUrl: string;
  isOpenPhotoView: boolean;
  message: string;
  favoriteCount: number;
  isFavorite: boolean;
  canRemove: boolean;
  onClickFavorite: (id: number) => void;
  onClickRemove: (id: number) => void;
  onClickPhoto: (id: number) => void;
  onClickClosePhotoView: (id: number) => void;
};
export default class PhotoCard extends Component<Props> {
  render() {

    const {
      id,
      group,
      name,
      postTime,
      originalUrl,
      thumbnailUrl,
      isOpenPhotoView,
      message,
      favoriteCount,
      isFavorite,
      canRemove,
      onClickFavorite,
      onClickRemove,
      onClickPhoto,
      onClickClosePhotoView
    }=  this.props;

    return (
      <div>
        {isOpenPhotoView &&
        <Lightbox
          mainSrc={originalUrl}
          onCloseRequest={() => onClickClosePhotoView(id)}
        />
        }
        <Card className={css(styles.card)}>
          <div className={css(styles.photo)}>
            <CardMedia
              onClick={() => onClickPhoto(id)}
              className={css(styles.media)}
              image={thumbnailUrl}
            />
            <div className={css(styles.overlay)}>
              <div className={css(styles.postDate, styles.fontWhite)}>
                {moment(postTime).fromNow()}
              </div>
              <CardContent>
                <Typography type="title" align="left" className={css(styles.fontWhite)} component="p">
                  {name}
                </Typography>
                {!_.isEmpty(message) &&
                <Typography className={css(styles.fontWhite)} component="p">
                  {message}
                </Typography>
                }
              </CardContent>
            </div>
            {canRemove &&
            <IconButton onClick={() => onClickRemove(id)} className={css(styles.removeButton)}>
              <CancelIcon/>
            </IconButton>
            }
          </div>
          <CardActions className={css(styles.cardActions)} disableActionSpacing={true}>
            <div className={css(styles.buttonGroup)}>
              <IconButton onClick={() => onClickFavorite(id)} >
                {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                {favoriteCount > 0 && favoriteCount}
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 400,
  },
  media: {
    height: "100%",
  },
  photo: {
    position: "relative",
    height: 194
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[700],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  fontWhite: {
    color: "#fff"
  },
  buttonGroup: {
    display: "inline-block",
    position: "absolute",
    right: 0
  },
  cardActions: {
    position: "relative",
    textAlign: "right"
  },
  favoriteCount: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex"
  },
  favoriteCountText: {
    position: "relative",
    right: 0,
    bottom:0
  },
  colorRed: {
    color: red[500]
  },
  postDate: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: "50%"
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: 0
  }
});



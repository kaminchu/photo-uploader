// @flow
import React from 'react';


import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
// Decorator Settings
import {addDecorator} from '@storybook/react';
import {StyleSheet, css} from 'aphrodite';
const styles = StyleSheet.create({
  decorator: {
    backgroundColor: "#eeeeee",
    height: "100%"
  }
});
const Decorator = (story) => (
  <div className={css(styles.decorator)}>
    {story()}
  </div>
);


const baseProps = {
  id: 123,
  group: "group",
  name: "name",
  postTime: new Date(),
  img: "/cat1.jpg",
  message: "",
  favoriteCount: 0,
  isFavorite: false,
  canRemove: true,
  onClickFavorite: action("onClickFavorite"),
  onClickRemove: action("onClickRemove"),
  onClickPhoto: action("onClickPhoto")
};
const messageProps = {
  ...baseProps,
  message: "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
};

const favProps = {
  ...baseProps,
  isFavorite: true
};

const anyFavProps = {
  ...baseProps,
  favoriteCount: 100
};

const oldProps = {
  ...baseProps,
  postTime: new Date(1504245635)
};

const disableRemoveProps = {
  ...baseProps,
  canRemove: false
};


storiesOf('Card', module)
  .addDecorator(Decorator)
  .add('初期:メッセージなし', () => {
    return <PhotoCard {...baseProps}/>;
  })
  .add('初期:メッセージあり', () => {
    return <PhotoCard {...messageProps}/>;
  })
  .add('ふぁぼったあと', () => {
    return <PhotoCard {...favProps}/>;
  })
  .add('たくさんふぁぼられた', () => {
    return <PhotoCard {...anyFavProps}/>;
  })
  .add('昔の投稿', () => {
    return <PhotoCard {...oldProps}/>;
  })
  .add('消せない', () => {
    return <PhotoCard {...disableRemoveProps}/>;
  });







// TODO あとでコンポーネントへ
import {Component} from 'react';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import CancelIcon from 'material-ui-icons/Cancel';
import DeleteIcon from 'material-ui-icons/Delete';
import _ from 'lodash';
import moment from 'moment';



const _styles = StyleSheet.create({
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


type Props = {
  id: number;
  group: string;
  name: string;
  postTime: Date;
  img: string;
  message: string;
  favoriteCount: number;
  isFavorite: boolean;
  canRemove: boolean;
  onClickFavorite: (id) => void;
  onClickRemove: (id) => void;
  onClickPhoto: (id) => void;
};
class PhotoCard extends Component<Props> {
  render() {

    const {
      id,
      group,
      name,
      postTime,
      img,
      message,
      favoriteCount,
      isFavorite,
      canRemove,
      onClickFavorite,
      onClickRemove,
      onClickPhoto
    }=  this.props;

    return (
      <div>
        <Card className={css(_styles.card)}>
          <div className={css(_styles.photo)}>
            <CardMedia
              onClick={() => onClickPhoto(id)}
              className={css(_styles.media)}
              image={img}
            />
            <div className={css(_styles.overlay)}>
              <div className={css(_styles.postDate, _styles.fontWhite)}>
                {moment(postTime).fromNow()}
              </div>
              <CardContent>
                <Typography type="title" align="left" className={css(_styles.fontWhite)} component="p">
                  {name}
                </Typography>
                {!_.isEmpty(message) &&
                  <Typography className={css(_styles.fontWhite)} component="p">
                    {message}
                  </Typography>
                }
              </CardContent>
            </div>
            {canRemove &&
              <IconButton onClick={() => onClickRemove(id)} className={css(_styles.removeButton)}>
                <CancelIcon/>
              </IconButton>
            }
          </div>
          <CardActions className={css(_styles.cardActions)} disableActionSpacing={true}>
            <div className={css(_styles.buttonGroup)}>
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



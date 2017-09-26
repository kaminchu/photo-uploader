// @flow
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

// component
import PhotoCard from "../src/js/components/photo_card";



// Decorator Settings
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
  thumbnailUrl: "/cat1.jpg",
  originalUrl:"/cat1.jpg",
  isOpenPhotoView: false,
  message: "",
  favoriteCount: 0,
  isFavorite: false,
  canRemove: true,
  onClickFavorite: action("serverDoFavorite"),
  onClickRemove: action("serverRemovePhoto"),
  onClickPhoto: action("openPhoto"),
  onClickClosePhotoView: action("onClickClosePhotoView")
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

const photoViewProps = {
  ...baseProps,
  isOpenPhotoView: true
};


storiesOf('Photo Card', module)
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
  })
  .add('ビュー表示', () => {
    return <PhotoCard {...photoViewProps}/>;
  });








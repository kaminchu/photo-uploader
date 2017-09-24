// @flow
import React from 'react';


import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
// Decorator Settings
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


storiesOf('Timeline', module)
  .addDecorator(Decorator)
  .add('aaaa', () => {
    return <Timeline/>;
  });






// TODO あとでコンポーネントへ
import {Component} from 'react';


type Props = {
  photoCards: PhotoCardProps[];
  isOpenPostModal: boolean;
  onClickPost: () => void;
  onClickFavorite: (id: number) => void;
  onClickRemove: (id: number) => void;
  onClickPhoto: (id: number) => void;
};
export class Timeline extends Component<Props> {
  render() {

    return ();
  }
}



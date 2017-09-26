//@flow
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Timeline from '../components/timeline';
import timelineActions from '../actions/timeline';

import type {State} from '../reducers';

function mapStateToProps(state: State) {
  const {timeline, login} = state;
  const {
    photos,
    users,
    selectedRemovePhotoId,
    isOpenRemoveDialog,
    isOpenPostDialog,
    imageFile,
    message
  } = timeline;
  const {user} = login;


  const photoCards = photos.map(photo => {
    const {
      originalUrl,
      thumbnailUrl,
      message,
      createUserId,
      createDate,
      canRemove,
      favoriteCount,
      isFavorite
    } = photo;

    const userInfo = users.find(user => user.id === createUserId);
    const {name, group} = userInfo; // TODO nullチェックとかしたほうがたぶんいい

    return {
      group: name,
      name: group,
      postTime: createDate,
      originalUrl: originalUrl,
      thumbnailUrl: thumbnailUrl,
      message: message,
      favoriteCount: favoriteCount(),
      isFavorite: isFavorite(user.id),
      canRemove: canRemove(user.id)
    }
  });
  return {
    photoCards: photoCards,
    selectedRemovePhotoId: selectedRemovePhotoId,
    isOpenRemoveDialog: isOpenRemoveDialog,
    isOpenPostDialog: isOpenPostDialog,
    imageFile: imageFile,
    message: message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(timelineActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

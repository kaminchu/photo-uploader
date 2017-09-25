// @flow
import React, {Component} from 'react';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

type Props = {
  photoId: number;
  onClickClose: () => void;
  onClickRemove: (photoId: number) => void;
  onClickCancel: () => void;
  isOpen: boolean;
}
export default class RemoveDialog extends Component<Props> {
  render() {
    const {
      photoId,
      onClickClose,
      onClickRemove,
      onClickCancel,
      isOpen,
    } = this.props;
    return (
      <Dialog open={isOpen} onRequestClose={onClickClose}>
        <DialogTitle>{"選択した写真を削除しますか?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            この操作は元に戻すことはできません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCancel} color="primary">
            キャンセル
          </Button>
          <Button onClick={() => onClickRemove(photoId)} color="primary">
            削除
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
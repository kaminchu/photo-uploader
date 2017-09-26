// @flow
import React, {Component} from 'react';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export type Props = {
  onClickClose: () => void;
  onClickRemove: () => void;
  onClickCancel: () => void;
}
export default class RemoveDialog extends Component<Props> {
  render() {
    const {
      onClickClose,
      onClickRemove,
      onClickCancel,
    } = this.props;
    return (
      <Dialog open onRequestClose={onClickClose}>
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
          <Button onClick={onClickRemove} color="primary">
            削除
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
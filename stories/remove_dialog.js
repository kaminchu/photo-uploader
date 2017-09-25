// @flow
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import RemoveDialog from "../src/js/components/remove_dialog";

const baseProps = {
  photoId: 1,
  onClickClose: action("onClickClose"),
  onClickRemove: action("onClickRemove"),
  onClickCancel: action("onClickCancel"),
  isOpen: true
};


storiesOf('Remove Dialog', module)
  .add('初期', () => {
    return <RemoveDialog {...baseProps}/>;
  })
;


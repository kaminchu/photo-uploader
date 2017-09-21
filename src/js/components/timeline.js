//@flow
import React, {Component} from 'react';

// type
export type Props = {
  postPhoto: (message: string) => void;
  message: string;
}
export default class Timeline extends Component<Props> {
  render() {
    const {
      postPhoto,
      message
    } = this.props;
    const props = {
      onClick: (e) => postPhoto(e.target.value),
      value: message
    };
    return (
      <input {...props}/>
    );
  }
}
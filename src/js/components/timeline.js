//@flow
import React, {Component} from 'react';

// type
export type Props = {
  postPhoto: (message: string) => void;
  changeMessage: (message: string) => void;
  message: string;
}
export default class Timeline extends Component<Props> {
  render() {
    const {
      postPhoto,
      changeMessage,
      message
    } = this.props;

    return (
      <div>
        <h1>何か送ってみるテスト</h1>
        <input type='text' onChange={(e) => changeMessage(e.target.value)} value={message}/>
        <button onClick={() => postPhoto(message)}>送る</button>
      </div>
    );
  }
}
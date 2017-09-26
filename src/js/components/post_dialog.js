// @flow
import React, {Component} from 'react';
import _ from 'lodash';
import {StyleSheet, css} from 'aphrodite';

// component
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SendIcon from 'material-ui-icons/Send';
import AddAPhotoIcon from 'material-ui-icons/AddAPhoto';



const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export type Props = {
  imageFile: ?File;
  message: string;
  onChangeFile: (file: File) => void;
  onChangeMessage: (message: string) => void;
}

export default class PostDialog extends Component<Props> {
  onChangeFile(e) {
    this.props.changeFile(_.first(e.target.files));
  }

  onChangeMessage(e){
    this.props.changeMessage(e.target.value);
  }


  render() {
    const {imageFile, message} = this.props;
    return (
      <div>
        <div className={css(styles.messageRoot)}>
          <TextField
            label="メッセージを書く"
            multiline
            rowsMax="3"
            value={message}
            onChange={this.onChangeMessage.bind(this)}
            margin="normal"
            InputProps={{ placeholder: 'メッセージ' }}
            autoFocus
            helperText={`${50 - message.length}文字`}
            fullWidth
          />
          <Button className={css(styles.sendButton)} fab>
            <SendIcon className={css(styles.sendIcon)}/>
          </Button>
        </div>
        <div className={css(styles.imagesRoot)}>
          {!imageFile && <AddAPhotoIcon onClick={() => this.inputText.click()} className={css(styles.addPhotoIcon)}/>}
          {this.renderImages()}
          <input type="file" ref={ref => this.inputText = ref} onChange={this.onChangeFile.bind(this)} accept="image/*" style={{display:"none"}}/>
        </div>
      </div>
    );
  }


  renderImages() {
    const {imageFiles} = this.props;

    return _.map(imageFiles, imageFile => {
      const url = createObjectURL(imageFile);

      return <img className={css(styles.image)} src={url}/>;
    })

  }
}


const styles = StyleSheet.create({
  imagesRoot: {
    display:"flex"
  },
  image:{
    width: "100%",
    height: "auto",
    overflow: "scroll"
  },
  messageRoot: {
    position: "relative"
  },
  sendButton: {
    position: "absolute",
    top: "40%",
    right:"5px",
    transform: "translateY(-50%)",
    height: "36px",
    width: "36px"
  },
  sendIcon: {
    height: "20px",
    width: "20px"
  }
});

















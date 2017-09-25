// @flow
import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';
import {StyleSheet, css} from 'aphrodite';

// component
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SendIcon from 'material-ui-icons/Send';
import AddAPhotoIcon from 'material-ui-icons/AddAPhoto';



const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export default class PostDialog extends Component<Props> {

  constructor(props) {
    super(props);
    // TODO そのうちstoreにする
    this.state = {
      imageFiles: [],
      message: ""
    }
  }


  onChangeFile(e) {
    this.setState({imageFiles: e.target.files});
  }

  onChangeMessage(e){
    this.setState({message: e.target.value});
  }


  render() {
    const {imageFiles} = this.state;
    return (
      <div>
        <div className={css(styles.messageRoot)}>
          <TextField
            id="multiline-flexible"
            label="メッセージを書く"
            multiline
            rowsMax="3"
            value={this.state.message}
            onChange={this.onChangeMessage.bind(this)}
            margin="normal"
            InputProps={{ placeholder: 'メッセージ' }}
            autoFocus
            helperText={`${50-this.state.message.length}文字`}
            fullWidth
          />
          <Button className={css(styles.sendButton)} fab>
            <SendIcon className={css(styles.sendIcon)}/>
          </Button>
        </div>
        <div className={css(styles.imagesRoot)}>
          {imageFiles.length < 1 && <AddAPhotoIcon onClick={() => this.refs.inputFile.click()} className={css(styles.addPhotoIcon)}/>}
          {this.renderImages()}
          <input type="file" ref="inputFile" onChange={this.onChangeFile.bind(this)} accept="image/*" style={{display:"none"}}/>
        </div>
      </div>
    );
  }


  renderImages() {
    const {imageFiles} = this.state;

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

















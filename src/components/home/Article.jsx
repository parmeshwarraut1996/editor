import React, { Component } from "react";
// import Header from "../header/Header";
// import ToolBar from "../toolbar/ToolBar";
import style from "./Article.less";
import EditorToolBar from "../toolbar/ToolBar";
var logo = require("../../assets/Logo.png");
import {
  Button,
  Input,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import ImagePicker from "../image-picker/ImagePicker";
import SlateToolbar from "../slate-toolbar/SlateToolbar";

const theme = createMuiTheme({
  overrides: {
    MuiInputBase:{
      root:{
      
        fontSize:'30px',
        fontWeight:'bold',
        overflow:'hidden'
      },
      multiline:{
        padding:'0'
      }
      

    }
   
    
  }
});

class Article extends Component {
  constructor() {
    super();
  
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className={style.Container}>
        <div className={style.Header}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <Button id={style.BtnPublish}>publish</Button>
          </div>
        </div>

        
          <EditorToolBar />

        
          <ImagePicker />
        
        <div className={style.HeadlineDiv}>
          <Input className={style.Headline} multiline={true} disableUnderline={true} placeholder="Headline" />
        </div>
        <div>
        <SlateToolbar font={this.changeFont}/>
        </div>
      </div>
      
      </MuiThemeProvider>
    );
  }
}
export default Article;

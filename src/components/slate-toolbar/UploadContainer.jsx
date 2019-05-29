import React, { Component } from "react";
import style from "./UploadContainer.less";
var image = require("../../assets/image_blue_icon_1.png");
var video = require("../../assets/video_blue_icon.png");
var slides = require("../../assets/slides.png");
var code = require("../../assets/code.png");

class UploadContainer extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  handleImage(event){
    if(event.key==="Enter"){
      const data=event.target.value;
      this.props.handleMedia(data)

    }

  }
  handleVideo(event){
    if(event.key==="Enter"){
      const data=event.target.value;
      this.props.handleMedia(data)

    }
  }

  handleSlide(event){
    if(event.key==="Enter"){
      const data=event.target.value;
      this.props.handleMedia(data)

    }
  }
  handleLink(event){
    if(event.key==="Enter"){
      const data=event.target.value;
      this.props.handleMedia(data)

    }
  }
  render() {
    if (this.props.data === "image") {
      return (
        <div className={style.UploadMediaDiv}>
          <div>
            <img className={style.Image} src={image} alt="" />
          </div>
          <div className={style.UploadImageDiv}>
            <h4 className={style.Heading}>Drop an image here or</h4>
            <input
              className={style.Input}
              id={style.File}
              type="file"
              name={style.Lbl}
              onKeyDown={(event)=>this.handleImage(event)}
            />
            <label className={style.Lbl} htmlFor={style.File}>
              Upload from computer
            </label>
          </div>
        </div>
      );
    } else if (this.props.data === "video")
      return (
        <div className={style.UploadVideoDiv}>
          <div>
            <img className={style.Icon} src={video} alt="" />
          </div>
          <div className={style.VideoInputDiv}>
            <input
              className={style.VideoInput}
              type="text"
              placeholder="Paste the video link here and press Enter to add"
              onKeyDown={(event)=>this.handleVideo(event)}

            />
          </div>
          <div className={style.Text}>YouTube,Vimeo and more</div>
        </div>
      );
    else if (this.props.data === "slides") {
      return (
        <div className={style.UploadVideoDiv}>
          <div>
            <img className={style.Icon} src={slides} alt="" />{" "}
            
          </div>
          <div className={style.VideoInputDiv}>
            <input
              className={style.VideoInput}
              type="text"
              placeholder="Paste the slides link here and press Enter to add"
              onKeyDown={(event)=>this.handleSlide(event)}

            />
          </div>
          <div className={style.Text}>SlideShare,Prezi and more</div>
        </div>
      );
    } else if (this.props.data === "link") {
      return (
        <div className={style.UploadVideoDiv}>
          <div>
            <img className={style.CodeIcon} src={code} alt="" />{" "}
          </div>
          <div className={style.VideoInputDiv}>
            <input
              className={style.VideoInput}
              type="text"
              placeholder="Paste the link here and press Enter to add"
              onKeyDown={(event)=>this.handleLink(event)}

            />
          </div>
          <div className={style.Text}>Twitter,Instagram and more</div>
        </div>
      );
    } else if (this.props.data === "snippet") {
      return (
        <div className={style.Snippet}>
          <pre className={style.PreText} spellCheck={false} contentEditable={true} ></pre>
        </div>
      );
    }
  }
}

export default UploadContainer;

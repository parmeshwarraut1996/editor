import React,{Component} from 'react';
import {Button} from '@material-ui/core'
import style from './AddVideo.less'
import {ADD_MEDIA } from '../../../../constants/actionTypes';
import {connect} from "react-redux";
var video = require("../../../../assets/video.png");

function mapStateToProps(state){
    return{
        open:state.addMedia.open


    }
}
const mapDispatchToProps=dispatch=>({
    addMedia:(video)=>{
        dispatch({
            type:ADD_MEDIA,
            payload:video
        })
    }
})

class AddVideo extends Component{

    constructor(){
        super();
    }

    addMedia(){
        var video="video";
        this.props.addMedia(video);
    }
    render(){
        return(
            <div className={style.Container}>
                     <Button onClick={()=>this.addMedia()}>
                    <div className={style.IconDiv}>
                    <div className={style.ImageDiv}>

                      <img className={style.AddVideo} src={video} alt="" />
                      </div>
                      <div className={style.IconTitleDiv}>Video</div>
                    </div>
                  </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddVideo);
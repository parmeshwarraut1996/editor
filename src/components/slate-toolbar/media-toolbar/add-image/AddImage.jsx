import React,{Component} from 'react';
import {Button} from '@material-ui/core'
import style from './AddImage.less'
import {ADD_MEDIA } from '../../../../constants/actionTypes';
import {connect} from "react-redux";
var image = require("../../../../assets/image.png");


function mapStateToProps(state){
    return{
        open:state.addMedia.open


    }
}
const mapDispatchToProps=dispatch=>({
    addMedia:(image)=>{
        dispatch({
            type:ADD_MEDIA,
            payload:image
        })
    }
})



class AddImage extends Component{

    constructor(){
        super();
    }

    addMedia(){
        var image="image";
        this.props.addMedia(image);
    }
    render(){
        return(
            <div className={style.Container}>
                
                     <Button onClick={()=>this.addMedia()}>
                     <div className={style.IconDiv}>
                     <div className={style.ImageDiv}>
                     <img className={style.AddImage} src={image} alt="" />
 
                     </div>
                       <div className={style.IconTitleDiv}>Image</div>
                     </div>
                   </Button>
               
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddImage);
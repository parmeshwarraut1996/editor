import React,{Component} from 'react';
import {Button} from '@material-ui/core'
import style from './AddSlides.less'
import {ADD_MEDIA } from '../../../../constants/actionTypes';
import {connect} from 'react-redux';
var slides = require("../../../../assets/slideshow.png");
function mapStateToProps(state){
    return{
        open:state.addMedia.open


    }
}
const mapDispatchToProps=dispatch=>({
    addMedia:(slides)=>{
        dispatch({
            type:ADD_MEDIA,
            payload:slides
        })
    }
})

class AddSlides extends Component{

    constructor(){
        super();
    }
    addMedia(){
        var slides="slides"
        this.props.addMedia(slides);
    }
    render(){
        return(
            <div className={style.Container}>
                     <Button onClick={()=>this.addMedia()}>
                    <div className={style.IconDiv}>
                    <div className={style.ImageDiv}>

                      <img className={style.AddSlides} src={slides} alt="" />
                      </div>
                      <div className={style.IconTitleDiv}>Slides</div>
                    </div>
                  </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddSlides);
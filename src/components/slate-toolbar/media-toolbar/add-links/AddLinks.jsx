import React,{Component} from 'react';
import {Button} from '@material-ui/core'
import style from './AddLinks.less'
import {ADD_MEDIA } from '../../../../constants/actionTypes';
var links = require("../../../../assets/add-link.png");
import {connect} from "react-redux";
function mapStateToProps(state){
    return{
        open:state.addMedia.open


    }
}
const mapDispatchToProps=dispatch=>({
    addMedia:(link)=>{
        dispatch({
            type:ADD_MEDIA,
            payload:link
        })
    }
})


class AddLinks extends Component{

    constructor(){
        super();
    }
    addMedia(){
        var link="link";
        this.props.addMedia(link);
    }
    render(){
        return(
            <div className={style.Container}>
                     <Button onClick={()=>this.addMedia()}>
                    <div className={style.IconDiv}>
                    <div className={style.ImageDiv}>

                      <img className={style.AddImage} src={links} alt="" />
                      </div>
                      <div className={style.IconTitleDiv}>Links</div>
                    </div>
                  </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddLinks);
import {combineReducers} from 'redux';
import popper from './reducers/popper';
import imagePicker from './reducers/imagePicker'
import text from './reducers/text';
import addMedia from './reducers/addMedia'
export default combineReducers({

    popper,
    imagePicker,
    text,
    addMedia

})
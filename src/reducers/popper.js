import {
  CLICK_POPPER,
  CLOSE_POPPER,
  SET_FONT_STYLE_BOLD,
  SET_FONT_STYLE_ITALIC,
  SET_UNDERLINE,
  SET_NUMBER_FORMAT,
  SET_HEADING_ONE,
  SET_HEADING_TWO,
  SET_HEADING_NORMAL
} from "../constants/actionTypes";

export default (state = { openPop: false, data: null }, action) => {
  switch (action.type) {
    case CLICK_POPPER:
      return {
        ...state,
        openPop: true
      };
    case CLOSE_POPPER:
      return {
        ...state,
        openPop: false
      };
    case SET_FONT_STYLE_BOLD:
      return {
        ...state,
        data: action.payload
      };
    case SET_FONT_STYLE_ITALIC:
      return {
        ...state,
        data: action.payload
      };
    case SET_UNDERLINE:
      return {
        ...state,
        data: action.payload
      };
    case SET_NUMBER_FORMAT:
      return {
        ...state,
        data: action.payload
      };
    case SET_HEADING_ONE:
      return {
        ...state,
        data: action.payload
      };
      case SET_HEADING_TWO:
      return{
        ...state,
        data:action.payload
      }
      case SET_HEADING_NORMAL:
      return{
        ...state,
        data:action.payload
      }

    default:
      return state;
  }
};

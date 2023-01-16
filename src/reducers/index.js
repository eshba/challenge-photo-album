import { combineReducers } from "redux";
import user from "./user";
import album from "./album";
import photo from "./photo";

export default combineReducers({
    user,
    album,
    photo
});
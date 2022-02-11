import { combineReducers } from "redux";
import { CurrentPositionReducer } from "./currentPosition";
import { sesionTypeReducer } from "./sesionTypeReducer";
import { dataSesionReducer } from "./dataSesionReducer";
import { authUserInformation } from "./authUserInformation";

export const allReducers = combineReducers({ CurrentPositionReducer, sesionTypeReducer, dataSesionReducer, authUserInformation });

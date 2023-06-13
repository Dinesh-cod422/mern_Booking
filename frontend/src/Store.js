import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "./Slice/MainSlice"
import aboutDataReducer from './Slice/AboutSlice'
import serviceDataReducer from './Slice/ServiceSlice'
import adminDataReducer from './Slice/AdminSlice'

import thunk from "redux-thunk";

const reducer = combineReducers({
    mainDataState: mainDataReducer,
    aboutDataState: aboutDataReducer,
    serviceDataState: serviceDataReducer,
    adminDataState: adminDataReducer,
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store
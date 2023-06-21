import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "./Slice/MainSlice"
import allDataReducer from "./Slice/allData"
import aboutDataReducer from './Slice/AboutSlice'
import serviceDataReducer from './Slice/ServiceSlice'
import adminDataReducer from './Slice/AdminSlice'

import thunk from "redux-thunk";

const reducer = combineReducers({
    mainDataState: mainDataReducer,
    allDataState: allDataReducer,
    aboutDataState: aboutDataReducer,
    serviceDataState: serviceDataReducer,
    adminDataState: adminDataReducer,
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store
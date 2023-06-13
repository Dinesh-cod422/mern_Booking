import { createSlice } from "@reduxjs/toolkit"

const mainDataSlice =  createSlice({
    name: "mainData",
    initialState: {
        loading: false
    },
    reducers: {
        mainDataReq(state, action){
            return{
                loading: true
            }
        },
        mainDataSuccess(state, action){
            return{
                loading: false,
                MantabaDatas: action.payload.MantabaDatas,
                MantabaCount: action.payload.count,
                resPerPage: action.payload.resPerPage
            }
        },
        mainDataFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        },
        singleMainReq(state, action){
            return{
                loading: true
            }
        },
        singleMainSuccess(state, action){
            return{
                loading: false,
                singleMaindata: action.payload.singleMaindata
            }
        },
        singleMainFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = mainDataSlice

export const { mainDataReq, mainDataSuccess, mainDataFail, singleMainFail, singleMainSuccess, singleMainReq } = actions

export default reducer
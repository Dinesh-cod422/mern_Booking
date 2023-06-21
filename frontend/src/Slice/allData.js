import { createSlice } from "@reduxjs/toolkit"

const allDataSlice =  createSlice({
    name: "allData",
    initialState: {
        loading: false
    },
    reducers: {
        allDataReq(state, action){
            return{
                loading: true
            }
        },
        allDataSuccess(state, action){
            return{
                loading: false,
                allDatas: action.payload.allDatas
            }
        },
        allDataFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = allDataSlice

export const { allDataReq, allDataSuccess, allDataFail } = actions

export default reducer
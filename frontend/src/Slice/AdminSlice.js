import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        loading: false
    },
    reducers: {
        adminDataReq(state, action) {
            return {
                loading: true
            }
        },
        adminDataSuccess(state, action){
            return{
                loading: false,
                user: action.payload.user
            }
        },
        adminDataFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = AdminSlice

export const { adminDataFail, adminDataReq, adminDataSuccess} = actions

export default reducer
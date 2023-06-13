import { createSlice } from '@reduxjs/toolkit'

const AboutSlice = createSlice({
    name: "about",
    initialState: {
        loading: false
    },
    reducers: {
        aboutReq(state, action) {
            return {
                loading: true
            }
        },
        aboutSuccess(state, action) {
            return {
                loading: false,
                abData: action.payload.abData
            }
        },
        aboutFail(state, action) {
            return{
                loading: false,
                error: action.payload
            }
        },
        aboutDetailReq(state, action) {
            return {
                loading: true
            }
        },
        aboutDetailSuccess(state, action) {
            return {
                loading: false,
                abDetailsData: action.payload.abDetailsData
            }
        },
        aboutDetailFail(state, action) {
            return{
                loading: false,
                error: action.payload
            }
        },
    }
})

const { actions, reducer } = AboutSlice

export const { aboutReq, aboutSuccess, aboutFail, aboutDetailReq, aboutDetailSuccess, aboutDetailFail } = actions

export default reducer
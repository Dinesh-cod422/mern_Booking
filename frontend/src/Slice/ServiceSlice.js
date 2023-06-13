import { createSlice } from '@reduxjs/toolkit'

const ServiceSlice = createSlice ({
    name: "service",
    initialState: {
        loading: false
    },
    reducers: {
        serviceReq(state, action){
            return {
                loading: true
            }
        },
        serviceSuccess(state, action){
            return {
                loading: false,
                ServiceData: action.payload.ServiceData
            }
        },
        servicefail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        },
        serviceDetailReq(state, action) {
            return {
                loading: true
            }
        },
        serviceDetailSuccess(state, action) {
            return {
                loading: false,
                serDetailsData: action.payload.serDetailsData
            }
        },
        serviceDetailFail(state, action) {
            return{
                loading: false,
                error: action.payload
            }
        },
    }
})
const { actions, reducer } = ServiceSlice

export const { serviceReq, serviceSuccess, servicefail, serviceDetailReq, serviceDetailSuccess, serviceDetailFail } = actions

export default reducer
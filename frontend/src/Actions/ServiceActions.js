import axios from "axios"
import { serviceDetailFail, serviceDetailReq, serviceDetailSuccess, serviceReq, serviceSuccess, servicefail } from "../Slice/ServiceSlice"

const baseURL = process.env.REACT_APP_BASE_URL


export const getServiceData = async(dispatch) => {
    try{
        dispatch(serviceReq())

        const { data } = await axios.get(`${baseURL}/api/v2/service`)
        dispatch(serviceSuccess(data))
        console.log(data)
    }
    catch(error) {
        dispatch(servicefail(error.response.data.Message))
    }
}

export const getserviceDetailsData = id => async(dispatch) => {
    try{
        dispatch(serviceDetailReq())
        
        const {data} = await axios.get(`${baseURL}/api/v2/service/${id}`)
        dispatch(serviceDetailSuccess(data))
        console.log(data)
    }
    catch (error) {
        dispatch(serviceDetailFail(error.response.data.Message))
    }
}
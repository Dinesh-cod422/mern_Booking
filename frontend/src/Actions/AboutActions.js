import axios from 'axios'
import { aboutDetailFail, aboutDetailReq, aboutDetailSuccess, aboutFail, aboutReq, aboutSuccess } from '../Slice/AboutSlice'

const baseURL = process.env.REACT_APP_BASE_URL


export const getAboutData = async(dispatch) => {
    try{
        dispatch(aboutReq())
        
        const {data} = await axios.get(`${baseURL}/api/v2/ourstory`)
        dispatch(aboutSuccess(data))
        console.log(data)
    }
    catch (error) {
        dispatch(aboutFail(error.response.data.Message))
    }
}

export const getAboutDetailsData = id => async(dispatch) => {
    try{
        dispatch(aboutDetailReq())
        
        const {data} = await axios.get(`${baseURL}/api/v2/about/${id}`)
        dispatch(aboutDetailSuccess(data))
        console.log(data)
    }
    catch (error) {
        dispatch(aboutDetailFail(error.response.data.Message))
    }
}
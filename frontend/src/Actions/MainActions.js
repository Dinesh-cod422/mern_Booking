import axios from 'axios'
import { mainDataFail, mainDataReq, mainDataSuccess, singleMainFail, singleMainReq, singleMainSuccess } from "../Slice/MainSlice"
import { allDataFail, allDataReq, allDataSuccess } from '../Slice/allData'

const baseURL = process.env.REACT_APP_BASE_URL


export const getMaindatas = (keyword, currentPage) => async(dispatch) => {
    try{
        dispatch(mainDataReq())
        let link = `${baseURL}/api/v2/homeresults?page=${currentPage}`

        if(keyword) {
            link += `&keyword=${keyword}`
        }
        const {data} = await axios.get(link)
        dispatch(mainDataSuccess(data))
        console.log(data)
    }
    catch (error) {
        dispatch(mainDataFail(error.response.data.Message))
    }
}

export const getSingleMain = id => async(dispatch) => {
    try{
        dispatch(singleMainReq())

        const {data} = await axios.get(`${baseURL}/api/v2/home/${id}`)
        dispatch(singleMainSuccess(data))
        console.log(data)
    }catch (error){
        dispatch(singleMainFail(error.response.data.Message))
    }
}

export const getallData = async(dispatch) => {
    try{
        dispatch(allDataReq())
        let link = `${baseURL}/api/v2/allData`

        
        const {data} = await axios.get(link)
        dispatch(allDataSuccess(data))
        console.log(data)
    }
    catch (error) {
        dispatch(allDataFail(error.response.data.Message))
    }
}
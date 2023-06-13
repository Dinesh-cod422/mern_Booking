import axios from "axios"
import { adminDataFail, adminDataReq, adminDataSuccess } from "../Slice/AdminSlice"

const baseURL = process.env.REACT_APP_BASE_URL


export const getAdminData = async(dispatch) => {
    try{
        dispatch(adminDataReq())

        const { data } = await axios.get(`${baseURL}/api/v2/adminData`)
        dispatch(adminDataSuccess(data))
        console.log(data)
    }
    catch (error) {
        dispatch(adminDataFail(error.response.data.Message))
    }
}
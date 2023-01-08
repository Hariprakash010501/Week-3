import { ActionTypes } from "../actionConstant/action-types"
export const loginUser=(token)=>{
    return {
        type:ActionTypes.LOGIN,
        payload:token,
    }
}
export const logoutUser=(payload)=>{
    return {
        type:ActionTypes.LOGOUT,
        payload,
    }
}
import { ActionTypes } from "../actionConstant/action-types"
export const isAuth=(state={}, {type,payload}) => {
    switch(type){
        case ActionTypes.LOGIN:
            return {
                ...state,
                    token: payload}
        case ActionTypes.LOGOUT:
            return {token:payload}
        default :
          return state
    }
}

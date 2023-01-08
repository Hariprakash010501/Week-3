import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const PrivateRoutes=({children})=>{
    const token = useSelector((state)=>state.isAuth.token)
    if(token){
        return children
    }
    return <Navigate to={"/login" }/>

}

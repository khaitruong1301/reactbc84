import React, { useEffect } from 'react'
import { ACCESS_TOKEN, getStoreText } from '../settings/setting'
import { Navigate, Route } from 'react-router-dom'
import { getUserProfileApi } from '../redux/userReducer';
import { useDispatch } from 'react-redux';

const AuthenTemplate = (props) => { // <Authen component={<AdminTemplate />} />
    const dispatch = useDispatch();
    //Gọi api kiểm tra đăng nhập
    useEffect(()=>{
        const actionThunkGetProfile = getUserProfileApi();
        dispatch(actionThunkGetProfile);
    },[]);

    return  <>
        {props.component}
    </>
}

export default AuthenTemplate



// export const RouteAuth = (props) => { 
//     const dispatch = useDispatch();
//     //Gọi api kiểm tra đăng nhập
//     useEffect(()=>{
//         const actionThunkGetProfile = getUserProfileApi();
//         dispatch(actionThunkGetProfile);
//     },[]);

//     return  <Route path={props.path} element={props.component} />;
// }


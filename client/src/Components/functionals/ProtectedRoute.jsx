import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { delete_cookie, read_cookie } from 'sfcookies';
import { GETMYUSER } from '../../redux/actions';
import { useEffect } from 'react';

const ProtectedRoute = ({children}) => {
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state)
  
  useEffect(()=>{
    dispatch(GETMYUSER())
  }, [dispatch])
  
  
  // if(!user._id && read_cookie('userToken').length){  
  //   // delete_cookie('userToken')
  //   // return <Navigate to="/"/>
  // }
  if( read_cookie('userToken').length){
    return children
  }else{
  return <Navigate to="/"/>
}
}

export default ProtectedRoute;
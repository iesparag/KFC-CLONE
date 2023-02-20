import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useToast } from "@chakra-ui/react";

function PrivateRoute({children}) {
    const toast = useToast()
    const {token} = useSelector(store=> store.login)
    // const {authState} = useContext(AuthContext)
    if(!token){
        toast({
            title: 'Please Login First',
            
            status: 'warning',
            duration: 3000,
            isClosable: true,
          })
        return <Navigate to="/login"/>
    }
    return children
}


export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const UseAuth = () => {
    const authInfo = useContext(AuthContext)
    return authInfo;
};

export default UseAuth;
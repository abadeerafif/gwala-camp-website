import { Redirect } from 'react-router-dom';
import { useCookies  } from "react-cookie";
function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    removeCookie("user")
    removeCookie("pass")
 
  return (
     <Redirect to='/' />
    
  );
}

export default Logout;

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = ({path = "/login"}) => {

    let [count,setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const interval = setInterval(()=>{
               setCount((countValue)=> --countValue)
           },1000);

           count === 0 && navigate(`/${path}`,{
            state : location.pathname
           });
           console.log(location.pathname);
           
          return () => clearInterval(interval);
    },[count,navigate, location, path]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height : "100vh"}}>
                   <h2> You will be redirected to login after {count} senconds</h2>
            <div className="spinner-border" role="status" >
                <span className="sr-only">
                </span>
            </div>
        </div>

    )
}

export default Spinner
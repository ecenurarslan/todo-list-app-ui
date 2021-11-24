import { useEffect, useState } from "react";
import Service from "../../Services";

const About =()=>{
    const [data, setData] = useState([]);
    const [auth, setAuth] = useState(false);

    useEffect(()=>{
        Service.Item.List().then(response => {
            if(response && !response.error){
                setData(response.data);
            }
        })
    },[]);
    const authCheck=()=>{
        if (localStorage.getItem("token") === null) {
            authCheck(false)
          }
    }
    return (
        <>
            {()=>authCheck}
            <div>ABOUT</div>
            <div>{JSON.stringify(data)}</div>
        </>
    );
}
export default About;
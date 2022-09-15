import React, { useEffect } from 'react'
import { Cookies } from 'typescript-cookie'
interface props {
  setGlobalInfo:any;
  GlobalInfo:any;
}

const Second = ({setGlobalInfo, GlobalInfo}:props) => {

  

 const cookie =  Cookies.get("info") ? JSON.parse(Cookies.get("info") as string) : "";
  useEffect(() =>{
    console.log(cookie);  
  },[])



    const handlerSubmit = (e:any ) => {
  const infoOBJ:any = {[e.target.placeholder]:e.target.value};
     setGlobalInfo({...GlobalInfo, ...infoOBJ})
    }


  return (
 <form action="submit" onChange={(e) => handlerSubmit(e)} className="d-flex flex-column">
         <input type="age" placeholder="age" defaultValue={cookie.age} />
 <input type="location" placeholder="location" defaultValue={cookie.location} className="mt-2"/>
    </form>
  )
}

export default Second
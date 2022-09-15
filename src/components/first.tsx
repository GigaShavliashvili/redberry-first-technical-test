
import React, { useEffect, useState } from 'react'
import { Cookies } from 'typescript-cookie'
interface info {
   name:string,
    email:string,
    password:string,
} 

interface props {
  setGlobalInfo:any;
  GlobalInfo:any;
}
const First = ({setGlobalInfo, GlobalInfo}:props) => {

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
 <input type="name"  defaultValue={cookie.name}  placeholder="name"  />
 <input type="email" placeholder="email"  defaultValue={cookie.email} className="mt-2"/>
  <input type="password" placeholder="password"  defaultValue={cookie.password} className="mt-2"/>
   <input type="password" placeholder="confrim-password" className="mt-2"/>
   </form>

  )
}

export default First
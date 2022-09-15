import React, { useEffect, useState } from 'react'
import First from '../components/first'
import Fourth from '../components/fourth'
import Second from '../components/second'
import Stepper from '../components/Stepper'
import Submit from '../components/submit'
import Therd from '../components/therd'
import { getCookie, setCookie } from 'typescript-cookie'
import { Cookies } from 'typescript-cookie'
const Question = () => {
const [page, setPage] = useState<number>(0)
const [GlobalInfo,setGlobalInfo] = useState<any>({})



useEffect(() =>{  
  Cookies.set("info",JSON.stringify(GlobalInfo));
},[page])

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}> 
        <div className="p-3 "  style={{minHeight: '60vh'}}>
      {page <= 0 && <First setGlobalInfo={setGlobalInfo} GlobalInfo={GlobalInfo}/>}
      {page === 1 && <Second setGlobalInfo={setGlobalInfo} GlobalInfo={GlobalInfo}/>}
      {page === 2 && <Therd/>}
      {page === 3 && <Fourth/>}
      {page >= 4 && <Submit/>}
        </div>
        <Stepper  setPage={setPage} page={page}/>
    </div>
  )
}

export default Question
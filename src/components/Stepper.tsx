import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";


interface props{
    setPage: (page:number) => void;
    page:number
}
const Stepper = ({setPage, page}:props) => {

const array:Number[] = new Array(5).fill(0);

  return (
    <div className="d-flex flex-column">
<div className="d-flex justify-content-between">
        <button className=""  onClick={() => {
            if(page > 0){
                setPage(page - 1);
            }
            
        }}>prev</button>
        <button className=""  onClick={() => {
                     if(page < 4){
                setPage(page + 1);
            }
        }}>next</button>

        </div>
        <div className="d-flex gap-2 justify-content-center m-3">
   {
        array.map((_, index)=> {
            return   <span role="button"  className={`d-block rounded-circle ${page >= index ? "bg-danger" : "bg-secondary"}`} style={{width:"1.5rem", height:"1.5rem"}} key={index} onClick={() => setPage(index)}>
            </span>
        })
       }
       </div>
    </div>
  )
}

export default Stepper
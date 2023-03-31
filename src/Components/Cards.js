import React from 'react'
import { Card } from './Card';
import "./Card.css"

export const Cards = (props) => {
    let data=props.data;
    let catageory=props.catageory;
    function getcourses(){
        if(catageory==="All"){
            let finalData=[];
            Object.values(data).forEach((currentResult)=>{
                currentResult.forEach((result)=>{
                    finalData.push(result);
                })
            })
            return finalData;

        }
        else
        {
            return data[catageory];
        }
       

    }
  
  return (
    <div className='wrapper'>
        {
            getcourses().map((currentResult)=>{
                return <Card key={currentResult.id} data={currentResult} />
            })
            
        }
    </div>
    
  )
}

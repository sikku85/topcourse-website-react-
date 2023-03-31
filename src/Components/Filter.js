import React from 'react'

export const Filter = (props) => {
    let filterdata=props.data;
    let catageory=props.catageory;
    let setCatageory=props.setCatageory;
    function filterHandler(title) {
      setCatageory(title);
    }
  return (
    <div>
        {
            filterdata.map((filter)=>{
                return <button onClick={()=>{
                  filterHandler(filter.title)
                }}>{filter.title}</button>
            })
        }
    </div>
  )
}

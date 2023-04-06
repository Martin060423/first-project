import React, { useEffect, useRef, useState } from 'react'

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
      return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] 
    );
    return debouncedValue;
  }

const Test = () =>{
   const [name, setName] = useState('')
    const debouncedValue = useDebounce(name, 4000)

   const foo = (e)=>{
    setName(e.target.value)
   }

   useEffect(()=>{
    if(debouncedValue){
        console.log('caalllll');
    }
   }, [debouncedValue])

    return (
            <div>

                <input onChange={foo}/>
            </div>
        )
};

export default Test;
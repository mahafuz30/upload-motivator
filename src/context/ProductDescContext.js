import React, { createContext,useEffect,useState} from 'react'
import formData from '../Utils/DummyFormData'

const ProductDescContext =  createContext();



function ProductDescContextProvider({children}) {
    const [formDataC, setformData] = useState([])
    useEffect(()=>{
        setformData(formData);
        console.log(formDataC);
    },[])
    const [coins, setcoins] = useState(0)
  return (
    <ProductDescContext.Provider value={{coins,setcoins,formDataC}}>
        {children}
    </ProductDescContext.Provider>
  )
}

export  {ProductDescContext,ProductDescContextProvider}
import React, { createContext, useEffect, useState } from "react";
import formData from "../Utils/DummyFormData";

const ProductDescContext = createContext();

function ProductDescContextProvider({ children }) {
  const [formDataC, setformData] = useState([]);
  const [coins, setcoins] = useState({
    totalCount:0,
    coinCount:0
  });


  const [fileObj, setfileObj] = useState([]);
  const handelImage = (e) => {
    setfileObj([...fileObj, e.target.files]);
  };

  const [modalShow, setModalShow] = useState(false);

  const handelRemove = (idx) => {
    const fileObjM = [...fileObj];
    fileObjM.splice(idx, 1);
    setfileObj(fileObjM);
  };

  const handelChangeForm = (e,formField) => {
    const name = e.target.name;
    const entryValue = e.target.value;
    const tempForm = [...formDataC];
    tempForm.forEach((value,idx)=>{
      if(value.formName===formField){
        value.data.forEach((formValue,idx2)=>{
          if(formValue.name===name){
            formValue.value = entryValue;
            tempForm[idx].data[idx2].value = entryValue;
            setformData(tempForm)
          }
        })
      }
    })
  };

  const handelSubmit = () => {
    let coinCount = 0;
    let totalCount = 0;
    setModalShow(true);
    formDataC.forEach((formField) => {
      formField.data.forEach((formValues) => {
        totalCount += 1;
        if (formValues.value && formValues.type !== "select") {
          coinCount = coinCount + 1;
        }
        if(formValues.value && formValues.type === "select" && !formValues.value.includes("Select")){
          coinCount = coinCount + 1;
        }
      });
    });
    setcoins({totalCount,coinCount})
  };

  useEffect(() => {
    setformData(formData);
  }, []);
  return (
    <ProductDescContext.Provider
      value={{
        coins,
        setcoins,
        formDataC,
        handelImage,
        handelRemove,
        fileObj,
        setfileObj,
        handelSubmit,
        modalShow,
        setModalShow,
        handelChangeForm,
      }}
    >
      {children}
    </ProductDescContext.Provider>
  );
}

export { ProductDescContext, ProductDescContextProvider };

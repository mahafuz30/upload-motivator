import React, { useRef, useState } from "react";
import { Container, InputGroup, Form, Button, Stack } from "react-bootstrap";

export default function ImageHandeler() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const [fileObj, setfileObj] = useState([]);
  const handelImage = (e) => {
    setfileObj([...fileObj, e.target.files]);
  };

  const handelRemove = (idx)=>{
    const fileObjM = [...fileObj];
    fileObjM.splice(idx,1);
    setfileObj(fileObjM);
  }

  const [hover, setHover] = useState(false);
  return (
    <Container>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handelImage}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"flex-start"
        }}
      >
        {fileObj.map((img, idx) => {
          const imgUrl = URL.createObjectURL(img[0]);
          return (
            <Stack key={idx}
            style={{height:200, alignItems:"center"}}
            >
              <img
                src={imgUrl}
                style={{
                  width: 100,
                  height: 100,
                  margin: 5,
                }}
                alt={`${idx} product image`}
              />
              <Button 
              variant="danger" 
              style={{width:100}}
              onClick={(e)=> handelRemove(idx)}
              > Remove </Button>
            </Stack>
          );
        })}
        <div
          style={{
            width: 100,
            backgroundColor: hover ? "#fde9f2" : "white",
            height: 100,
            borderRadius: "10%",
            borderWidth: "1px",
            borderStyle: "dashed solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
        >
          Add Image
        </div>
      </div>
    </Container>
  );
}

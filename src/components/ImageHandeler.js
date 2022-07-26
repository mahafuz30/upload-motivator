import React, { useRef, useState } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";

export default function ImageHandeler() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const [fileObj, setfileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);
  const handelImage = (e) => {
    setfileObj([...fileObj, e.target.files]);
  };

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
        }}
      >
        {fileObj.map((img, idx) => {
          const imgUrl = URL.createObjectURL(img[0]);
          return (
            <div key={idx}>
              <img
                src={imgUrl}
                style={{
                  width: 100,
                  height: 100,
                  margin: 5,
                }}
                alt={`${idx} product image`}
              />
              ;
            </div>
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

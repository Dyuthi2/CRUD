import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [id, setid] = useState("");

  
  let history = useNavigate();

  
  var index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  
  const handelSubmit = (e) => {
    e.preventDefault(); 
    let a = array[index];
   
    a.Name = name;
    a.Age = age;

    
    history("/");
  };

 
  useEffect(() => {
    setname(localStorage.getItem("Name"));
    setage(localStorage.getItem("Age"));
    setid(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

       
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={age}
            onChange={(e) => setage(e.target.value)}
            type="text"
            placeholder="Age"
          />
        </Form.Group>

       
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>

       
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;

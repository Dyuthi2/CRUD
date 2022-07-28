import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap'



// fetch('https://reqres.in/api/users/4')

//   .then(res =>{
//     if(res.ok){
//       console.log('SUCESS')
//     }else {
//       console.log('Not Sucess')
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log('ERROR'))



function App() {
  
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [category,setcategory] = useState("");
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  const [colors, setcolors] = useState([]);

  const addcolor = (e) => {
    e.preventDefault();

    const color = {
      id,
      name,
      category,
    };

    if (edit) {
      
      // update color
      let copy = colors;
      Object.assign(copy[active], color);
      setcolors([...copy]);
      setEdit(false);
      setActive(null);
    } else {
      // add color
      setcolors([...colors, color]);
    }
    setid("");
    setName("");
    setcategory("");
  };

  const onEditClick = (index) => {
    const color = colors[index];
    setid(color.id);
    setName(color.name);
    setcategory(color.category);

    setActive(index);
    setEdit(true);
  };

  const deletecolor = (color) => {
    if (window.confirm("Deleting records....")) {
      let copy = colors.filter((item) => item !== color);
      setcolors([...copy]);
    }
  };

  return (
    <div className="App">
      <h2>COLOR INFORMATION</h2>
      <div className="container">
        <div className="row-justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={addcolor}>
              <div className="form-group">
                <label htmlFor="">id</label>
                <input
                  type="text"
                  className="form-control"
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor=""> color_name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">color_category</label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                />
              </div>
              <Button className="Add">
                {edit ? "update" : "Add"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th> color_name</th>
            <th>color_category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color, index) => {
            return (
              <tr>
                <td>{color.id}</td>
                <td>{color.name}</td>
                <td>{color.category}</td>
                <td>
                  <Button
                    className="btn-btn-info"
                    onClick={() => onEditClick(index)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn btn danger"
                    onClick={() => deletecolor(color)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

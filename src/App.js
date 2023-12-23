import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"
export default function App() {

  const [radio, setRadio] = useState("")
  const [users, setUsers] = useState([
    { id: 1, first_name: "John", last_name: "Doe", age: 55, dept_number: 100, city: "Chicago", state: "IL", salary: 1000 },
    { id: 2, first_name: "Palonchi", last_name: "Pistonchiyev", age: 10, dept_number: 150, city: "London", state: "IL", salary: 1000 },
    { id: 3, first_name: "kimdur", last_name: "Doe", age: 15, dept_number: 100, city: "Chicago", state: "IL", salary: 1000 },
    { id: 4, first_name: "Polatjon", last_name: "Alendar", age: 35, dept_number: 100, city: "Chicago", state: "IL", salary: 1000 },
    { id: 5, first_name: "Polatjon", last_name: "Alendar", age: 41, dept_number: 100, city: "Chicago", state: "IL", salary: 1000 },
  ])
  const data = [
    { id: 1, first_name: "Polatjon", last_name: "Alendar", age: 47, mail: "test@gmail.com" },
    { id: 2, first_name: "Tursunxon", last_name: "Turdiyiv", age: 29, mail: "test@gmail.com" },
    { id: 3, first_name: "Join", last_name: "Doe", age: 33, mail: "test@gmail.com" },
    { id: 4, first_name: "Ulug'bek", last_name: "Alendar", age: 19, mail: "test@gmail.com" },
    { id: 5, first_name: "Azizbek", last_name: "Turdiyiv", age: 20, mail: "test@gmail.com" },
    { id: 6, first_name: "Abduazim", last_name: "Yusupov", age: 18, mail: "test@gmail.com" },
  ]
  const [user2, setUsers2] = useState(data)

  const [data2, setData2] = useState([
    { id: "", first_name: "", last_name: "", age: "", mail: "" },
  ])





  // task-2
  const filter = () => {
    let result = users.filter(item => item.age > 18)
    setUsers(result)
  }

  // task - 3
  const changeInput = (event) => {
    const newData = data.filter(item => {
      return item.first_name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setUsers2(newData)
  }

  const remove = (index) => {
    const newRemove = [...user2]
    newRemove.splice(index, 1)
    setUsers2(newRemove)
  }

  const addUser =()=> {
    
  }

  const changeInput2 = (event) => {
    data2.filter((item) => item = event.target.value)
    setData2(data2)
  }


  return (
    <div>

      {/* task - 1 */}
      <div className='container'>
        <div>
          <input type="radio" name='radio' onClick={() => setRadio("Ushbu amalga rozisiz")} />
          <label>No</label>
        </div>
        <input type="radio" name='radio' onClick={() => setRadio("Siz bunga qarshisiz")} />
        <label>Yes</label>
        <h1>{radio}</h1>
      </div>

      {/* task - 2 */}
      <div className='container'>
        <div className="row mt-3">
          <div className="col-3">
            <button onClick={filter} className='btn btn-primary'>Armiyaga qabul qilish</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8 offset-2">
            <table className='table table-dark border table-hover'>
              <thead>
                <tr>
                  <th>R/N</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Dept_number</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.age}</td>
                        <td>{item.dept_number}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>{item.salary}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr />

      {/* task - 3 */}
      <div className='container mt-5 mt-5'>
        <div className="row">
          <div className="col-8 offset-2">
            <div className='d-flex justify-content-between'>
              <input type="text" placeholder='Search' onChange={changeInput} className='form-control w-25' />
              <button className='btn btn-success' onClick={addUser}>Add user</button>
            </div>

            <table className='table  table-bordered mt-3'>
              <thead>
                <tr>
                  <th>N/R</th>
                  <th>First Nama</th>
                  <th>Last Nama</th>
                  <th>Age</th>
                  <th>Mail</th>
                </tr>
              </thead>
              <tbody>
                {
                  user2.map((item, index) => {
                    return (
                      <tr key={item} >
                        <td>{index + 1}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.age}</td>
                        <td>{item.mail}</td>
                        <td><button className='btn btn-danger' onClick={(() => remove(index))}>remove</button></td>
                      </tr>
                    )
                  })
                }
                {
                  data2.map((item, index) => {
                    return (
                      <tr key={item}>
                        <td><input onChange={changeInput2} className='form-control w-75' type="number" /></td>
                        <td><input onChange={changeInput2} className='form-control w-100' type="text" placeholder='firstname' /></td>
                        <td><input onChange={changeInput2} className='form-control w-100' type="text" placeholder='lastname' /></td>
                        <td><input onChange={changeInput2} className='form-control w-100' type="number" placeholder='Age' /></td>
                        <td><input onChange={changeInput2} className='form-control w-100' type="emael" placeholder='Mail' /></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="ohirgi">w</div>
    </div>
  )
}





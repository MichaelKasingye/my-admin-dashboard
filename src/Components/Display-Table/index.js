import React from 'react'
import { Link } from "react-router-dom";

export default function index({data,number,column1,column2}) {
  // console.log(data);
  const infoData = { data: data.data.data }
  console.log(infoData);

  return (
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">{number}</th>
      <th scope="col">{column1}</th>
      <th scope="col">{column2}</th>
      

    </tr>
  </thead>
  <tbody>
    {[...infoData.data].map((info, index) => (
     <tr key={info.id}>
     <th scope="row">{index +1}</th>
     <td>{info.phoneNumber}</td>
     <td>{info.createdAt}</td>
     
     <td> <div className="filter">
             <Link className="icon" to="/" data-bs-toggle="dropdown">
               <i className="bi bi-three-dots" />
             </Link>
             <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
               <li className="dropdown-header text-start">
                 <h6>Options</h6>
               </li>
               <li>
                 <Link className="dropdown-item" to="/fetures-decription-page/:id">
                   View
                 </Link>
               </li>
               <li>
                 <Link className="dropdown-item" to="/">
                   Edit
                 </Link>
               </li>
               <li>
                 <Link className="dropdown-item" to="/">
                   Delete
                 </Link>
               </li>
             </ul>
           </div>
           </td>
   </tr>
    ))}
    {/* <tr>
      <th scope="row">1</th>
      <td>Brandon Jacob</td>
      <td>Designer</td>
      <td>28</td>
      <td>2016-05-25</td>
      <td> <div className="filter">
              <Link className="icon" to="/" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Options</h6>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fetures-decription-page/:id">
                    View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
            </td>
    </tr> */}

   
  </tbody>
</table>

  )
}

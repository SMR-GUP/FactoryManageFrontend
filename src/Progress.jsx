import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Progress.css';


function Progress() {

   
 
      
  
  const[data,setData]=useState([])

  useEffect(()=> {
    axios.get('https://puffy-burst-production.up.railway.app/getEmployee')
    .then(res =>{
        if(res.data.status=="Success")
        {
            setData(res.data.Result);
        }
    })
    .catch(err =>(console.log(err)))

},[])


return (


  <div className='px-5 py-3'>
      <div className=' d-flex justify-content-center mt-3' >
          <h4 style={{marginTop:'30px',fontFamily: 'Open Sans, sans-serif',fontSize:'30px', textDecoration: 'underline',color:'black'}}>Daily Entry</h4>
      </div>
      
      <br></br>

      <div className='mt-3' style={{ textAlign: 'center' }}>
      <table className='attendance-table' >
          <thead>
              <tr>
                  <th style={{color:'black',fontSize:'21px',fontFamily: 'Open Sans, sans-serif'}}>Name </th>
                  <th style={{color:'black',fontSize:'21px',fontFamily: 'Open Sans, sans-serif'}}>Joining Date </th>
                  <th style={{color:'black',fontSize:'21px',fontFamily: 'Open Sans, sans-serif'}}>Salary </th>
                  <th style={{color:'black',fontSize:'21px',fontFamily: 'Open Sans, sans-serif'}}>Actions</th>

              </tr>
          </thead>


          <tbody>
          {data.map((employee, index) => {
    const formattedDate = new Date(employee.date).toLocaleDateString();
    return (
        <tr key={index}>
            <td style={{color:'black',fontSize:'19px',fontFamily: 'Roboto, sans-serif'}}>{employee.name}</td>
            <td style={{color:'black',fontSize:'19px',fontFamily:'Roboto, sans-serif'}}>{new Date(formattedDate).toLocaleDateString('en-GB')}</td>
            <td style={{color:'black',fontSize:'19px',fontFamily:'Roboto, sans-serif'}}>{employee.salary}</td>
            <td>
                <Link 
                    to=
                      {`/addProgress/${employee._id}`}
                   
                    className="btn btn-success"
                    style={{
                        backgroundColor: "#ff6600", // Set background color to violet
                        color: "white", // Text color
                        border: "1px solid #ff6600", // Border color
                        borderRadius: "5px", // Border radius
                        transition: "background-color 0.1s",
                        marginLeft:"10px", // Transition effect
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#ffa366"; // Change background color to lighter shade of violet on hover
                        e.target.style.borderColor = "#ffa366";
                         // Change border color to lighter shade of violet on hover
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#ff6600"; // Revert background color on mouse out
                        e.target.style.borderColor = "#ff6600";
                         // Revert border color on mouse out
                      }}
                >
                    Add Manufacturing
                    
                </Link>

                <Link 
                    to=
                      {`/viewPacking/${employee._id}`}
                   
                    className="btn btn-danger"
                    style={{
                        backgroundColor: "#ff5050", // Set background color to violet
                        color: "white", // Text color
                        border: "1px solid #ff5050", // Border color
                        borderRadius: "5px", // Border radius
                        transition: "background-color 0.1s",
                        marginLeft:"10px", // Transition effect

                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#ff9999"; // Change background color to lighter shade of violet on hover
                        e.target.style.borderColor = "#ff9999";
                        // Change border color to lighter shade of violet on hover
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#ff5050"; // Revert background color on mouse out
                        e.target.style.borderColor = "#ff5050";
                         // Revert border color on mouse out
                      }}
                >
                    View Packing
                </Link>

            </td>
        </tr>
    );
})}

</tbody>

      </table>
      </div>
  </div>
)
}

export default Progress
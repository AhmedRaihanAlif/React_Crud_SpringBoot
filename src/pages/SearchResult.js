import { Link } from "react-router-dom";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="py-4" >
           
        <table className="table border shadow" style={{marginLeft:"18%",width:"80%",marginTop:"0px",backgroundColor:"white"}}>
        
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">User ID</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
            
              <th scope="col">Update Action</th>
              <th scope="col">Delete Action</th>
            </tr>
          </thead>
          <tbody>
          {
                    results.map((results,id)=>(
                            <tr >
                                <th scope="row" key={id}>{id+1}

                                </th>
                            <td>{results.user_id} </td>
                            <td>{results.password}</td>
                            <td>{results.email}</td>
                     
                            {/* <td>
                            <button
                     className="btn btn-danger mx-2"
                     //onClick={() => deleteUser(user.id)}
                   >
                     View
                   </button>
                          </td> */}
                          <td>
                            <Link
                     className="btn btn-info mx-2"
                    to={`/edituser/${results.user_id}`}
                  >
                     Update
                   </Link>
                          </td>
                          <td>
                          {/* <button
                     className="btn btn-danger mx-2"
                     onClick={() => deleteUser(user.user_id)}
                  >
                    Delete
                   </button> */}
                          </td>
                            
                 </tr>
                        )
                    )
                }

                
          </tbody>
        </table>
      </div>
  );
};
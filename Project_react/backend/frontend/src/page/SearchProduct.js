import Header from "../container/Header";
import { useState } from 'react';
import { Table } from 'react-bootstrap';



function SearchProduct () 
 {
    const [data,setData]=useState([]);
   async function search(key)
    {
        console.warn(key);

        let result =await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        console.warn(result)
        setData(result)
    }


    return ( 
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
       <h1>Search Product</h1>
       <br/>
<input type="text" onChange={(e)=>search(e.target.value)} placeholder="Search Product" className="form-control" />
<Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
              <img style={{width:100}} src={`http://localhost:8000/${item.file_path}`} alt={item.name} />
              </td>
             
            </tr>
          ))}
        </tbody>
      </Table>
         </div>
        </>
     );
}
 
export default SearchProduct;
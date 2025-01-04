import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingsRow from "./BookingsRow";
import Container from "../Container/Container";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([]);


    const url = `http://localhost:5000/bookings?email/${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
            console.log(data)
        })
    },[])
    return (
       <div>
        <Container>
        <div>
            <h1>Here I will show of my all bookings:{bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>Delete</th>
        <th>Service Image</th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     {
        bookings.map(booking=> <BookingsRow
        key={booking._id}
        booking={booking}
        ></BookingsRow>)
     }
 
 
    </tbody>


  </table>
</div>
        </div>
        </Container>
       </div>
    );
};

export default Bookings;
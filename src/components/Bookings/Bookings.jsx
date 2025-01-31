import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingsRow from "./BookingsRow";
import Container from "../Container/Container";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (id) => {
    // console.log(id)
    const proceed = confirm("Are you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("bookings deleted successful.");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = id=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({status: "confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        alert("service confirm")
        const remaining = bookings.filter(booking=>booking._id !==id)
        const updated = bookings.find(booking=>booking._id === id)
        updated.status="confirm"
        const newBooking=[updated, ...remaining]
        setBookings(newBooking)
      }
    })
  }

  return (
    <div>
      <Container>
        <div>
          <h1>Here I will show of my all bookings:{bookings.length}</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-blue-300">
                  <th></th>
                  <th>Service Image</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <BookingsRow
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                  ></BookingsRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bookings;

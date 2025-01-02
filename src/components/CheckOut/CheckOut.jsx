import { useLoaderData } from "react-router-dom";
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";



const CheckOut = () => {

    const {user}=useContext(AuthContext)
    console.log(user)
    const services=useLoaderData()
    const {_id,title,price,img}=services;

    const handleBookService=event=>{
        event.preventDefault()
        const form = event.target;
        const name=form.name.value;
        const date =form.date.value;
        console.log(date)
        const price=form.price.value;
        const email=user.email;
        const order ={
            customerName:name,
            date,
            img,
            price,
            service_id:_id,
            service_title:title,
            customerEmail:email

        }
        console.log(order)

        fetch("http://localhost:5000/bookings", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)


        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

        
    }
    return (
        <div>
            <Container>
               <h1>All services:{title}</h1>
               <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleBookService} className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Check Out</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-600 mb-2">
              First Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-600 mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Date"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              id="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-300 text-orange-600 font-bold py-2 px-4 rounded-md hover:bg-blue-400 transition duration-300"
        >
          Order Confirm
        </button>
      </form>
    </div>
            </Container>
        </div>
    );
};

export default CheckOut;
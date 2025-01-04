import { useEffect } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const BookingsRow = ({ booking, handleDelete }) => {
  const { service_title, img, price, _id } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-blue-300 text-red-600 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p>{service_title}</p>
      </td>
      <td>{price}</td>
      <th>
        <Link to={`/update/${_id}`}>
        <button className="btn bg-blue-300 text-orange-600 font-bold btn-xs">Update</button>
        </Link>
      </th>
    </tr>
  );
};

export default BookingsRow;

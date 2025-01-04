import Container from "../Container/Container";


const BookingsRow = ({booking}) => {
    const {service_title,img,price}=booking;

    return (

         <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>Delete</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            {/* <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div> */}
          </div>
        </td>
        <td>
          <p>{service_title}</p>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

    );
};

export default BookingsRow;
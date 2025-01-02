import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-full shadow-xl border p-2">
        <figure>
          <img
           className="w-full h-[200px]"
            src={img}
            alt="card"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold text-orange-600">Price : ${price}</p>
          <Link to={`/checkout/${_id}`}>
          <button className="btn bg-blue-300 text-orange-600">More Details</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Service;

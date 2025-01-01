import { useState } from "react";
import Container from "../Container/Container";
import { useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-4 mb-4">
          <h1 className="font-bold text-orange-600 text-center">
            Our Services
          </h1>
          <h2 className="text-2xl font-bold text-center">Our Services Area</h2>
          <p className="text-center text-1xl">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;

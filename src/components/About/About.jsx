import Container from "../../components/Container/Container"
import aboutImg from "../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="bg-blue-300 -mt-2">
            <Container>
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <p className="font-bold text-orange-600">About Us</p>
      <h1 className="text-5xl font-bold">
      We are qualified & of experience in this field
      </h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <img src={aboutImg} alt="" />
    </div>
  </div>
</div>
            </Container>
        </div>
    );
};

export default About;
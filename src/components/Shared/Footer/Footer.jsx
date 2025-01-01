import Container from "../../Container/Container";

const Footer = () => {
  return (
    <div className="bg-blue-300">
        <Container>
      <footer className="footer py-5">
        <aside>
          <h1 className="text-2xl font-bold">Car Doctor</h1>
          <p className="text-1xl">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach trainer <br /> who is also a serial .
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why car doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesibility</a>
        </nav>
      </footer>
    </Container>
    </div>
  );
};

export default Footer;

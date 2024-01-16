import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
function HeaderComp() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid text-bg-warning p-3">
          <a className="navbar-brand text-dark mx-auto p-2" href="#">
            Micro Logic Week 4 by Iqbal Pradipta
          </a>
          <div>
            <Button href="/" variant="outline-dark">Home</Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderComp;

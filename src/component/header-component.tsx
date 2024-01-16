import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function HeaderComp() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid text-bg-warning p-3">
          <a className="navbar-brand text-dark mx-auto p-2" href="#">
            Micro Logic Week 4 by Iqbal Pradipta
          </a>
          <div>
            <Link to="/">
            <Button variant="outline-dark">Home</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderComp;

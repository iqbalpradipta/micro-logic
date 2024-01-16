import { Button, Card, CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mt-5">
        <Container>
          <CardGroup>
            <Card border="warning">
              <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20220803/ourmid/pngtree-clock-icon-png-png-image_6096865.png" />
              <Card.Body>
                <Card.Title>Count Duration</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/CountDuration">
                  <Button variant="outline-warning" className="bg-dark">
                    Count Duration
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Img
                variant="top"
                src="https://png2.cleanpng.com/sh/64289b636ab994e559c1d6833c5e4c79/L0KzQYq3WMA2N5D0f5H0aYP2gLBuTfV5a5lmhtluLYLkhLa0gCVzepZzeAs2Y3Bxhrb5lPVzNZd0itdyZ36wdcnqiPFvb5YyeARuZHn3f375hgZwdKdqhuZuLUXnRInrgvMyamJpSaIDLkG3R4m7VsEyOWY7TaIANUm2R4i5WMMveJ9s/kisspng-exchange-rate-currency-converter-foreign-exchange-credito-revolvente-5d48dbc1b1d108.1478461115650559377283.png"
              />
              <Card.Body>
                <Card.Title>Currency Convert</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/CurrencyConvert">
                  <Button variant="outline-warning" className="bg-dark">
                    Currency Convert
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Img variant="top" src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/mobile-legends-logo-freelogovectors.net_-180x62.png" />
              <Card.Body>
                <Card.Title className="position-relative top-5">Mobile Legends</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Button variant="outline-warning" className="bg-dark" href="#">
                  Mobile Legends
                </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup className="mt-5">
            <Card border="warning">
              <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20220803/ourmid/pngtree-clock-icon-png-png-image_6096865.png" />
              <Card.Body>
                <Card.Title>Count Duration</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/CountDuration">
                  <Button variant="outline-warning" className="bg-dark">
                    Count Duration
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Img
                variant="top"
                src="https://png2.cleanpng.com/sh/64289b636ab994e559c1d6833c5e4c79/L0KzQYq3WMA2N5D0f5H0aYP2gLBuTfV5a5lmhtluLYLkhLa0gCVzepZzeAs2Y3Bxhrb5lPVzNZd0itdyZ36wdcnqiPFvb5YyeARuZHn3f375hgZwdKdqhuZuLUXnRInrgvMyamJpSaIDLkG3R4m7VsEyOWY7TaIANUm2R4i5WMMveJ9s/kisspng-exchange-rate-currency-converter-foreign-exchange-credito-revolvente-5d48dbc1b1d108.1478461115650559377283.png"
              />
              <Card.Body>
                <Card.Title>Currency Convert</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/CurrencyConvert">
                  <Button variant="outline-warning" className="bg-dark">
                    Currency Convert
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Img variant="top" src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/mobile-legends-logo-freelogovectors.net_-180x62.png" />
              <Card.Body>
                <Card.Title className="position-relative top-5">Mobile Legends</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Button variant="outline-warning" className="bg-dark" href="#">
                  Mobile Legends
                </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}

export default App;

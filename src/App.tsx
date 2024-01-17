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
                <Card.Title className="position-relative top-5">KING ML GAME TERBAIK DI DUNIA 🔥</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/LegendaSeluler">
                  <Button variant="outline-warning" className="bg-dark">
                    KING ML 🔥
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup className="mt-5">
            <Card border="warning">
              <Card.Img variant="top" src="https://img.freepik.com/premium-vector/tic-tac-toe-hand-drawn-sketch-tic-tac-toe-kids-game-x-o-children-game-set-win-tictactoe_502320-1777.jpg" />
              <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/TicTacToe">
                  <Button variant="outline-warning" className="bg-dark">
                    Tic Tac Toe
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
                className="mt-5"
              />
              <Card.Body>
                <Card.Title className="mt-5 pt-3 ">Matching Card</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/MatchingCard">
                  <Button variant="outline-warning" className="bg-dark">
                    Matching Card
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Img variant="top" src="https://icons.veryicon.com/png/o/miscellaneous/table-shortcuts/calculate-salary.png" />
              <Card.Body>
                <Card.Title className="position-relative top-5">Salary Calculating</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Button variant="outline-warning" className="bg-dark" href="#">
                  Salary Calculating
                </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
          <Card className="mx-auto p-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/UDFR7uXaHPbhBuGy_b_02NFJH7ktqjU-nb0JNlVeo22wSPLdR1j5KpvqJtvUD5tzmys" />
            <Card.Body>
                <Card.Title className="position-relative top-5">Word Scrambl</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Button variant="outline-warning" className="bg-dark" href="#">
                  Word Scrambl
                </Button>
              </Card.Footer>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;

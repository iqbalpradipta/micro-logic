import { Button, Card, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mt-5 p-1">
        <Container>
          <Stack direction="horizontal" gap={3} className="ms-5 ps-5">
            <Card border="warning" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20220803/ourmid/pngtree-clock-icon-png-png-image_6096865.png" />
              <Card.Body>
                <Card.Title>Count Duration</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/CountDuration">
                  <Button variant="outline-dark">
                    Count Duration
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://png2.cleanpng.com/sh/64289b636ab994e559c1d6833c5e4c79/L0KzQYq3WMA2N5D0f5H0aYP2gLBuTfV5a5lmhtluLYLkhLa0gCVzepZzeAs2Y3Bxhrb5lPVzNZd0itdyZ36wdcnqiPFvb5YyeARuZHn3f375hgZwdKdqhuZuLUXnRInrgvMyamJpSaIDLkG3R4m7VsEyOWY7TaIANUm2R4i5WMMveJ9s/kisspng-exchange-rate-currency-converter-foreign-exchange-credito-revolvente-5d48dbc1b1d108.1478461115650559377283.png"
              />
              <Card.Body>
                <Card.Title>Currency Convert</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/CurrencyConvert">
                  <Button variant="outline-dark">
                    Currency Convert
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/mobile-legends-logo-freelogovectors.net_-180x62.png" />
              <Card.Body>
                <Card.Title className="position-relative top-5">Legenda Seluler</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/LegendaSeluler">
                  <Button variant="outline-dark">
                    KING ML 🔥
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            </Stack>
            <Stack direction="horizontal" gap={3} className="mt-3">
            <Card border="warning" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-vector/tic-tac-toe-hand-drawn-sketch-tic-tac-toe-kids-game-x-o-children-game-set-win-tictactoe_502320-1777.jpg" />
              <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/TicTacToe">
                  <Button variant="outline-dark">
                    Tic Tac Toe
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning" style={{ width: "15.5rem" }}>
              <Card.Img variant="top" src="https://clipart-library.com/img/1223500.png" className="mt-5"/>
              <Card.Body>
                <Card.Title className="mt-5 pt-3 ">Matching Card</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/MatchingCard">
                  <Button variant="outline-dark">
                    Matching Card
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            <Card border="warning" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://icons.veryicon.com/png/o/miscellaneous/table-shortcuts/calculate-salary.png" />
              <Card.Body>
                <Card.Title className="position-relative top-5">Salary Calculating</Card.Title>
              </Card.Body>
              <Card.Footer className="text-bg-warning">
                <Link to="/SalaryCalculating">
                  <Button variant="outline-dark">
                    Salary Calculating
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          <Card border="warning" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/UDFR7uXaHPbhBuGy_b_02NFJH7ktqjU-nb0JNlVeo22wSPLdR1j5KpvqJtvUD5tzmys" />
            <Card.Body>
              <Card.Title className="position-relative top-5">Word Scrambl</Card.Title>
            </Card.Body>
            <Card.Footer className="text-bg-warning">
              <Link to="/WordScrambl">
                <Button variant="outline-dark" >
                  Word Scrambl
                </Button>
              </Link>
            </Card.Footer>
          </Card>
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

function CurrencyConvert() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [convertResult, setConvertResult] = useState<number | null>(null);
  const [currencyAPI, setCurrencyAPI] = useState<string>("");

  useEffect(() => {
    if (fromCurrency) {
      setCurrencyAPI(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    }
  }, [fromCurrency]);

  const countConvert = async () => {
    try {
      const response = await fetch(currencyAPI);
      const data = await response.json();

      const rate = data.rates[toCurrency];
      const result = inputValue * rate;

      setConvertResult(result);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  return (
    <>
      <Container>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Convert Currency</Form.Label>
          <Form.Control
            type="number"
            placeholder="Input Number"
            onChange={(e) => setInputValue(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Row className="mb-3 mt-2">
          <Form.Select
            className="w-25 mx-auto me-3"
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="IDR">IDR</option>
            <option value="EUR">EUR</option>
          </Form.Select>
          TO
          <Form.Select
            className="w-25 mx-auto ms-3"
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="IDR">IDR</option>
            <option value="EUR">EUR</option>
          </Form.Select>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Convert Output:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Convert Output"
            value={convertResult !== null ? convertResult.toFixed(2) : ""}
            readOnly
          />
        </Form.Group>
        <Button variant="warning outline-dark" onClick={countConvert}>
          Convert
        </Button>
      </Container>
    </>
  );
}

export default CurrencyConvert;

import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function SalaryCalculating() {
  let [salary, setSalary] = useState<any>(null);
  let [salaryclean, setSalaryClean] = useState<any>(null);
  let [salaryDirty, setSalaryDirty] = useState<any>(null);
  let [tunjangan, setTunjangan] = useState<any>(null);
  let [gajiPokok, setGajiPokok] = useState<any>(null);
  let [kewajibanPokok, setKewajibanPokok] = useState<any>(null);

  const SalaryCount = () => {

    const salaryDirty = Number(salary) + Number(tunjangan)
    const salaryclean = Number(salaryDirty - kewajibanPokok)

    setGajiPokok(salary)
    setSalaryDirty(salaryDirty);
    setSalaryClean(salaryclean);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Form.Label column lg={2}>
            Gaji Pokok
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Gaji Pokok" onChange={(e) => setSalary(e.target.value)} />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Tunjangan
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Tunjangan" onChange={(e) => setTunjangan(e.target.value)}/>
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Kewajiban Pokok
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Kewajiban Pokok" onChange={(e) => setKewajibanPokok(e.target.value)} />
          </Col>
        </Row>
        <hr className="mt-4" />
        <Row>
          <Col>
            <p>Gaji Kotor</p>
            <Form.Control placeholder="Gaji Kotor" value={salaryDirty} readOnly />
          </Col>
          <Col>
            <p>Gaji Pokok</p>
            <Form.Control placeholder="Gaji Pokok" value={gajiPokok} readOnly />
          </Col>
          <Col>
            <p>Gaji Bersih</p>
            <Form.Control placeholder="Gaji Bersih" value={salaryclean} readOnly />
          </Col>
        </Row>
        <Button className="btn btn-warning mt-2" type="button" onClick={SalaryCount}>
          Hitung
        </Button>
      </Container>
    </>
  );
}

export default SalaryCalculating;

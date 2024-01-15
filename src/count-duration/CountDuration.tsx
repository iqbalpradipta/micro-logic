import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Container, Row } from "react-bootstrap";

function CountDuration() {
  return (
    <>
      <Container>
        <Row className="position-absolute top-50 start-50 translate-middle">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <p>Enter the Target Date and Time:</p>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker />
              <Button type="button" variant="warning" size="lg">
                START TIME
              </Button>
              <p>{DatePicker()}</p>
            </DemoContainer>
          </LocalizationProvider>
        </Row>
      </Container>
    </>
  );
}

export default CountDuration;

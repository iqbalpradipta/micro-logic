import { useState, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Container, Row } from "react-bootstrap";
import dayjs from "dayjs";

function CountDuration() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  const handleStartDate = () => {
    if (selectedDate) {
      const endTime = dayjs(selectedDate);
      const now = dayjs();
      const durationInMilliseconds = endTime.diff(now);
      const durationInSeconds = Math.round(durationInMilliseconds / 1000);

      setRemainingTime(durationInSeconds);
    }
  };

  let timer: number = 0;
  useEffect(() => {
    if (remainingTime && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime ? prevTime - 1 : null));
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [remainingTime]);

  const formatDuration = () => {
    if (remainingTime !== null) {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return "";
  };

  const resetTimer = () => {
    setRemainingTime(null);
    if (timer) {
      clearInterval(timer);
    }
  };

  return (
    <>
      <Container>
        <Row className="position-absolute top-50 start-50 translate-middle">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <p>Enter the Target Date and Time:</p>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker name="date" value={selectedDate} onChange={(date) => setSelectedDate(date)} />
              <Button onClick={handleStartDate} type="button" variant="warning" size="lg">
                START TIME
              </Button>
              <Button onClick={resetTimer} type="reset" variant="danger" size="lg">
                RESET
              </Button>
            </DemoContainer>
          </LocalizationProvider>
          {remainingTime !== null && <p>Count Duration: {formatDuration()}</p>}
        </Row>
      </Container>
    </>
  );
}

export default CountDuration;

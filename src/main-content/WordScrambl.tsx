import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

function WordScrambl() {
  const wordList = [
  "Kopi", 
  "Kapal", 
  "Suara",
  "PayungTeduh", 
  "PerjalananPanjang"
  ];

  const [originalWord, setOriginalWord] = useState<string>("");
  const [scrambledWord, setScrambledWord] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setRandomWord();
  }, []);

  const setRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const randomWord = wordList[randomIndex].toUpperCase();
    setOriginalWord(randomWord);
    const scrambled = shuffleWord(randomWord);
    setScrambledWord(scrambled);
  };

  const shuffleWord = (word: string): string => {
    const arrayWord = word.split("");
    for (let i = arrayWord.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayWord[i], arrayWord[j]] = [arrayWord[j], arrayWord[i]];
    }
    return arrayWord.join("");
  };

  const handleReset = () => {
    setScore(0);
    setRandomWord();
    setIsCorrect(false);
    setUserInput("");
  };

  const handleChange = (e: any) => {
    setUserInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput === originalWord) {
      setScore((prevScore) => prevScore + 1);
    } else {
      alert("Maaf, jawaban Anda salah. Coba lagi!");
    }
    setRandomWord();
    setIsCorrect(false);
    setUserInput("");
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontSize: "25px" }}>Kata yang diacak:</Form.Label>
          <br />
          <Form.Label style={{ fontWeight: "bold" }}>{scrambledWord}</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontSize: "25px" }}>Jawaban Anda:</Form.Label>
          <Form.Control type="text" placeholder="Masukkan jawaban Anda" value={userInput} onChange={handleChange} disabled={isCorrect} />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit Jawaban
        </Button>
        <Button variant="danger" onClick={handleReset} className="ms-2">
          Reset
        </Button>

        <div style={{ marginTop: "10px" }}>
          <strong>Skor: {score}</strong>
        </div>
      </Form>
    </Container>
  );
}

export default WordScrambl;

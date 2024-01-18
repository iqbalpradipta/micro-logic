import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App.tsx'
import CountDurration from './main-content/CountDuration.tsx'
import CurrencyConvert from './main-content/CurrencyConvert.tsx'
import MobileLegends from './main-content/MobileLegends.tsx'
import TicTacToe from './main-content/TicTacToe.tsx'
import MatchingCard from "./main-content/matchingCard.tsx";
import SalaryCalculating from "./main-content/SalaryCalculating.tsx";
import WordScrambl from "./main-content/WordScrambl.tsx";

function Path() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/CountDuration" element={<CountDurration />} />
            <Route path="/CurrencyConvert" element={<CurrencyConvert />} />
            <Route path="/LegendaSeluler" element={<MobileLegends />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />
            <Route path="/MatchingCard" element={<MatchingCard />} />
            <Route path="/SalaryCalculating" element={<SalaryCalculating />} />
            <Route path="/WordScrambl" element={<WordScrambl />} />
        </Routes>
    </Router>
  );
}

export default Path;

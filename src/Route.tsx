import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App.tsx'
import CountDurration from './main-content/CountDuration.tsx'
import CurrencyConvert from './main-content/CurrencyConvert.tsx'

function Path() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/countDuration" element={<CountDurration />} />
            <Route path="/CurrencyConvert" element={<CurrencyConvert />} />
        </Routes>
    </Router>
  );
}

export default Path;

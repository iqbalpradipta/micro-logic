import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App.tsx'
import CountDurration from './main-content/CountDuration.tsx'
import CurrencyConvert from './main-content/CurrencyConvert.tsx'
import MobileLegends from './main-content/MobileLegends.tsx'

function Path() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/CountDuration" element={<CountDurration />} />
            <Route path="/CurrencyConvert" element={<CurrencyConvert />} />
            <Route path="/LegendaSeluler" element={<MobileLegends />} />
        </Routes>
    </Router>
  );
}

export default Path;

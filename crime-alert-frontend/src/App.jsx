// App.js
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReportPage from "./pages/ReportPage";
import ReportsPage from "./pages/ReportsPage";
import Navbar from "./components/Navbar";
import './styles/main.css';


const App = () => {
  const [reports, setReports] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");

  // Fetch reports from backend
  useEffect(() => {
    fetch("http://localhost:5000/reports")
      .then(res => res.json())
      .then(data => setReports(data))
      .catch(err => console.error("Error fetching reports:", err));
  }, []);

  // Handle new report submission
  const handleReportSubmit = (newReport) => {
    setReports(prev => [...prev, newReport]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/report"
          element={<ReportPage handleReportSubmit={handleReportSubmit} />}
        />
        <Route
          path="/reports"
          element={
            <ReportsPage
              reports={reports}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

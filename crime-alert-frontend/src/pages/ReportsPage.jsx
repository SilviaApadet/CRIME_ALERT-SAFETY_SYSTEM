import React from "react";

// pages/ReportPage.jsx
import ReportForm from "../components/ReportForm";

const ReportPage = ({ handleReportSubmit }) => {
  return (
    <div className="report-page">
      <h2>Report a Crime</h2>
      <ReportForm onSubmit={handleReportSubmit} />
    </div>
  );
};

export default ReportPage;
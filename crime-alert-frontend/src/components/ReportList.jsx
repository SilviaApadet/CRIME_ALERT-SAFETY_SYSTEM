import React from "react";

// components/ReportList.jsx
import ReportCard from "./ReportCard";

const ReportList = ({ reports }) => {
  return (
    <div className="report-list">
      {reports.length === 0 ? (
        <p>No reports yet.</p>
      ) : (
        reports.map((report) => <ReportCard key={report.id} report={report} />)
      )}
    </div>
  );
};

export default ReportList;
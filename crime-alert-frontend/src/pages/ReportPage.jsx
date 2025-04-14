import React from "react";

// pages/ReportsPage.jsx
import ReportList from "../components/ReportList";
import FilterPanel from "../components/FilterPanel";

const ReportsPage = ({ reports, typeFilter, setTypeFilter }) => {
  const filteredReports = reports.filter(report =>
    report.type.toLowerCase().includes(typeFilter.toLowerCase())
  );

  return (
    <div className="reports-page">
      <h2>Crime Reports</h2>
      <FilterPanel typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <ReportList reports={filteredReports} />
    </div>
  );
};

export default ReportsPage;
import React from "react";

const ReportCard = ({ report }) => {
    return (
      <div className="report-card">
        <h3>{report.type}</h3>
        <p><strong>Name:</strong> {report.name}</p>
        <p><strong>Age:</strong> {report.age}</p>
        <p><strong>Phone:</strong> {report.phone}</p>
        <p><strong>Description:</strong> {report.description}</p>
        <p><strong>Location:</strong> {report.location}</p>
        <p><strong>Date:</strong> {report.date}</p>
      </div>
    );
  };
  
  export default ReportCard;
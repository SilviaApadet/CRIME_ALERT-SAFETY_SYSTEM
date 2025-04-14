import React from "react";

// src/api/reportApi.js

const API_URL = "http://localhost:5000/reports";

// Fetch all reports
export const fetchReports = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch reports");
    return await response.json();
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

// Submit a new report
export const submitReport = async (reportData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reportData),
    });
    if (!response.ok) throw new Error("Failed to submit report");
    return await response.json();
  } catch (error) {
    console.error("Error submitting report:", error);
    throw error;
  }
};

// Delete a report by ID
export const deleteReport = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete report");
  } catch (error) {
    console.error("Error deleting report:", error);
    throw error;
  }
};
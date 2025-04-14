import React from "react";

// src/validations/validations.js

import * as Yup from "yup";

export const reportValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  age: Yup.number()
    .typeError("Age must be a number")
    .min(13, "You must be at least 13 years old")
    .required("Age is required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  type: Yup.string()
    .min(3, "Crime type must be at least 3 characters")
    .required("Crime type is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),

  location: Yup.string()
    .min(3, "Location must be at least 3 characters")
    .required("Location is required"),

  date: Yup.date()
    .required("Date of incident is required")
    .max(new Date(), "Date cannot be in the future"),
});
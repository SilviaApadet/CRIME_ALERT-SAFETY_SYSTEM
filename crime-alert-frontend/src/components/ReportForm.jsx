import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReportForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    phone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
    type: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: '', age: '', phone: '', type: '',
        description: '', location: '', date: ''
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="report-form">
      <label className="form-title">Report a Crime</label>
        {['name', 'age', 'phone', 'type', 'description', 'location', 'date'].map(field => (
          <div key={field} className="form-group">
            
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <Field name={field} type={field === 'description' ? 'textarea' : field === 'date' ? 'date' : 'text'} className="form-control" />
            <ErrorMessage name={field} component="div" className="error-message" />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </Form>
    </Formik>
  );
};

export default ReportForm;
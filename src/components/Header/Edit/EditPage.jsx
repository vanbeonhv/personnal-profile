import React, { useState } from "react";
import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./edit.css";

const EditPage = (props) => {
  const { setEdit } = props;
  const handleSave = () => {
    setEdit(false);
  };
  const formSchema = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required(),
    desc: Yup.string(),
  });
  const [form, setForm] = useState({
    name: "",
    age: "",
    desc: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Formik initialValues={form} validationSchema={formSchema} onSubmit>
        <Form>
          <div className="edit-container">
            <button className="close" onClick={handleSave}>
              SAVE
            </button>
            <div className="edit-profile">Edit Profile</div>
            <div className="input-container">
              <label htmlFor={form.name}>Display name</label>
              <Field
                name="name"
                value={form.name || ""}
                onChange={handleChange}
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="title"
              />
              <label htmlFor={form.age}>Age</label>
              <Field
                name="age"
                value={form.age || ""}
                onChange={handleChange}
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="author"
              />
              <label htmlFor={form.desc}>About</label>
              <Field
                name="desc"
                as="textarea"
                value={form.desc || ""}
                onChange={handleChange}
                className="input-about"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditPage;

import React, { useState } from "react";

const LinkForm = () => {
  /* Manera de declarar el estado de la app */

  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className='card card-body' onSubmit={handleSubmit}>
      <div className='form-group input-group'>
        <div className='input-group-text bg-light'>
          <i className='material-icons'>insert_link</i>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='https://something.com'
          name='url'
        />
      </div>
      <div className='form-group input-group'>
        <div className='input-group-text bg-light'>
          <i className='material-icons'>create</i>
        </div>
        <input
          type='text'
          className='form-control'
          name='name'
          placeholder='Website Name'
        />
      </div>
      <div className='form-group'>
        <textarea
          name='description'
          rows='3'
          className='form-control'
          placeholder='Write a description'
        ></textarea>
      </div>
      <button className='btn btn-primary btn-block'>Save</button>
    </form>
  );
};

export default LinkForm;

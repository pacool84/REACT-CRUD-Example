import React, { useState } from "react";

const LinkForm = () => {
  /* Manera de declarar el estado de la app */

  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  /* Manera de actualizar el estado con los datos ingresados en el formulario */

  const handleInputChange = (e) => {
    /*  const { name, value, type, placeholder } = e.target;
    console.log(name, value, type, placeholder); */

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    }); /* Esto es clave {...values} copia los valores y el "[name]: value" altera la propiedad de la etiqueta con el valor que esten insertando en el formulario */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <textarea
          name='description'
          rows='3'
          className='form-control'
          placeholder='Write a description'
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className='btn btn-primary btn-block'>Save</button>
    </form>
  );
};

export default LinkForm;

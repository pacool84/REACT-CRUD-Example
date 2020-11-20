import React from "react";

const LinkForm = () => {
  return (
    <form className='card card-body'>
      <div className='form-group input-group'>
        <div className='input-group-text bg-light'></div>
        <input
          type='text'
          className='form-control'
          placeholder='https://something.com'
          name='url'
        />
      </div>
    </form>
  );
};

export default LinkForm;

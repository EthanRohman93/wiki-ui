'use client'
import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, type }) => {

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;


/*'use client'
import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  borderStyle?: string;
  value?: string;
}

const InputField = ({ id, label, placeholder, type, borderStyle, value }: InputFieldProps) => {
  const style = `${borderStyle} p-1 m-2`;

  
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        className={style}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      <button type='submit'>Submit</button>
    </div>
  );
};

export default InputField;
*/

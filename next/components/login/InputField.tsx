'use client'
import { cookies } from 'next/headers';
import React, { useState } from 'react';

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
  const cookieStore = cookies();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    try {
      console.log(cookieStore.get(id));
    }
    catch (error) {
      console.log('failed to set cookie', error)
    }
  }
  
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        className={style}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='submit' onSubmit={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputField;


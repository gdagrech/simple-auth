import cssClasses from './Input.module.css';
import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  });

  return (
    <div
      className={`${cssClasses.control} ${
        props.isValid === false ? cssClasses.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.emailState}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;

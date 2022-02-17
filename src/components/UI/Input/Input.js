import cssClasses from './Input.module.css';

const Input = (props) => {
  return (
    <div
      className={`${cssClasses.control} ${
        props.isValid === false ? cssClasses.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.emailState}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;

const Input = ({
  type,
  name,
  className,
  id,
  value,
  onChange,
  placeholder,
  disabled,
  readOnly,
  onFocus,
  onBlur,
  onClick,
}) => {
  return (
    <input
      type={type}
      name={name}
      className={className}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    />
  );
};

export default Input;

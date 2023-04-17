const Button = ({ children, onClick, disabled, id, type, className }) => {
  return (
    <button
      type={type}
      className={className}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

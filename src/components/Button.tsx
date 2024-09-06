import React, { FC } from "react";

const Button: FC<CustomButtonProps> = ({
  label,
  action,
  className,
  id,
  style,
  buttonType = "submit",
}) => {
  return (
    <button
      className={`${className} text-white`}
      id={id}
      onClick={action}
      style={style}
      type={buttonType}
    >
      {label}
    </button>
  );
};

export default Button;

import React, { ButtonHTMLAttributes, FC, RefObject, useRef } from 'react';
import { SECOND } from '../../../utils/date';
import './button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  children,
  onClick,

  className,
  style,
  type,
  disabled,
}) => {
  const ref: RefObject<HTMLButtonElement> = useRef(null);

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.currentTarget.offsetTop;
    const buttonLeft = e.currentTarget.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    ref.current?.appendChild(circle);

    setTimeout(() => circle.remove(), SECOND / 2);
  };

  return (
    <button
      type={type}
      className={`ripple btn ${className ? className : ''}`}
      style={style}
      ref={ref}
      disabled={disabled}
      onClick={(e) => {
        handleRippleEffect(e);
        onClick && onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;

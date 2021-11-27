import { useSwitch, UseSwitchProps } from '@mui/material';
import { styled } from '@mui/system';
import clsx from 'clsx';
import React, { FC } from 'react';

const SwitchRoot = styled("span")`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
`;

const SwitchInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled("span")`
  position: absolute;
  display: block;
  background: #3f51b5;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  top: 1rem;
  left: 0.5rem;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: flex;
    content: "";
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>')
      center center no-repeat;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(1rem);

    &:before {
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>')
        center center no-repeat;
    }
  }
`;

const SwitchTrack = styled("span")`
  background: #aab4be;
  border-radius: 0.75rem;
  width: 100%;
  height: 40%;
  display: flex;
`;

const MUICustomSwitch: FC<UseSwitchProps> = (props) => {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>

      <SwitchInput {...getInputProps()} />
    </SwitchRoot>
  );
};

export default MUICustomSwitch;

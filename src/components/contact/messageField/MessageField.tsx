import React, { ChangeEvent, FC } from 'react';

interface Props {
  message: IMessage;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageField: FC<Props> = ({ message, onChange }) => (
  <textarea
    placeholder="Your message"
    name="message"
    className={`${
      message.type === 'success'
        ? 'valid'
        : message.type === 'error'
        ? 'invalid'
        : ''
    }`}
    onChange={onChange}
  />
);

export default MessageField;

import { init } from 'ityped';
import React, { createRef, FC, LegacyRef, useEffect } from 'react';
import { avatarSrc, downSrc } from '../../utils/constants';
import { SECOND } from '../../utils/date';
import './intro.scss';

const Intro: FC = () => {
  const textRef: LegacyRef<HTMLSpanElement> = createRef();

  useEffect(() => {
    textRef.current &&
      init(textRef.current, {
        showCursor: true,
        backDelay: SECOND * 2,
        strings: [
          'Front-End Developer',
          'React SPA Creator',
          'Inspired Programmer',
        ],
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="intro" id="home">
      <div className="left">
        <div className="img-container">
          <img src={avatarSrc} alt="Avatar" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>

          <h1>Slava Levkovich</h1>

          <h3>
            <span ref={textRef} />
          </h3>
        </div>

        <a href="#portfolio">
          <img src={downSrc} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

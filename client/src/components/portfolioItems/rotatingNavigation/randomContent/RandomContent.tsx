import React, { FC, useContext } from 'react';

import { RotatingNavigationCtx } from '../../../../utils/context';

const RandomContent: FC = () => {
  const { data } = useContext(RotatingNavigationCtx);

  return (
    <div className="content">
      <div className="article-head">
        <h1>{data.title}</h1>

        <div className="subtitle">
          <h3>{data.author}</h3>
          <h3>{data.date}</h3>
        </div>

        <img src={data.images && data.images[0]} alt="" />
      </div>

      <p>{data.introText}</p>

      <h2>{data.articleTitles && data.articleTitles[0]}</h2>
      <p>{data.articleParagraphs && data.articleParagraphs[0]}</p>
      <p>{data.articleParagraphs && data.articleParagraphs[1]}</p>

      <h2>{data.articleTitles && data.articleTitles[1]}</h2>
      <img src={data.images && data.images[1]} alt="" />
      <p>{data.articleParagraphs && data.articleParagraphs[2]}</p>

      <h2>{data.articleTitles && data.articleTitles[2]}</h2>
      <img src={data.images && data.images[2]} alt="" />
      <p>{data.articleParagraphs && data.articleParagraphs[3]}</p>

      <h2>{data.articleTitles && data.articleTitles[3]}</h2>
      <p>{data.articleParagraphs && data.articleParagraphs[4]}</p>

      <h2>{data.articleTitles && data.articleTitles[4]}</h2>
      <img src={data.images && data.images[3]} alt="" />
      <p>{data.articleParagraphs && data.articleParagraphs[5]}</p>

      <h2>{data.articleTitles && data.articleTitles[5]}</h2>
      <p>{data.articleParagraphs && data.articleParagraphs[6]}</p>

      <h2>{data.articleTitles && data.articleTitles[6]}</h2>
      <img src={data.images && data.images[4]} alt="" />
      <p>{data.articleParagraphs && data.articleParagraphs[7]}</p>
      <p>{data.articleParagraphs && data.articleParagraphs[8]}</p>
      <p>{data.articleParagraphs && data.articleParagraphs[9]}</p>

      <h2>{data.articleTitles && data.articleTitles[7]}</h2>
      <img src={data.images && data.images[5]} alt="" />
      <p>{data.articleParagraphs && data.articleParagraphs[10]}</p>

      <h2>{data.articleTitles && data.articleTitles[8]}</h2>
      <p>{data.articleParagraphs && data.articleParagraphs[11]}</p>

      <h2>{data.articleTitles && data.articleTitles[9]}</h2>
      <img src={data.images && data.images[6]} alt="" />
      <p>{data.articleParagraphs && data.articleParagraphs[12]}</p>
    </div>
  );
};

export default RandomContent;

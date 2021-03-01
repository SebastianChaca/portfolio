import React from 'react';

import { aboutContent } from '../content/data';

export default function About({ language }) {
  let content =
    language === 'English' ? aboutContent.english : aboutContent.spanish;

  return (
    <div className='about-container'>
      <p>{content.text}</p>
      <p>{content.textTwo}</p>
      <div className='about-tec'>
        {aboutContent.tec.map((t, index) => {
          return (
            <p key={index} class>
              {t.icon}
              {t.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

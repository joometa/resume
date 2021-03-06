import React from 'react';
import { education } from '@core/db';

type EducationProps = {
  className?: string;
};

export const Education = ({ className }: EducationProps) => {
  return (
    <section className="edu-container">
      <h2 className="title">EDUCATION</h2>
      {education.map((edu) => (
        <div className="history" key={edu.id}>
          <h3>{edu.title}</h3>
          <span className="time">
            <time dateTime="2021-11">{edu.range.from}</time>
            {' - '}
            <time dateTime="2021-11">{edu.range.to}</time>
          </span>
          <p>{edu.describe}</p>
        </div>
      ))}
    </section>
  );
};

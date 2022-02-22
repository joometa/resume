import React from 'react';
import styled from 'styled-components';
import { education } from '@core/db';

type EducationProps = {
  className?: string;
};

const Education = ({ className }: EducationProps) => {
  return (
    <section className={`${className}`}>
      <h2 className="title">Education</h2>
      {education.map((edu) => (
        <div className="edu-history" key={edu.id}>
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

export default styled(Education)`
  width: 100%;
  margin: 2rem 0;

  h2 {
    font-size: 2em;
    margin: 4rem 0 2rem;
  }

  .edu-history {
    padding: 3rem 0;
    border-bottom: 1px solid #eee;

    h3 {
      font-size: 1.8em;
      margin: 0 0 1rem;
    }
    .time {
      display: block;
      margin-bottom: 1.5rem;
    }
    p {
      margin: 0 0 1rem;
      font-size: 1.1rem;
      line-height: 1.4;
      word-break: keep-all;
    }
  }
`;

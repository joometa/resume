import React from 'react';
import styled from 'styled-components';

type EducationProps = {
  className?: string;
};

const Education = ({ className }: EducationProps) => {
  return (
    <section className={`${className}`}>
      <h2 className="title">Education</h2>
      <div className="edu-history">
        <h3>항해99</h3>
        <span className="time">
          <time dateTime="2021-11">2021. 03</time>
          {' - '}
          <time dateTime="2021-11">2021. 06</time>
        </span>
        <p>
          99일간 React 주특기교육과 4회의 협업/실전프로젝트를 진행하는 스파르타코딩클럽 주관의 온라인 부트캠프
          <br />
          1기 수료
        </p>
      </div>
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

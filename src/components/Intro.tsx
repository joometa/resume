import React from 'react';
import styled from 'styled-components';

type IntroProps = {
  className?: string;
};

const Intro = ({ className }: IntroProps) => {
  return (
    <section className={`${className}`}>
      <h1 className="title">이정주</h1>
      <div className="update">
        <sub>
          <i>Last updated: 2022.02.22</i>
        </sub>
      </div>
      <p className="description">프론트엔드 개발자 입니다.</p>
    </section>
  );
};

export default styled(Intro)`
  .title {
    font-size: 2.4em;
    margin: 55px 0 55px 0;
  }

  .update {
    display: flex;
    justify-content: right;
    font-size: 14px;
    color: #a2a2a2;
  }
  .description {
    font-size: 2em;
  }
`;

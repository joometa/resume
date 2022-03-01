import React from 'react';
import styled from 'styled-components';

type IntroProps = {
  className?: string;
};

export const Intro = ({ className }: IntroProps) => {
  return (
    <section className="intro-container">
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

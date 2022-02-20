import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/app.scss';

function App() {
  return (
    <div>
      <section>
        <h1>이정주</h1>
        <p>프론트엔드 개발자 입니다.</p>
      </section>

      <section>
        <h2>Experiences</h2>
        <div className="row-left">
          <h3>OMNIOUS</h3>
          <span>Frontend Developer</span>
          <span>
            <time dateTime="2021-11">2021. 11</time>
            {' - Current'}
          </span>
        </div>
        <div className="row-right">
          <div className="project">
            <h5>OMNIOUS 어드민 페이지 리뉴얼</h5>
            <span>
              <time dateTime="2021-11">2021. 11</time>
              {' - Current'}
              {/* {' - '}
              <time dataTime="2021-11">2022. 02</time> */}
            </span>

            <h5>Description</h5>
            <p>자사의 제품별 고객관리 서비스를 제공하는 기존 어드민 페이지를 리뉴얼 하고 유지보수 하고 있습니다.</p>

            <h5>What did I do</h5>
            <ul>
              <li>프론트엔드 전체 기능 구현</li>
              <li>React 기반 컴포넌트 계층 구조 디자인</li>
            </ul>

            <h5>Teck Stack</h5>
            <p>React, TypeScript, Redux-Toolkit</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div>
          <h3>항해99</h3>
          <span className="time">
            <time dateTime="2021-11">2021. 03</time>
            {' - '}
            <time dateTime="2021-11">2021. 06</time>
          </span>
        </div>
      </section>
    </div>
  );
}

export default App;

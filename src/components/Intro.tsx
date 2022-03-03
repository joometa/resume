import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';

type IntroProps = {
  className?: string;
};

export const Intro = ({ className }: IntroProps) => {
  return (
    <section className="intro-container">
      <div className="title">이정주</div>
      <div className="update">
        <sub>
          <i>Last updated: 2022.02.22</i>
        </sub>
      </div>
      <div className="description">
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter.typeString('안녕하세요. <br/><br/> 프론트엔드 개발자 이정주 입니다.').pauseFor(500).start();
          }}
        />
      </div>

      <table className="contact">
        <tr>
          <td className="type">GitHub</td>
          <td className="info">
            <a href="https://github.com/joometa">https://github.com/joometa</a>
          </td>
        </tr>
        <tr>
          <td className="type">Blog</td>
          <td className="info">
            <a href="https://data-jj.tistory.com/">https://data-jj.tistory.com</a>
          </td>
        </tr>
        <tr>
          <td className="type">Email</td>
          <td className="info">
            <a href="mailto:jjlee1623@gmail.com">jjlee1623@gmail.com</a>
          </td>
        </tr>
      </table>
    </section>
  );
};

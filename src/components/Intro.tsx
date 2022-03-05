import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';

type IntroProps = {
  className?: string;
};

export const Intro = ({ className }: IntroProps) => {
  return (
    <section className="intro-container">
      <div className="update">
        <sub>
          <i>Last updated: 2022.03.06</i>
        </sub>
      </div>
      <div className="title">
        이정주
        <br />
        <span className="position">Frontend Engineer</span>
      </div>
      <ul className="description">
        <li className="hello">안녕하세요. 프론트엔드 개발자 이정주 입니다.</li>
        <li className="introduce">평소 좋은 코드와 설계에 대한 관심이 많아, 체득하고 습관화 하기 위해 노력합니다.</li>
        <li className="introduce">
          프론트엔드 개발자로서 사용자 친화적인 UI/UX 개발을 위해 다양한 레퍼런스 체크와 경험을 선호 합니다.
        </li>
        <li className="introduce">
          <strong>백문이 불여일견</strong> 이라는 속담을 개발 모토로 삼고 여러 기술이나 라이브러리들을 직접 사용해보면서 경험치를
          쌓아가려 노력하고 있습니다.
        </li>
        <li className="introduce">
          좋은 서비스는 단순 코드 몇줄로 완성되는것이 아니라 비즈니스적인 이해도를 기반으로 협업&소통을 통해 완전해진다고
          생각합니다. 때문에 능동적인 커뮤니케이션으로 직면한 문제 해결과 발전을 위해 치열하게 경험하고 학습하고 있습니다.
        </li>
      </ul>

      {/* <div className="sub-title"> */}
      {/* <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter.typeString('Frontend Engineer').pauseFor(500).start();
            }}
          /> */}
      {/* </div> */}

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

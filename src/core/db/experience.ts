import { WorkExperience, PersonalExperience } from '@core/types';

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    corporation: {
      name: 'OMNIOUS',
      range: {
        from: '2021. 11',
        to: null
      },
      position: 'Frontend Engineer'
    },
    project: [
      {
        title: 'OMNIOUS Admin 홈페이지 리뉴얼',
        range: {
          from: '2021. 11',
          to: null
        },
        describe: '자사의 제품별 고객관리 서비스를 제공하는 기존 어드민 페이지를 리뉴얼 하고 유지보수 하고 있습니다.',
        whatIdid: ['프론트엔드 전체 기능 구현', 'React 기반 컴포넌트 계층 구조 디자인'],
        techStack: 'React, Typescript, Redux-Toolkit'
      }
    ]
  }
];

export const personalExperiences: PersonalExperience[] = [
  {
    id: 0,
    shortInfo: {
      name: 'SleepWell',
      range: {
        from: '2021. 04',
        to: '2021. 06'
      },
      position: 'Frontend Engineer',
      link: 'https://github.com/sleeeepWELL/FrontEnd'
    },
    project: {
      title: '수면관리 기록 웹서비스',
      describe:
        '사용자의 수면 관련 기록(컨디션, 태그, 시간)을 기반으로 적정수면시간을 안내해주는 웹서비스입니다. 실제 마케팅을 통해 사용자 유치를 하여 4일간 200여명의 신규유저 유입을 달성했습니다. 실제 사용자의 피드백을 통해 서비스 개선작업을 해보았으며, 프론트3명, 백엔드2명 디자이너2명으로 구성된 팀 협업 프로젝트입니다.',
      whatIdid: [
        '로그인 / 소셜로그인(kakao), 회원가입, 비밀번호 찾기',
        'chart.js 활용한 수면데이터 시각화',
        '반응형 웹페이지 구현',
        'AWS S3, Route 53, Cloud Front 통한 HTTPS 배포'
      ],
      techStack: 'React, Redux, Styled components, chart.js, nivo'
    }
  },
  {
    id: 1,
    shortInfo: {
      name: 'HobbyGram',
      range: {
        from: '2021. 04',
        to: null
      },
      position: 'Frontend Engineer',
      link: 'https://github.com/joometa/HobbyGram-Front'
    },
    project: {
      title: '취미 공유 웹서비스',
      describe: '카테고리별로 사용자의 취미를 이미지와 함꼐 게시하고 소통 할 수 있는 웹서비스 입니다.',
      whatIdid: ['CRUD', '반응형 웹페이지 구현', 'JWT 방식 로그인 구현'],
      techStack: 'React, Redux, Styled components'
    }
  }
];

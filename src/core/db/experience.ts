import { WorkExperiences } from '@core/types';

export const workExperiences: WorkExperiences = [
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

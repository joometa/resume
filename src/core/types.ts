export type WorkExperience = {
  id: number;
  corporation: Corporation;
  project: Project[];
};

export type Corporation = {
  name: string;
  range: Range;
  position: string;
};

export type Project = {
  title: string;
  range: Range;
  describe: string;
  whatIdid: string[];
  techStack: string[];
};

export type Education = {
  id: number;
  title: string;
  range: Range;
  describe: string;
};

export type Range = {
  from: string;
  to: string | null;
};

export type PersonalExperience = {
  id: number;
  shortInfo: {
    name: string;
    type: string;
    range: Range;
    position: string;
    link: string;
  };
  project: {
    title: string;
    describe: string;
    whatIdid: string[];
    techStack: string[];
  };
};

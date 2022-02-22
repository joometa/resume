export type WorkExperiences = WorkExperience[];

export type WorkExperience = {
  corporation: Corporation;
  project: Project[];
};

export type Corporation = {
  name: string;
  range: {
    from: string;
    to: null | string;
  };
  position: string;
};

export type Project = {
  title: string;
  range: {
    from: string;
    to: string | null;
  };
  describe: string;
  whatIdid: string[];
  techStack: string;
};

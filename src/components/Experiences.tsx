import React from 'react';
import { workExperiences, personalExperiences } from '@core/db';
import { WorkExperience, PersonalExperience } from '@core/types';
import github from '@src/assets/images/github.png';

type ExperiencesProps = {
  className?: string;
};

export const Experiences = ({ className }: ExperiencesProps) => {
  return (
    <section className="experience-container">
      <h2 className="title">Work Experiences</h2>

      {workExperiences.map((ex: WorkExperience) => (
        <div className="row" key={ex.id}>
          <div className="row-left">
            <h3>{ex.corporation.name}</h3>
            <span className="position">{ex.corporation.position}</span>
            <span className="work-range">
              <time dateTime="2021-11">{ex.corporation.range.from}</time>
              {ex.corporation.range.to == null ? (
                ' - Current'
              ) : (
                <>
                  {' - '}
                  <time dateTime="2021-11">{ex.corporation.range.to}</time>
                </>
              )}
            </span>
          </div>
          <div className="row-right">
            {ex.project.map((pjt, idx) => (
              <div className="project" key={idx}>
                <h4>{pjt.title}</h4>
                <span className="range">
                  <time dateTime="2021-11">{pjt.range.from}</time>
                  {pjt.range.to == null ? (
                    ' - Current'
                  ) : (
                    <>
                      {' - '}
                      <time dateTime="2021-11">{pjt.range.to}</time>
                    </>
                  )}
                </span>

                <h5>Description</h5>
                <p>{pjt.describe}</p>

                <h5>What did I do</h5>
                <ul>
                  {pjt.whatIdid.map((did) => (
                    <li key={did}>{did}</li>
                  ))}
                </ul>

                <h5>Tech Stack</h5>
                <p>{pjt.techStack}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 className="title">Personal Experiences</h2>

      {personalExperiences.map((ex: PersonalExperience) => (
        <div className="row" key={ex.id}>
          <div className="row-left">
            <h3>{ex.shortInfo.name}</h3>
            <span className="position">{ex.shortInfo.position}</span>
            <span className="work-range">
              <time dateTime="2021-11">{ex.shortInfo.range.from}</time>
              {ex.shortInfo.range.to == null ? (
                ''
              ) : (
                <>
                  {' - '}
                  <time dateTime="2021-11">{ex.shortInfo.range.to}</time>
                </>
              )}
            </span>
            <a href={ex.shortInfo.link}>
              <img className="github" src={github} alt="github" />
            </a>
          </div>
          <div className="row-right">
            <div className="project">
              <h4>{ex.project.title}</h4>

              <h5>Description</h5>
              <p>{ex.project.describe}</p>

              <h5>What did I do</h5>
              <ul>
                {ex.project.whatIdid.map((did) => (
                  <li key={did}>{did}</li>
                ))}
              </ul>

              <h5>Tech Stack</h5>
              <p>{ex.project.techStack}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

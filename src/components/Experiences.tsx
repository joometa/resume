import React from 'react';
import { workExperiences } from '@core/db';
import { WorkExperience } from '@core/types';

type ExperiencesProps = {
  className?: string;
};

export const Experiences = ({ className }: ExperiencesProps) => {
  return (
    <section className="experience-container">
      <h2 className="title">Experiences</h2>

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
    </section>
  );
};

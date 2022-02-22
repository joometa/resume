import React from 'react';
import styled from 'styled-components';
import { workExperiences } from '@core/db';
import { WorkExperience } from '@core/types';

type ExperiencesProps = {
  className?: string;
};

const Experiences = ({ className }: ExperiencesProps) => {
  return (
    <section className={`${className}`}>
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

export default styled(Experiences)`
  .title {
    font-size: 2em;
    margin: 4rem 0 2rem;
  }

  .row {
    display: flex;
    padding: 3rem 0;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;

    .row-left {
      flex-basis: 18rem;
      padding-right: 1rem;
      flex-shrink: 0;

      h3 {
        font-size: 1.8em;
        margin: 0 0 1rem;
      }
      .position {
        display: block;
      }
      .work-range {
        font-size: 14px;
        line-height: 1.15;
        color: #a2a2a2;
      }
    }

    .row-right {
      flex-grow: 1;

      .project {
        h4 {
          font-size: 1.8em;
          margin: 0 0 1rem;
        }
        .range {
          display: block;
          margin-bottom: 1.5rem;
        }
        h5 {
          font-size: 1.3rem;
          margin: 0 0 0.5rem;
          color: #333;
        }
        p {
          margin: 0 0 1rem;
          font-size: 1.1rem;
          line-height: 1.4;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem;
          font-size: 1.1rem;
          li {
            ::before {
              position: absolute;
              left: 0;
              display: inline-block;
              content: '•';
              color: #3a7bd5;
            }
            padding: 0.2rem 0 0.2rem 1rem;
            position: relative;
          }
        }
      }
    }
  }
`;

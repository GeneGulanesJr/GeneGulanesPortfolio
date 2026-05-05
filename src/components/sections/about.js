import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'TypeScript',
    'Node.js',
    'Python',
    'Next.js / React',
    'SQLite / PostgreSQL',
    'Tailwind CSS',
    'Docker',
    'AWS (EC2, S3, Lambda)',
  ];
  const skills2 = [
    'AI Agent Development',
    'LLM Integration',
    'Pi Extension Framework',
    'Tree-sitter AST Analysis',
    'Browser Automation',
    'RAG & Memory Systems',
    'Full Stack Development',
    'Cloud Architecture',
    'Linux System Administration',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Gene — a Full Stack Developer and AI Engineer based in Davao City,
              Philippines. I studied{' '}
              <a href="?">BS in Information Technology</a> at the University of the Immaculate
              Conception, and got into programming after stumbling across a hacking book in 2012.
            </p>
            <p>
              These days I build agentic AI tooling — persistent memory layers, browser automation,
              and code intelligence systems for the{' '}
              <a href="https://github.com/mariozechner/pi-coding-agent" target="blank" rel="noreferrer">
                Pi coding agent
              </a>{' '}
              framework. My open-source extensions ({' '}
              <a href="https://github.com/GeneGulanesJr/PiMemoryExtension" target="blank" rel="noreferrer">
                PiMemoryExtension
              </a>
              ,{' '}
              <a href="https://github.com/GeneGulanesJr/PiArgus" target="blank" rel="noreferrer">
                PiArgus
              </a>
              ,{' '}
              <a href="https://github.com/GeneGulanesJr/Aelvyril" target="blank" rel="noreferrer">
                Aelvyril
              </a>
              ) ship zero-cloud-dependency tools for production workflows.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <p>Here are a few skill sets that I Have:</p>
          <ul className="skills-list">
            {skills2 && skills2.map((skill2, i) => <li key={i}>{skill2}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    text-shadow: var(--glow);
    animation: boot-line 0.4s ease both;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    animation: boot-line 0.5s ease both;
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
    animation: boot-line 0.5s ease both;

    &::after {
      content: '▊';
      display: inline-block;
      margin-left: 6px;
      color: var(--green);
      text-shadow: var(--glow);
      animation: blink-cursor 1s step-end infinite;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    animation: boot-line 0.5s ease both;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Gene E. Gulanes Jr</h2>;
  const three = <h3 className="big-heading">I build intelligent systems.</h3>;
  const four = (
    <>
      <p>
        I&apos;m a Full Stack Developer and AI Engineer focused on building conversational AI
        agents, LLM powered pipelines, and cloud based systems. Currently working at{' '}
        <a href="https://curacall.com" target="_blank" rel="noreferrer">
          Curacall
        </a>{' '}
        and{' '}
        <a href="https://toaglobal.com" target="_blank" rel="noreferrer">
          TOA Global
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.youtube.com/channel/UCcrniHNob74OdxcUy8kfvOQ"
      target="_blank"
      rel="noreferrer">
      Check out my YT channel!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #040608;
    --navy: #080c10;
    --light-navy: #0e1318;
    --lightest-navy: #161e26;
    --navy-shadow: rgba(0, 0, 0, 0.9);
    --dark-slate: #2a3a4a;
    --slate: #7a99b8;
    --light-slate: #a8c4d8;
    --lightest-slate: #d0e8f4;
    --white: #eef6fc;
    --green: #c8e8ff;
    --green-tint: rgba(200, 232, 255, 0.07);
    --pink: #f472b6;
    --blue: #57cbff;

    --glow: 0 0 6px rgba(200, 232, 255, 0.6), 0 0 18px rgba(180, 220, 255, 0.3);

    --font-sans: ui-monospace, 'SF Mono', 'Fira Code', 'Courier New', monospace;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;

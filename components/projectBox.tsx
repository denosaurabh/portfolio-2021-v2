import { useState } from 'react';
import { styled } from '@styled';
import { ProjectBox as ProjectBoxProps } from '@type/project';

import useCurrentProject from '@state/currentProject';

const ProjectBox = ({
  title,
  description,
  date,
  tech,
  github,
  link,
}: ProjectBoxProps) => {
  const { currentProject, setCurrentProject } = useCurrentProject(
    (state) => state
  );

  return (
    <ProjectBoxStyled
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      onClick={() => setCurrentProject(currentProject === title ? '' : title)}
    >
      <TopBox>
        <h5>{title}</h5>
        <span>{date}</span>
      </TopBox>
      <p style={{ display: currentProject === title ? 'block' : 'none' }}>
        {' '}
        {description}
      </p>
      <BottomBox hide={currentProject === title}>
        <div className="tech">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="links">
          <a className="link" href={link} target="_blank" rel="noreferrer">
            Link
          </a>
          <a className="github" href={github} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </BottomBox>
    </ProjectBoxStyled>
  );
};

export default ProjectBox;

const ProjectBoxStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  marginBottom: '2rem',

  p: {
    fontSize: '1.6rem',
    color: '$textColor',
  },
});

const TopBox = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '2rem',

  h5: {
    fontSize: '5rem',
    fontWeight: '800',
    color: '#424242',

    textTransform: 'uppercase',
  },

  span: {
    fontSize: '1.5rem',
    color: '#5D5D5D',

    textTransform: 'uppercase',
  },

  '&:hover': {
    cursor: 'pointer',
  },
});

const BottomBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.tech': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridTemplateRows: 'repeat(2, 3rem)',
    gap: '2rem',

    span: {
      fontSize: '1.5rem',
      color: '#5D5D5D',

      textTransform: 'uppercase',
    },
  },

  '.links': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(2rem, 1fr))',
    gridTemplateRows: 'repeat(2, 3rem)',
    gap: '1rem',

    a: {
      fontSize: '1.5rem',
      fontWeight: '500',
      color: '#5D5D5D',

      textTransform: 'uppercase',
      textDecoration: 'underline',
    },
  },

  variants: {
    hide: {
      false: {
        display: 'none',
      },
    },
  },
});

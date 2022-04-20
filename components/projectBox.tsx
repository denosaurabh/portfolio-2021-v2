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
  inDevelopment,
  status,
}: ProjectBoxProps) => {
  const { currentProject, setCurrentProject } = useCurrentProject(
    (state) => state
  );

  return (
    <ProjectBoxStyled
      className="project-box"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      <TopBox>
        <TopLeftBox
          onClick={() =>
            setCurrentProject(currentProject === title ? '' : title)
          }
        >
          <h5>{title}</h5>
          <span>{date}</span>
          {status && <span className="dev">{status}</span>}
        </TopLeftBox>
        <TopRightBox className="project-top-right-box">
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              Github
            </a>
          )}
        </TopRightBox>
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
          {link && (
            <a className="link" href={link} target="_blank" rel="noreferrer">
              Link
            </a>
          )}
          {github && (
            <a
              className="github"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          )}
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
  alignItems: 'center',
  justifyContent: 'space-between',

  '&:hover': {
    cursor: 'pointer',

    '.project-top-right-box': {
      opacity: 1,
    },
  },
});

const TopLeftBox = styled('div', {
  flex: 1,

  display: 'flex',
  alignItems: 'baseline',
  gap: '2rem',

  h5: {
    fontSize: '5rem',
    fontWeight: '800',
    color: '#424242',

    maxWidth: '34rem',

    // wordBreak: 'keep-all',
    // wordWrap: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    textTransform: 'uppercase',
  },

  span: {
    fontSize: '1.5rem',
    color: '#5D5D5D',

    textTransform: 'uppercase',
  },

  '.dev': {
    padding: '0.7rem 1rem',
    border: '1px solid #424242',
    borderRadius: '2rem',

    fontSize: '1.5rem',
    color: '$textColor',
    lineHeight: '11px',
  },
});

const TopRightBox = styled('div', {
  opacity: 0,
  transition: 'opacity 0.2s',

  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '@tablet': {
    display: 'none',
  },

  a: {
    padding: '0.7rem 1rem',
    border: '1px solid #424242',
    borderRadius: '2rem',

    fontSize: '1.5rem',
    color: '$textColor',

    transition: 'transform 0.14s',

    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
});

const BottomBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

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

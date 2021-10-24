import { styled } from '@styled';

const Projects = () => {
  return (
    <ProjectsContainer className="projects">
      <h6>2021 Projects</h6>

      <ProjectBox>
        <h5>ATMOS</h5>
        <span>NOV 2021</span>
      </ProjectBox>
      <ProjectBox>
        <h5>SPACE</h5>
        <span>JULY 2021</span>
      </ProjectBox>
      <ProjectBox>
        <h5>NATURE</h5>
        <span>SEP 2021</span>
      </ProjectBox>
      <ProjectBox>
        <h5>HANS ZIMMER</h5>
        <span>MAR 2021</span>
      </ProjectBox>
      <ProjectBox>
        <h5>RHINO</h5>
        <span>JUN 2021</span>
      </ProjectBox>

      <Span>Check out more projects &rarr;</Span>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  // marginBottom: '12rem',

  h6: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#2E2E2E',

    marginBottom: '3rem',
  },
});

const ProjectBox = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '2rem',
  marginBottom: '2rem',

  textTransform: 'uppercase',

  h5: {
    fontSize: '5rem',
    fontWeight: '800',
    color: '#424242',
  },

  span: {
    fontSize: '1.5rem',
    color: '#5D5D5D',
  },
});

const Span = styled('span', {
  fontSize: '1.5rem',
  color: '$textColor',
});

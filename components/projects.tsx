import { styled } from '@stitches/react';

const Projects = () => {
  return (
    <ProjectsContainer>
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
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h6: {
    fontSize: '1.5rem',
    marginBottom: '3rem',
    fontWeight: '500',
    color: '#2E2E2E',
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
    color: ' #6B6B6B',
  },
});

import { styled } from '@styled';
import Projects from '@components/projects';

const ProjectsPage = () => {
  return (
    <ProjectsContainer>
      <Heading>
        Creater of Open Source Project &rarr;
        {/* <a href="https://github.com/denosaurabh/space">Atmos</a> & */}{' '}
        <a
          href="https://github.com/denosaurabh/space"
          target="_blank"
          rel="noreferrer"
        >
          Space
        </a>
      </Heading>
      <Projects />
    </ProjectsContainer>
  );
};

export default ProjectsPage;

const ProjectsContainer = styled('div', {
  margin: '10rem 0',

  display: 'flex',
  flexDirection: 'column',
});

const Heading = styled('h1', {
  fontSize: '4rem',
  fontWeight: '500',
  color: '$textColor',

  marginBottom: '10rem',

  a: {
    textDecoration: 'underline',
  },
});

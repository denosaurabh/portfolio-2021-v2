import Link from 'next/link';
import { styled } from '@styled';
import ProjectBox from '@components/projectBox';

import projectsData from '@data/projectsData';

const Projects = () => {
  return (
    <ProjectsContainer className="projects">
      <h6>2021 Projects</h6>

      {projectsData.map((project, i) => (
        <ProjectBox {...project} key={i} />
      ))}

      <Link href="/projects">Check out more projects &rarr;</Link>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h6: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#2E2E2E',

    marginBottom: '3rem',
  },

  a: {
    fontSize: '1.5rem',
    color: '$textColor',
  },
});

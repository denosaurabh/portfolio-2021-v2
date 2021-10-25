import Link from 'next/link';
import { styled } from '@styled';
import ProjectBox from '@components/projectBox';
import { ProjectBox as ProjectBoxProps } from '@type/project';

interface ProjectsProps {
  showMoreProjectsLink?: boolean;
  data: ProjectBoxProps[];
  title: string;
}

const Projects = ({ showMoreProjectsLink, title, data }: ProjectsProps) => {
  return (
    <ProjectsContainer className="projects">
      <h6>{title}</h6>

      {data.map((project, i) => (
        <ProjectBox {...project} key={i} />
      ))}

      {showMoreProjectsLink && (
        <Link href="/projects">Check out more projects &rarr;</Link>
      )}
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

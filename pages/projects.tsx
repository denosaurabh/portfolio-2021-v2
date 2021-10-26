import { useState } from 'react';
import { styled } from '@styled';

import Projects from '@components/projects';
import { projectsData2021, projectsData2020, projectsData2019 } from '@data/projectsData';

const ProjectsPage = () => {
  const [showOldProjects, setShowOldProjects] = useState(false);

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
      <Projects data={projectsData2021} key={1} title="2021 Projects" />
      <Projects data={projectsData2020} key={2} title="2020 Projects" />
      {showOldProjects && (
        <Projects data={projectsData2019} key={3} title="2019 Projects" />
      )}
      <Span onClick={() => setShowOldProjects(!showOldProjects)}>
        {/* My 2019 Projects are too old to look at, but if you want to check them
        out &rarr; */}
        {!showOldProjects ? 'Show' : 'Hide'} archived & oldest projects &rarr;
      </Span>
    </ProjectsContainer>
  );
};

export default ProjectsPage;

const ProjectsContainer = styled('div', {
  margin: '10rem 0',

  display: 'flex',
  flexDirection: 'column',

  '.projects': {
    marginBottom: '6rem',
  },
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

const Span = styled('span', {
  fontSize: '1.8rem',
  color: '$textColor',

  marginBottom: '5rem',

  '&:hover': {
    cursor: 'pointer',
  },
});

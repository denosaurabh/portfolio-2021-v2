import Image from 'next/image';
import { styled } from '@styled';

import Alert from '@components/alert';
import Description from '@components/description';
import Projects from '@components/projects';
import Technologies from '@components/technologies';
import Contact from '@components/contact';

import { projectsData2021 } from '@data/projectsData';

export default function Home() {
  return (
    <>
      <Alert />
      <Description />
      <Projects
        title="Top Projects"
        data={projectsData2021}
        showMoreProjectsLink
      />
      <Technologies />
      <Contact />

      <GradientBox>
        <Image src="/img/Gradient.webp" alt="Gradient" layout="fill" />
      </GradientBox>
    </>
  );
}

const GradientBox = styled('div', {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translateX(-50%)',

  width: '70rem',
  height: '70rem',

  zIndex: -10,

  '@mobile': {
    // top: '90%',

    width: '50rem',
    height: '50rem',
  },
});

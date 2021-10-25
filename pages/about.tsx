import Image from 'next/image';
import { styled } from '@styled';

const About = () => {
  return (
    <AboutContainer>
      <Heading>{new Date().getFullYear() - 2004} y'old Developer</Heading>
      <Image
        src="/img/me.webp"
        alt="Denosaurabh smiling at front of camera"
        width={500}
        height={500}
        objectFit="cover"
      />
      <Description>
        I am a 17 y'old developer who loves to code. I have a passion for web
        development and love to learn new technologies.
      </Description>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled('div', {
  margin: '5rem 0 15rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
});

const Heading = styled('h1', {
  fontSize: '4rem',
  fontWeight: '600',
});

const Description = styled('p', {
  fontSize: '1.8rem',
  fontWeight: '400',
  lineHeight: '28px',
});

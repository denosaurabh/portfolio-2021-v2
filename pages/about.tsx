import Image from 'next/image';
import { styled } from '@styled';

const About = () => {
  return (
    <AboutContainer>
      <Heading>{new Date().getFullYear() - 2004} y'old Developer</Heading>
      <Image
        src="/img/me.jpg"
        alt="Denosaurabh smiling at front of camera"
        width={500}
        height={700}
        objectFit="cover"
        quality={100}
      />
      <Description>
        I started this journey in 2018 when I was just 14 years old, I started
        learning PHP as a curiosity for programming. Later I learned some CSS &
        JS. My first project was a simple Note making app and a Quiz app.
        <br />
        <br />
        I continued learning more and more and started working on my side
        projects. Recently is the moment where I finally understood what I want
        to follow.
        <br />
        <br />
        Nowadays, I am building my big side project including Atmos & Space,
        trying to finish my last year at high school, and ready to kickstart my
        career in this industry.
        <br />
        <br />
        <span className="i">portfolio still in development ...</span>
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

  img: {
    borderRadius: '1.5rem',
  },
});

const Heading = styled('h1', {
  fontSize: '4rem',
  fontWeight: '600',
  color: '$textColorDark',
});

const Description = styled('p', {
  fontSize: '1.8rem',
  fontWeight: '400',
  lineHeight: '28px',
  color: '$textColor',

  '.i': {
    fontStyle: 'italic',
  },
});

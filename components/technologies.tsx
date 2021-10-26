import { keyframes, styled } from '@styled';

const Technologies = () => {
  return (
    <>
      <TechHeading className="tech-heading">Tech I use/learned</TechHeading>

      <TechnologiesContainer className="technologies">
        <TechnologiesBox>
          <p>NextJS</p>
          <p>ReactJS</p>
          <p>Typescript</p>
          <p>Firebase</p>
          <p>Supabase</p>
          <p>ChakraUI</p>
          <p>Framer Motion</p>
          <p>ThreeJS</p>
        </TechnologiesBox>

        <TechnologiesBox>
          <p>Tooling</p>
          <p>Redux</p>
          <p>VueJS</p>
          <p>Vercel</p>
          <p>Git</p>
          <p>NodeJS</p>
          <p>Databases</p>
          <p>GraphQL</p>
          <p>CMS</p>
        </TechnologiesBox>

        <TechnologiesBox>
          <p>PostgreSQL</p>
          <p>Performance</p>
          <p>SEO</p>
          <p>JWT</p>
          <p>Docker</p>
          <p>Redis</p>
          <p>SASS</p>
          <p>Styled Components</p>
        </TechnologiesBox>

        <TechnologiesBox>
          <p>TailwindCSS</p>
          <p>Stripe</p>
          <p>MongoDB</p>
          <p>NPM</p>
          <p>PWA</p>
          <p>MobX</p>
          <p>Responsiveness</p>
          <p>Stitches</p>
        </TechnologiesBox>
      </TechnologiesContainer>
    </>
  );
};

export default Technologies;

const TechHeading = styled('h6', {
  fontSize: '1.5rem',
  fontWeight: '500',
  color: '#2E2E2E',

  marginBottom: '3rem',
});

const TechnologiesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '>:first-child': {
    borderTop: '1px solid #A5A5A5',
  },
});

const TechAnimation = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const TechnologiesBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',

  position: 'relative',
  left: '0',

  width: '100vw',
  padding: '1.5rem 0',

  borderBottom: '1px solid #A5A5A5',

  p: {
    fontSize: '2.4rem',
    fontWeight: '500',
    color: '#BABABA', // #BABABA #5C5C5C
    textTransform: 'uppercase',

    transition: 'color 0.3s ease-in-out',

    '&:hover': {
      color: '#31362F',
    },
  },
});

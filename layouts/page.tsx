import { styled } from '@styled';

import Header from '@components/header';
import Footer from '@components/footer';

const Page = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Page;

const Container = styled('div', {
  width: '100%',
  height: 'auto',

  display: 'grid',
  gridTemplateColumns: '1fr minmax(600px, 1fr) 1fr',
  gridTemplateRows: 'repeat(auto-fit, auto)',

  '@tablet': {
    gridTemplateColumns: '1fr minmax(450px, 1fr) 1fr',
  },

  '@mobile': {
    gridTemplateColumns: '1fr minmax(98%, 1fr) 1fr',
  },

  '& > *': {
    gridColumn: '2 / 3',
  },

  '.header': {
    gridRow: '1 / 2',
  },

  '.alert': {
    gridRow: '2 / 3',

    margin: '5rem 0',
  },

  '.description': {
    gridRow: '3 / 4',
    marginBottom: '12rem',
  },

  '.projects': {
    gridRow: '4 / 5',
    marginBottom: '12rem',
  },

  '.tech-heading': {
    gridRow: '5 / 6',
  },

  '.technologies': {
    gridColumn: '1 / 3',
    gridRow: '6 / 7',
    marginBottom: '24rem',
  },

  '.contact': {
    marginBottom: '12rem',
  },

  '.footer': {
    marginBottom: '4rem',
  },
});

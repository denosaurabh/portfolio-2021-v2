import { styled } from '@styled';

import Header from '@components/header';
import Footer from '@components/footer';
import Nav from '@components/nav';
import Cursor from '@components/cursor';

import useNav from '@state/nav';

const Page = ({ children }) => {
  const { showNav } = useNav(({ showNav }) => ({
    showNav,
  }));

  return (
    <Container>
      <Cursor />
      <Header />
      {children}
      <Footer />
      {showNav && <Nav />}
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

  '.header': {},

  '.alert': {
    margin: '5rem 0',
  },

  '.description': {
    marginBottom: '12rem',
  },

  '.projects': {
    marginBottom: '12rem',
  },

  '.tech-heading': {},

  '.technologies': {
    gridColumn: '1 / 3',
    marginBottom: '24rem',
  },

  '.contact': {
    marginBottom: '12rem',
  },

  '.footer': {
    marginBottom: '4rem',
  },
});

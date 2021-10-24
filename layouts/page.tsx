import { styled } from '@styled';

const Page = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Page;

const Container = styled('div', {
  width: '100%',
  height: 'auto',

  display: 'grid',
  gridTemplateColumns: '1fr minmax(600px, 1fr) 1fr',
  gridTemplateRows: 'repeat(auto-fit, auto)',

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
    marginBottom: '12rem',
  },
});

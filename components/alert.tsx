import { styled } from '@styled';

const Alert = () => {
  return (
    <AlertStyled>
      My recent Talk:{' '}
      <b>The Ultimate Toolkit for Lazy React Developer 2021</b>
    </AlertStyled>
  );
};

export default Alert;

const AlertStyled = styled('div', {
  width: '100%',
  padding: '1.2rem 1.8rem',
  margin: '5rem 0',

  backgroundColor: '$alertBg',
  borderRadius: '12px',
  filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05))',

  fontSize: '1.6rem',

  b: {
    fontWeight: '550',
  },
});

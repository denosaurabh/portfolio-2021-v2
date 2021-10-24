import { styled } from '@styled';

const Alert = () => {
  return (
    <AlertStyled className="alert">Currently Building! 🚀🐱‍🐉</AlertStyled>
  );
};

export default Alert;

const AlertStyled = styled('div', {
  width: '100%',
  padding: '1.2rem 1.8rem',
  // margin: '5rem 0',

  backgroundColor: '$alertBg',
  // backgroundColor: '#e9c46a',

  outline: '3px solid #ff9500',
  borderRadius: '1.2rem',
  filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05))',

  fontSize: '1.6rem',

  b: {
    fontWeight: '550',
  },
});

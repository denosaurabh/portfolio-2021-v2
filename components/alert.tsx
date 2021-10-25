import { styled } from '@styled';

const Alert = () => {
  return (
    <AlertStyled className="alert">
      <b>NOTICE!</b> Currently Building this new Portfolio Site! 🚀
    </AlertStyled>
  );
};

export default Alert;

const AlertStyled = styled('div', {
  width: '100%',
  padding: '1.2rem 1.8rem',

  backgroundColor: '$alertBg',

  borderRadius: '1.2rem',
  filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05))',

  fontSize: '1.6rem',

  b: {
    fontWeight: '550',
  },
});

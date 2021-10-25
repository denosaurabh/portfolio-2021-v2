import { styled } from '@styled';

const BottomBox = () => {
  const onEmailClick = async () => {
    if (!window) return;

    await window.navigator.clipboard.writeText('denosaurabh@gmail.com');
  };

  return (
    <BottomBoxStyled className="bottom-box">
      <h4 onClick={onEmailClick}>denosaurabh@gmail.com</h4>
    </BottomBoxStyled>
  );
};

export default BottomBox;

const BottomBoxStyled = styled('div', {
  margin: '10rem 0 15rem 0',

  '@tablet': {
    margin: '10rem 0',
  },

  '@mobile': {
    margin: '6rem 0',
  },

  h4: {
    fontSize: '6rem',
    fontWeight: '400',
    color: '$textColor',
    textDecoration: 'underline',

    '&:hover': {
      cursor: 'pointer',
    },

    '@tablet': {
      fontSize: '4.7rem',
    },

    '@mobile': {
      fontSize: '3.5rem',
    },
  },
});

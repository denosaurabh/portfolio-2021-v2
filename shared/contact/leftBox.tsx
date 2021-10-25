import { styled } from '@styled';

const LeftBox = () => {
  return (
    <LeftBoxStyled className="left-box">
      <h2>STARTING A NEW PROJECT?</h2>
      <p>
        Open for client projects, offers or collaborations. <br />
        <br />
        Avaliable 24/7 for artists, creative agencies & small startups from
        anywhere.
      </p>
    </LeftBoxStyled>
  );
};

export default LeftBox;

const LeftBoxStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',

  h2: {
    fontSize: '3rem',
    fontWeight: '600',
    color: '$textColorDark',
  },

  p: {
    fontSize: '1.8rem',
    color: '$textColor',
  },
});

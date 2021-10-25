import { styled } from '@styled';

const RightBox: React.FC = () => {
  return (
    <InfoContainer className="right-box">
      <InfoBox>
        <span>Timezone</span>
        <p>GMT +5:30 </p>
      </InfoBox>
      <InfoBox>
        <span>Discord</span>
        <p>denosaurabh#8275</p>
      </InfoBox>
      <InfoBox>
        <span>Resume</span>
        <p style={{ textDecoration: 'underline' }}>Download</p>
      </InfoBox>
    </InfoContainer>
  );
};

export default RightBox;

const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  gap: '2.5rem',
});

const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  span: {
    fontSize: '1.4rem',
    color: '$textColor',
  },

  p: {
    fontSize: '1.6rem',
    fontWeight: '450',
    color: '$textColorDark',
  },
});

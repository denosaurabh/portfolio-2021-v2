import { styled } from '@styled';
import useCursorAlert from '@state/coursorAlert';

const RightBox: React.FC = () => {
  const { setAlert } = useCursorAlert(({ setAlert }) => ({ setAlert }));

  const onDiscordClick = async () => {
    if (!window) return;

    await window.navigator.clipboard.writeText('denosaurabh#8275');

    setAlert('Discord ID Copied!');
  };

  return (
    <InfoContainer className="right-box">
      <InfoBox>
        <span>Timezone</span>
        <p>GMT +5:30 </p>
      </InfoBox>
      <InfoBox onClick={onDiscordClick}>
        <span>Discord</span>
        <p style={{ cursor: 'pointer' }}>denosaurabh#8275</p>
      </InfoBox>
      <InfoBox>
        <span>Resume</span>
        <a
          href="https://read.cv/denosaurabh"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Link
        </a>
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

  'p, a': {
    fontSize: '1.6rem',
    fontWeight: '450',
    color: '$textColorDark',
  },
});

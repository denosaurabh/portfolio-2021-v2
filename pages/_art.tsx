import ArtBox from '@components/artBox';
import { styled } from '@styled';

const Art = () => {
  return (
    <>
      <Heading>Recent Arts I liked</Heading>
      <ArtContainer>
        <ArtBox
          image="https://pbs.twimg.com/media/FC3xFFaWUAQw8iJ?format=jpg&name=4096x4096"
          link="https://twitter.com/MadMaraca/status/1454083402429341701"
          creator={{
            name: '@MadMaraca',
            social: 'https://twitter.com/MadMaraca',
          }}
        />
      </ArtContainer>
      <BottomSpan>
        You are at the end of this collection! Don't worry, I update this page
        quite often, as soon as my eyes gets sparkled by a beautiful art :D
      </BottomSpan>
    </>
  );
};

export default Art;

const Heading = styled('h1', {
  fontSize: '4rem',
  margin: '8rem 0',
});

const ArtContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',

  gap: '4rem',
});

const BottomSpan = styled('span', {
  fontSize: '1.8rem',
  fontStyle: 'italic',
  lineHeight: '32px',
  color: '$textColor',

  marginTop: '8rem',
  marginBottom: '20rem',
});

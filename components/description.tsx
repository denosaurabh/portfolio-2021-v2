import { styled } from '@styled';

const Description = () => {
  return (
    <DescriptionStyled className="description">
      <h6>Multi Disciplinary developer from India</h6>
      <p>
        Although, I have worked on full-stack applications in the past and still
        sometimes do. But Nowadays, my main expertise comes in creative frontend
        end development with vast modern libraries & frameworks.
      </p>
      <span>more about me &nbsp; &rarr;</span>
    </DescriptionStyled>
  );
};

export default Description;

const DescriptionStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  // marginBottom: '12rem',

  fontSize: '1.6rem',

  h6: {
    fontSize: '1.7rem',
    fontWeight: '550',
    color: '$textColorDark',
  },

  p: {
    color: '$textColor',
    lineHeight: '24px',
  },

  span: {
    fontWeight: '450',
    fontSize: '1.6rem',
  },
});

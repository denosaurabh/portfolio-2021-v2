import Link from 'next/link';
import { styled } from '@styled';

const Description = () => {
  return (
    <DescriptionStyled className="description">
      <h6>Multi Disciplinary developer from India</h6>
      <p>
        Hi, I am Saurabh Gupta, An Independent Front End developer & designer
        living in India. I strive for simplicity, originality using cutting edge
        tools like NextJS .
        <br />
        <br />
        While enjoying this path for the past 3+ years, I have gained enormus
        knowlege & skills by working on wide varities of projects ranging from
        small creative projects to full fledge complex applications.
        <br />
        <br />
        When I am not programming I spend time playing video games, curating
        design & art inspirations and going for a long walk.
      </p>
      <Link href="/about">more about me &nbsp; &rarr;</Link>
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
    fontSize: '1.8rem',
    fontWeight: '550',
    color: '$textColorDark',
  },

  p: {
    fontSize: '1.7rem',
    color: '$textColor',
    lineHeight: '24px',
  },

  a: {
    fontWeight: '450',
    fontSize: '1.6rem',
  },
});

import Link from 'next/link';
import { styled } from '@styled';

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <LinksContainer>
        <FooterBox>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
        </FooterBox>
        <FooterBox>
          <Link href="/">Github</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Dribble</Link>
          <Link href="/">Behance</Link>
        </FooterBox>
        <FooterBox>
          <Link href="/">Talks</Link>
          <Link href="/">Technologies</Link>
          <Link href="/">Snipets</Link>
          <Link href="/">Art</Link>
        </FooterBox>
      </LinksContainer>
      <BottomContainer>
        <span>&copy; denosaurabh 2021</span>
        <span onClick={() => window.scrollTo(0, 0)}>BACK TO TOP &uarr;</span>
        <span>PORTOLIO 2021</span>
      </BottomContainer>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled('footer', {
  display: 'flex',
  flexDirection: 'column',

  gap: '6rem',
});

const LinksContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
});

const FooterBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.8rem',

  a: {
    fontSize: '1.6rem',
    color: '$textColor',
  },
});

const BottomContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '1.6rem',
    fontWeight: '500',
    color: '$textColorDark',
  },
});

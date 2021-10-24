import Link from 'next/link';
import { styled } from '@styled';

const Header = () => {
  return (
    <HeaderStyled className="header">
      <HeaderLeftBox>
        <img src="/img/deno.webp" alt="denosaurabh" width={35} height={35} />
        <p>@denosaurabh</p>
      </HeaderLeftBox>

      <Nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">Contact</Link>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled('header', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',

  color: '$textColor',
});

const HeaderLeftBox = styled('div', {
  display: 'flex',
  alignItems: 'end',
  gap: '1.5rem',

  fontSize: '1.8rem',
});

const Nav = styled('nav', {
  display: 'flex',
  gap: '2.6rem',

  fontSize: '1.6rem',
  fontWeight: '400',

  'a:last-child': {
    fontWeight: '600',
  },
});

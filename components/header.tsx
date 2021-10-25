import Link from 'next/link';
import Image from 'next/image';

import { styled } from '@styled';

const Header = () => {
  return (
    <HeaderStyled className="header">
      <HeaderLeftBox>
        <Link href="/">
          <Image
            src="/img/deno.webp"
            alt="denosaurabh"
            width={35}
            height={35}
          />
        </Link>

        <Link href="/" passHref>
          <a>@denosaurabh</a>
        </Link>
      </HeaderLeftBox>

      <Nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
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

  img: {
    cursor: 'pointer',
  },
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

import Link from 'next/link';
import { styled } from '@styled';

import useNav from '@state/nav';

const Nav = () => {
  const { setShowNav } = useNav(({ setShowNav }) => ({ setShowNav }));

  return (
    <NavContainer>
      <Link href="/" passHref>
        <a onClick={() => setShowNav(false)}>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a onClick={() => setShowNav(false)}>About</a>
      </Link>
      <Link href="/projects" passHref>
        <a onClick={() => setShowNav(false)}>Projects</a>
      </Link>
      <Link href="/contact" passHref>
        <a onClick={() => setShowNav(false)}>Contact</a>
      </Link>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  backgroundColor: '#F3F3F3',

  userSelect: 'none',
  overflow: 'hidden',

  zIndex: 50,

  a: {
    fontSize: '5rem',
    fontWeight: '400',

    textDecoration: 'underline',
  },
});

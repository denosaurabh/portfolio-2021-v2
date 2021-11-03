import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@styled';

interface ArtBoxProps {
  image: string;
  link: string;
  creator: { name: string; social: string };
}

const ArtBox = ({ image, link, creator }: ArtBoxProps) => {
  return (
    <ArtBoxStyled as="a" href={link} target="_blank" rel="noreferrer">
      <img
        src={image}
        alt="art"
        // layout="fill" objectFit="cover"
      />
      <ArtCredit>
        by{' '}
        <Link href={creator.social} passHref>
          <a target="_blank" rel="noreferrer">
            {creator.name}
          </a>
        </Link>
      </ArtCredit>
    </ArtBoxStyled>
  );
};

export default ArtBox;

const ArtBoxStyled = styled('div', {
  flexBasis: '50%',

  width: 'auto',
  height: 'fit-content',
  padding: '1rem',
  paddingBottom: '1.5rem',

  borderRadius: '2rem',
  boxShadow: '10px 10px 15px 1px rgba(0,0,0,0.27)',

  img: {
    width: '100%',
    height: '100%',
    borderRadius: '2rem',

    objectFit: 'cover',
    marginBottom: '1rem',
  },

  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    cursor: 'pointer',

    transform: 'scale(1.01) translateY(-10px)',
  },
});

const ArtCredit = styled('p', {
  fontSize: '1.4rem',
  color: '$textColor',
  marginLeft: '1rem',

  a: {
    fontWeight: '600',
    color: '$textColorDark',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

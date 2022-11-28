import { styled } from '@styled';
import Image from 'next/image';
import Link from 'next/link';

const Alert = () => {
  return (
    <AlertStyled className="alert">
      Building{' '}
      <b style={{ color: '#0080F1' }}>
        <Link href="https://niftyswap.io">
          <a target="_blank">
            Niftyswap
            <Image
              alt-="Niftyswap"
              src="https://cdn.discordapp.com/emojis/1027492509393367041.webp?size=44&quality=lossless"
              width={20}
              height={20}
            />
          </a>
        </Link>
      </b>
      at
      <b style={{ color: '#ff8735' }}>
        <Link href="https://horizon.io">
          <a target="_blank">
            {/* 🌄 */}
            <Image
              alt-="Niftyswap"
              src="https://horizon.io/favicon.png"
              width={20}
              height={20}
            />
          </a>
        </Link>
      </b>
    </AlertStyled>
  );
};

export default Alert;

const AlertStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 5,

  width: '100%',
  padding: '1.2rem 1.8rem',

  backgroundColor: '$alertBg',

  borderRadius: '1.2rem',
  filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05))',

  fontSize: '1.6rem',

  b: {
    fontWeight: '550',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,

    // textDecoration: 'underline',
  },
});

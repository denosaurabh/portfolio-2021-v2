import Link from 'next/link';
import { styled } from '@styled';

const Awards = () => {
  return (
    <AwardsStyled className="awards">
      <h6>Winnings</h6>
      <ul>
        <li>
          <b>
            <a target="_blank" href="https://devfolio.co/projects/quark-ad91">
              2021 - Polygon BUIDLIT 2021 Hackathon Winner
            </a>
          </b>
        </li>

        <li>
          <b>
            <a
              target="_blank"
              href="https://devfolio.co/projects/stark-wallet-4605"
            >
              2022 - Starknet CC 2nd Winner, with{' '}
              <a target="_blank" href="https://github.com/0xsachinK">
                @0xSachinK
              </a>
            </a>
          </b>
        </li>

        <li>
          <b>
            <a
              target="_blank"
              href="https://ethglobal.com/showcase/isle-of-colors-qruy2"
            >
              2023 - ETHGlobal Autonomous Worlds - Top 10 Finalists with{' '}
              <a target="_blank" href="https://github.com/shubhamai">
                @shubhamai
              </a>
            </a>
          </b>
        </li>

        <li>
          <b>
            <a
              target="_blank"
              href="https://ethglobal.com/showcase/inferai-21kyn"
            >
              2023 - EThGlobal HackFS - Sponsored Prize Winner with{' '}
              <a target="_blank" href="https://github.com/shubhamai">
                @shubhamai
              </a>
            </a>
          </b>
        </li>

        <li>
          <b>
            <a target="_blank" href="https://devpost.com/software/aisandbox">
              2023 - So you think you can hack? - Honourable Mention (with{' '}
              <a target="_blank" href="https://github.com/shubhamai">
                @shubhamai
              </a>
              )
            </a>
          </b>
        </li>
      </ul>
    </AwardsStyled>
  );
};

export default Awards;

const AwardsStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  // marginBottom: '12rem',

  fontSize: '1.6rem',

  li: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },

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
    fontSize: '1.6rem',
    color: '$textColorDark',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  b: {
    fontWeight: '550',
  },
});

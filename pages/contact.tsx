import { styled } from '@styled';

import LeftBox from '@shared/contact/leftBox';
import RightBox from '@shared/contact/rightBox';
import BottomBox from '@shared/contact/bottomBox';

const Contact = () => {
  return (
    <ContactContainer>
      <LeftBox />
      <RightBox />
      <BottomBox />
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '4rem',

  marginTop: '15rem',

  '.left-box': {
    flexBasis: '60%',
  },

  '.right-box': {
    flexBasis: '25%',
  },

  '.bottom-box': {
    flex: 1,
  },
});

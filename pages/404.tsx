import { styled } from '@styled';

const Page404 = () => {
  return <Heading>Not Found!</Heading>;
};

export default Page404;

const Heading = styled('h1', {
  margin: '30rem 0',

  fontSize: '6rem',
  textAlign: 'center',
  color: '$textColorDark',
});

import Header from '@components/header';
import Alert from '@components/alert';
import Description from '@components/description';
import Projects from '@components/projects';
import Technologies from '@components/technologies';

export default function Home() {
  return (
    <>
      <Header />
      <Alert />
      <Description />
      <Projects />
      <Technologies />
    </>
  );
}

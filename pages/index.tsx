import Header from '@components/header';
import Alert from '@components/alert';
import Description from '@components/description';
import Projects from '@components/projects';
import Technologies from '@components/technologies';
import Contact from '@components/contact';

export default function Home() {
  return (
    <>
      <Alert />
      <Description />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}

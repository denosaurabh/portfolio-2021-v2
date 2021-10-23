import Header from '@components/header';
import Alert from '@components/alert';
import Description from '@components/description';
import Projects from '@components/projects';

export default function Home() {
  return (
    <div>
      <Header />
      <Alert />
      <Description />
      <Projects />
    </div>
  );
}

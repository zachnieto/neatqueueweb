import CustomParticles from '../Particles';
import Sus from '../Sus';
import Stats from './Stats';
import Features from './Features';

const Home = () => {
  return (
    <div>
      <CustomParticles opacity={0.1} />
      <Sus /> {/* Why did I even do this */}
      <Stats />
      {/*<Features />*/}
    </div>
  );
};

export default Home;

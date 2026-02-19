import { useSearchParams } from 'react-router-dom';
const Home = () => {
  const [params, setParms] = useSearchParams();

  return (
    <div>
      {params},{setParms}
    </div>
  );
};
export default Home;

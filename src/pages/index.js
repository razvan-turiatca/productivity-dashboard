import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Home;

import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}

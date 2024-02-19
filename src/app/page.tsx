'use client'
import { getAccessCode } from '@/app/_util/oauth'
import { clientId, redirectUri } from '@/app/_util/apiInfo'
import styles from "./page.module.css";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    if (token) {
      router.push('/user');
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={() => getAccessCode(clientId, redirectUri)}>인스타 로그인하기</button>
      </div>
    </main>
  );
}

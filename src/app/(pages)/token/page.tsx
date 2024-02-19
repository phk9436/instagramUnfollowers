'use client'
import styles from '../../page.module.css'
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { clientId, clientSecret, redirectUri } from '@/app/_util/apiInfo';
import { ICallOauthApi } from '@/app/_types/types';

function TokenPage() {
  const params = useSearchParams();
  const accessCode = params.get('code');
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);

  const callOauthApi: ICallOauthApi = async (clientId, clientSecret, redirectUri, accessCode) => {
    const { data } = await axios.post('/api/oauth', {
      clientId,
      clientSecret,
      redirectUri,
      accessCode
    });
    localStorage.setItem('token', data);
    setIsLoaded(true);
  }

  useEffect(() => {
    if (!accessCode) {
      router.push('/');
      return;
    }
    const token = localStorage.getItem('token');
    if (!token && !isLoaded) {
      callOauthApi(clientId, clientSecret, `${redirectUri}token`, accessCode);
      return;
    }
    router.push('/user');

  }, [isLoaded]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        인스타 인증이 진행중입니다...
      </div>
    </main>
  )
}

export default TokenPage
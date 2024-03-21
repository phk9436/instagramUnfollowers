'use client'
import styles from '../../page.module.css'
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { clientId, clientSecret, redirectUri } from '@/app/_util/apiInfo';
import { ICallOauthApi } from '@/app/_types/types';
import { useRecoilState } from 'recoil';
import { oauthDataState } from '@/app/_atoms/util';

function TokenPage() {
  const params = useSearchParams();
  const accessCode = params.get('code');
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const [oauthData, setOauthData] = useRecoilState(oauthDataState);

  const callOauthApi: ICallOauthApi = async (clientId, clientSecret, redirectUri, accessCode) => {
    const { data } = await axios.post('/api/oauth', {
      clientId,
      clientSecret,
      redirectUri,
      accessCode
    });
    localStorage.setItem('oauthData', data);
    setIsLoaded(true);
  }

  useEffect(() => {
    if (!accessCode) {
      router.push('/');
      return;
    }
    const data = localStorage.getItem('oauthData');
    if (!data && !isLoaded) {
      callOauthApi(clientId, clientSecret, `${redirectUri}token`, accessCode);
      return;
    }
    if(data && oauthData === null) {
      setOauthData(JSON.parse(data));
    }
    if(oauthData) {
      router.push('/user');
    }

  }, [isLoaded, oauthData]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        인스타 인증이 진행중입니다...
      </div>
    </main>
  )
}

export default TokenPage
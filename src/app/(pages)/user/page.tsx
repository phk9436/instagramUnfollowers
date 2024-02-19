'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation';

function UserPage() {
  const router = useRouter();

  const [token, setToken] = useState('');
  console.log(token)

  useEffect(() => {
    const localToken = localStorage.getItem('token') || false;
    if (!localToken) {
      router.push('/');
      return;
    }
    if (!token) {
      setToken(localToken);
    }
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
    </main>
  )
}

export default UserPage
'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { oauthDataState } from '@/app/_atoms/util';

function UserPage() {
  const router = useRouter();

  const oauthData = useRecoilValue(oauthDataState);
  console.log(oauthData);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
    </main>
  )
}

export default UserPage
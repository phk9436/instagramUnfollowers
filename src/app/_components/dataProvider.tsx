'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { oauthDataState } from "../_atoms/util";

export default function DataProvider() {
  const pathname = usePathname();
  const router = useRouter();
  const data = localStorage.getItem('oauthData');
  const setOauthData = useSetRecoilState(oauthDataState);

  useEffect(() => {
    if(pathname === '/' || pathname === '/token') {
      return;
    }
    if(!data) {
      router.push('/');
      return;
    }
    setOauthData(JSON.parse(data));
  }, []);
  return <></>;
}
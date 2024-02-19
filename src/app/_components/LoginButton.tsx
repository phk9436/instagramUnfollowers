'use client'
import React from 'react'
import { getAccessCode } from '../_util/oauth'
import { clientId, redirectUri } from '../_util/apiInfo'


export default function LoginButton() {
  return (
    <div>
      <button onClick={() => getAccessCode(clientId, redirectUri)}>인스타 로그인하기</button>
    </div>
  )
}
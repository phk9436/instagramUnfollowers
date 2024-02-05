'use client'
import React from 'react'
import { getAccessCode } from '../_api/Oauth'
import { clientId, redirectUri } from '../_util/apiInfo'


function OauthClient() {
  return (
    <div>
      <button onClick={() => getAccessCode(clientId, redirectUri)}>인스타 로그인하기</button>
    </div>
  )
}

export default OauthClient
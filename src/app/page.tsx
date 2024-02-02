'use client';
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { clientId, clientSecret, redirectUri } from "./util/apiInfo";

export default function Home() {
  const router = useSearchParams();
  const accessCode = router.get("code");

  const redirectInstaAccess = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=user_profile`;
    window.location.href = authUrl;
  }

  console.log(accessCode)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button type="button" onClick={redirectInstaAccess}>버튼</button>
      </div>
    </main>
  );
}

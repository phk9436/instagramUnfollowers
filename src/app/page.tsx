import styles from "./page.module.css";
import OauthClient from "./_components/OauthClient";
import { getAccessToken } from "./_api/Oauth";
import { clientId, clientSecret, redirectUri } from "./_util/apiInfo";

interface IParams {
  searchParams: { [key: string]: string | undefined }
}

export default function Home({ searchParams }: IParams) {
  const { code } = searchParams;
  let token = "";

  if (code) {
    getAccessToken(clientId, clientSecret, redirectUri, code).then(console.log)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <OauthClient />
      </div>
    </main>
  );
}

import styles from "./page.module.css";

export default function Home() {
  console.log("나는 서버에서 실행됨");
  return <div className={styles.page}>인덱스 페이지</div>;
}

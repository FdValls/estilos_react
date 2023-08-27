import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <span className={styles.span}>Estilos Modulares</span>
    </div>
  );
}
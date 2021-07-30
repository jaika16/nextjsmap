import dynamic from 'next/dynamic';
import styles from "../styles/Home.module.css";

const EsriMap = dynamic(() => import("../components/esri-map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <EsriMap/>
    </div>
  );
}

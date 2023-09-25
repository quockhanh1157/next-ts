'use client'
import styles from './page.module.css';
import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {useTranslation} from "next-i18next";

export default function Home() {
  const {t} = useTranslation('home')
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const db = getFirestore()
    getDocs(collection(db, "blogs")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          setData(value => [...value, doc.data()])
        }
      });
    })
  }, [])

  if (!data.length) {
    return <>Loading...</>
  }

  console.log(t('title'))
  return (
    <main className={styles.main}>
    </main>
  );
}

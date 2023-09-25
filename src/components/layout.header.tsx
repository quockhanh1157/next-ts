'use client'
import React from 'react';
import styles from '../../styles/layout.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {useAuthContext} from "@/context/AuthContext";

const LayoutHeader = () => {
  const pathname = usePathname()
  const {user}: any = useAuthContext()

  return (
    <header className={styles.header}>
      <div className={`${styles.header_container} ${styles.container}`}>
        <div>
          <label><Link href={'/'}>
            <Image className={styles.header_icon} width={50} height={50} src={'/icon-react.png'} alt={'icon'}/>
          </Link></label>

          <input className={styles.header_input} type={"checkbox"} id={'box'}/>
          <nav className={styles.header_nav}>
            <ul>
              <li><Link className={pathname == "/facebook" ? styles.active : ""} href={'/facebook'}>Facebook</Link>
              </li>
              <li><Link className={pathname == "/tiktok" ? styles.active : ""} href={'/tiktok'}>Tiktok</Link></li>
              <li><Link className={pathname == "/speak" ? styles.active : ""} href={'/speak'}>Speak</Link></li>
              <li><Link className={pathname == "/signup" ? styles.active : ""} href={'/signup'}>SignUp</Link></li>
              <li>
                <Link className={pathname == "/signin" ? styles.active : ""} href={'/signin'}>
                  {user ? <>121212</> : `SignIn`}
                </Link>
              </li>
              {/*<li><Link className={pathname == "/youtube" ? styles.active : ""} href={'/youtube'}>Youtube</Link></li>*/}
            </ul>
          </nav>
        </div>
        <div>
          <label className={styles.header_box} htmlFor={'box'}>
            <hr/>
            <hr/>
            <hr/>
          </label>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;

'use client'
import React, {useState} from "react";
import signIn from "@/firebase/auth/signin";
import {useRouter} from 'next/navigation'
import {useAuthContext} from "@/context/AuthContext";
import {getAuth, signOut} from "firebase/auth";
import Modal from '@/components/modal'

function Page() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const router = useRouter()
  const {user}: any = useAuthContext()
  const auth = getAuth()
  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault()

    const {result, error} = await signIn(email, password);

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push("/admin")
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      {user ? <div>
        <p>Email: {user?.email}</p>
        <button onClick={() => setIsVisible(!isVisible)}>Update</button>
        <button onClick={handleSignOut}>Sign out</button>
        <Modal isVisible={isVisible}>
          <button>121212</button>
        </Modal>
      </div> : <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="mt-60 mb-30">Sign in</h1>
          <form onSubmit={handleForm} className="form">
            <label htmlFor="email">
              <p>Email</p>
              <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email"
                     placeholder="example@mail.com"/>
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password"
                     id="password"
                     placeholder="password"/>
            </label>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>}
    </>
  );
}

export default Page;
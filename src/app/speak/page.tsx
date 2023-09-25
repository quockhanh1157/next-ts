'use client'
import React, {useState} from 'react';
import styles from '../../../styles/speak.module.scss'

const Speak = () => {
  const [msg, setMsg] = useState<string>("")
  const [pause, setPause] = useState<boolean>(true)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const speak_module = new SpeechSynthesisUtterance();
    speak_module.lang = "vi-VN";
    speak_module.text = msg;
    speechSynthesis.speak(speak_module);
  }
  const handlePause = (event: React.FormEvent) => {
    event.preventDefault()

    setPause(!pause)
    if (pause) return speechSynthesis.pause()
    return speechSynthesis.resume()
  }

  return (
    <div className={styles.speak_container}>
      <p>speak</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <textarea value={msg}
                  className={styles.speak_text} rows={10}
                  onChange={(event) => setMsg(event.target.value)}></textarea>
        <button type={"submit"} className={styles.speak_button}>Start</button>
        {pause ? <button
            onClick={(event) => handlePause(event)}
            type={'button'} className={styles.speak_button}>Pause</button>
          : <button
            onClick={(event) => handlePause(event)}
            type={'button'} className={styles.speak_button}>Resume</button>
        }
        <button
          onClick={() => {
            speechSynthesis.cancel()
            setMsg("")
          }}
          type={'button'} className={styles.speak_button}>Cancel
        </button>
      </form>
    </div>
  );
};

export default Speak;
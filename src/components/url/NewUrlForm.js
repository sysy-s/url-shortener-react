import styles from "./NewUrlForm.module.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

export default function NewUrlForm() {
  const longRef = useRef();

  const [message, setMessage] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copyState, setCopyState] = useState(false);

  function submit(event) {
    event.preventDefault();
    const enteredLong = longRef.current.value;

    const urlUpload = {
      long: enteredLong,
    };

    axios
      .post("http://localhost:8000/", urlUpload)
      .then((res) =>
        setShortUrl("http://localhost:8000/".concat("", res.data.short))
      )
      .catch((err) => setMessage(err.response.data.detail));
  }

  function copyShortUrl(event) {
    const short = event.currentTarget.textContent;
    navigator.clipboard.writeText(short);
    setCopyState(true);
  }

  return (
    <div className={styles.wrapper}>
      <h1>Shrink your URL here</h1>
      <form className={styles.form}>
        <div className={styles.inputwrapper}>
          <input
            type="text"
            placeholder="Enter long url"
            className={styles.long}
            ref={longRef}
          />
        </div>
        <div className={styles.btnwrapper}>
          <button className={styles.btn} onClick={submit}>
            Shrink!
          </button>
        </div>
      </form>
      <div>
        <Link to="/premium" className={styles.link}>
          Want a custom link?
        </Link>
      </div>
      {(message || shortUrl) && (
        <div className={styles.shortwrapper}>
          {shortUrl && 
          <div className={styles.shortUrl} onClick={copyShortUrl}>
            {shortUrl}
          </div>}
          {copyState && (
            <div className={styles.copymsg}>Copied to clipboard</div>
          )}
          {message && <div className={styles.message}>{message}</div>}
        </div>
      )}
    </div>
  );
}

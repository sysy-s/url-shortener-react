import styles from "./PremiumNewUrlForm.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { fetchToken } from "../user/Auth";
import { useState } from "react";

export default function PremiumNewUrlForm() {
  const longRef = useRef();
  const shortRef = useRef();

  const [message, setMessage] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copyState, setCopyState] = useState(false);

  function submit(event) {
    event.preventDefault();
    setMessage("");
    setShortUrl("");
    const enteredLong = longRef.current.value;
    const enteredShort = shortRef.current.value;

    const urlUpload = {
      long: enteredLong,
      short: enteredShort,
    };
    const token = JSON.parse(fetchToken());
    const headers = {
      Authorization: `${token.token_type} ${token.access_token}`,
    };
    const config = {
      headers: headers,
    };

    axios
      .post("http://localhost:8000/premium", urlUpload, config)
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
        <div className={styles.inputwrapper}>
          <input
            type="text"
            placeholder="Enter custom url"
            className={styles.short}
            ref={shortRef}
          />
        </div>
        <div className={styles.btnwrapper}>
          <button className={styles.btn} onClick={submit}>
            Shrink!
          </button>
        </div>
      </form>
      <div>
        <Link to="/" className={styles.link}>
          I've changed my mind
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

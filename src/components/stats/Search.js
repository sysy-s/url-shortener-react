import styles from './Search.module.css'
import {useRef} from 'react';
import { useLocation } from 'react-router-dom';


export default function Search() {
    const searchRef = useRef();
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
        
    function submit(event){
        event.preventDefault();
        console.log('submitted');
    }

    return <div>
        <form>
            <input type='text' id='search' ref={searchRef}/>
            <button className={styles.btn} onClick={submit}>Search</button>
            <p>{name}</p>
        </form>
    </div>
}
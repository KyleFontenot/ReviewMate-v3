import { createSignal, createEffect, onMount } from "solid-js";
import styles from './SearchBar.module.scss'

export default function CommonTraits(props) {

  return (
    <div class={styles.whole}>
      <input type="text" maxlenght="25"
       placeholder="Search"
        classList={{  [styles.show]: open() }}
      />

    </div>
  );
}


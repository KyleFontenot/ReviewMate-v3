import styles from './ConcernBlob.module.scss'
import {onMount} from 'solid-js'
import Rellax from 'rellax'

export default function ConcernBlob(props){
let wrapperRef;
let taglineRef;
let descriptionRef;
onMount(() => {
  // console.log('mounted')
  // const taglineRellax = new Rellax(taglineRef.current, {
	// 	speed: 1,
	// 	vertical: true,
	// 	round: true,
	// 	wrapper: wrapperRef.current,
	// });
  // const descriptionRellax = new Rellax(descriptionRef.current, {
  //     speed: -1,
  //     vertical: true,
  //     round: true,
  //     wrapper: wrapperRef.current,
  //   });
})
  return (
    <div classList={{[styles.container] : true , [styles.variant2] : props.variant === 2, rellaxwrapper : true }} ref={wrapperRef}>
      <h4 classList={{ [styles.tagline]: true, rellax : true }}  ref={taglineRef} >{props.tagline}</h4>

      <div classList={{ [ styles.div] : true, rellax: true }}  ref={descriptionRef}>

        <p class={styles.description}><img src="/icons/exclamation.svg" class={styles.exclamation} role="presentation" aria-label="hidden" /> {props.description}</p>
        <p class={styles.answer}>{props.answer}</p>

      </div>
      <img class={styles.image} src="/favicon(withoutbg).svg" />
    </div>
  )
} 



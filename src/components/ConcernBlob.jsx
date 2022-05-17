import styles from './ConcernBlob.module.scss'
// import Rellax from '../scripts/Rellax.astro'
// const {variant, tagline, description, answer, imagehref} = Astro.props

export default function ConcernBlob(props) {

  return (
    <div classList={{ [styles.container] : true, [styles.variant2] : props.variant === 2, 'rellaxwrapper' : true }}>
      <h4 classList={{[ styles.tagline] : true, 'rellax': true }} data-rellax-speed="0.3" >{props.tagline}</h4>

      <div classList={{ [ styles.div] : true, 'rellax' : true  }} data-rellax-speed="-0.3">

        <p class={styles.description}><img src="/icons/exclamation.svg" class={styles.exclamation} role="presentation" aria-label="hidden" /> {props.description}</p>
        <p class={styles.answer}>{props.answer}</p>

      </div>
      <img class={styles.image} src="/favicon(withoutbg).svg" />
    </div>
  )
}

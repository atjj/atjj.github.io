import styles from './Success.module.css'
import img from '../../assets/images/icon-success.svg'


const Success = ({setSuccess}) =>{
    return(
        <div className={styles.wrapper}>
            <img src= {img}/>
            <h1 className={styles.header}>Thanks for subscribing!</h1>
            <p className={styles.text}>
                A confirmation email has been sent to <span>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.
            </p>

            <button className={styles.btn} onClick = {() =>{setSuccess(false)}}>Dismiss message</button>

        </div>
    )
}



export default Success;
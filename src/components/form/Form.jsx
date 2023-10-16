import cn from 'classnames';
import styles from './Form.module.css';

const Form = ({setEmailInput,submit,valid,setValid}) =>{


    const validMsg = !valid ?  <span className={styles.validTitle}>Valid email required</span> : null;


    return(

        <div className = {styles.wrapper}>

            <div className={styles.titleWrapper}>
                <span className={styles.title}>Email address</span>
                {validMsg}
            </div>

            <input className = {cn(styles.inputText, !valid ? styles.inputErrorText : null)} 
                   type='email' 
                   placeholder='email@company.com'
                   onChange = {
                        (e) => { 
                                setValid(true)
                                if(!e.target.validity.typeMismatch){
                                    setEmailInput(e.target.value);
                                    setValid(true);
                                }
                            }
                        
                        }/>

            <button className = {styles.btn} onClick={submit}>Subscribe to monthly newsletter</button>
        </div>
    )
}




export default Form;
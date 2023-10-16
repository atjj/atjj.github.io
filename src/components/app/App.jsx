import Title from '../title/Title'
import Form from  '../form/Form'
import styles from './App.module.css'
import img  from '../../assets/images/illustration-sign-up-desktop.svg'
import img_mobile from '../../assets/images/illustration-sign-up-mobile.svg'
import Illustration from '../illustarion/Illustration'

import { useState } from 'react'
import Success from '../success-modal/Success'

const App = () =>{

    const [emailInput,setEmailInput] = useState('');
    const [success,setSuccess] = useState(false);
    const [valid,setValid] = useState(true);

   
    const submit = async () => {

        if(!emailInput){
            setValid(false);
            return
        }

        

        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ email: emailInput}),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setSuccess(true);
        })
        .finally(()=>{
            setEmailInput('');
        })
    }

    const withSuccess = success ? <Success setSuccess = {setSuccess}/> : <View setEmailInput={setEmailInput} submit={submit} valid={valid} setValid = {setValid}/>
    
    return(
        <>
            {withSuccess}
        </>
    )
}

const View = ({setEmailInput,submit,valid,setValid}) =>{
    return(
    <>
        <img className={styles.mobile_img} src ={img_mobile}/>
        
        <div className={styles.container}>



            <div className={styles.wrapper}>

                <Title/>
                <Form setEmailInput = {setEmailInput} submit = {submit} valid = {valid} setValid = {setValid}/>

            </div>

            <Illustration img = {img}/>
        </div>
    </>
    )
}


export default App

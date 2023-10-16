import styles from './Title.module.css'

const Title = () =>{
    return(
        <div className = { styles.wrapper }>
            <h1 className = { styles.header }>Stay updated!</h1>

            <div className = { styles.text }>Join 60,000+ product managers receiving monthly updates on:</div>
            <ul className = { styles.list }>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more</li>
            </ul>
        </div>
    )
}



export default Title;
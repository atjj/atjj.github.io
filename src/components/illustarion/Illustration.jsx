/* eslint-disable react/prop-types */
import styles from './Illustration.module.css';
import cn from 'classnames';

const Illustration = ({img}) =>{
    return(
        <img className={cn(styles.img,styles.img_mobile)} src={img}/>
    )
}



export default Illustration
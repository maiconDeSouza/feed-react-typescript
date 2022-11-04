import styles from './Image.module.css'

interface PropsImage{
    avatar: string;
    comment: string;
}

export function Image({avatar, comment}:PropsImage){
    return (
        <img 
            className={styles[comment]}
            src={avatar} 
        />
    )
}
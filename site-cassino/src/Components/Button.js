import Link from 'next/link'


export default function Button(props){
    return(
            <button className={props.color}><Link href={props.link}>{props.text}</Link></button>
    )
}


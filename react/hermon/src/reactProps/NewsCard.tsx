interface NewsCardProps {
    title: string
    imgSrc: string
}


export default function NewsCard({title,imgSrc}:NewsCardProps){
    return (
        <h1>{title}</h1>
    )
}
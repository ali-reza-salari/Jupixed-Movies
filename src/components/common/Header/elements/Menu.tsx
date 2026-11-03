export default function Menu({ title } : { title: string }) {
    return <div className={`cursor-pointer font-medium`}>
        {title}
    </div>
}
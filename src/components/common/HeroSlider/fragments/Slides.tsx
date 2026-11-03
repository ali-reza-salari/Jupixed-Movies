export default function Slides({ image , logo }: { image: string , logo: string }) {
    return (
        <div className={`w-full h-full flex items-end justify-center md:items-center md:justify-start`}>
            <span className={`w-70 md:w-100 absolute z-10 left-auto bottom-20 md:left-20 md:bottom-auto flex-center`}>
                <img className={`w-full h-full`} alt={"logo"} src={logo} />
            </span>
            <img className={`w-full h-full object-cover`} alt={"slide"} src={image} />
        </div>
    )
}
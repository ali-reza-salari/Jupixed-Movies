export default function Slides({ image }) {
    return (
        <>
            <img src={image}
                 className={`w-full h-full object-cover`}
            />
        </>
    )
}
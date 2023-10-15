export default function WorkExperience(props: {
    company: string, 
    position: string, 
    date: string,
    location: string,
    description: string, 
    image: string, 
    alt: string,
}) {
    return (
        <>
            <div className="box">
                <div id="box-img">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <h2>{props.company}</h2>
                <h3>{props.position}</h3>
                <h4>{props.date}</h4>
                <h4>{props.location}</h4>
                <p>{props.description}</p>
            </div>
        </>
    )
}
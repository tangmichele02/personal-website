export default function WorkExperience(props: {
    company: string, 
    position: string, 
    date: string,
    description: string, 
    image: string, 
    alt: string,
}) {
    return (
        <>
            <div className="project-box">
                <div id="project-img">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <h2>{props.company}</h2>
                <h3>{props.position}</h3>
                <h4>{props.date}</h4>
                <p>{props.description}</p>
            </div>
        </>
    )
}
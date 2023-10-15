export default function Project(props: {
    title: string, 
    link: string,  
    date: string,
    description: string,
    image: string, 
    alt: string, 
}) {
    return (
        <>
            <div className="box">
                <div id="project-img">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <h2><a href={props.link}>{props.title}</a></h2>
                <h4>{props.date}</h4>
                <p>{props.description}</p>
            </div>
        </>
    )
}
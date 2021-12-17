import { DefaultCard as Card } from "./cards/DefaultCard"


export default function Projects () {

    const projects = [
        {
            title: 'Netflix', 
            description : 'A Netflix Clone, with React, hooks and Firebase',
            image : '/images/react-netflix.png',
            projectUrl: 'https://react-netflix-clone-f4b4nd.netlify.app/'
        },
        {
            title: 'Calculator', 
            description : 'Simple Calculator with React, hooks',
            image : '/images/react-calculator.png',
            projectUrl: 'https://react-calculator-f4b4nd.netlify.app/'
        },
        /*{
            title: 'Netflix', 
            description : 'Build a Netflix Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
            projectUrl: ''
        },
        {
            title: 'Airbnb', 
            description : 'Build a Airbnb Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
            projectUrl: ''
        },
        {
            title: 'Netflix', 
            description : 'Build a Netflix Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
            projectUrl: ''
        },
        {
            title: 'Airbnb', 
            description : 'Build a Airbnb Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
            projectUrl: ''
        },*/
    ]
 

    const ProjectsCards = projects.map((item, idx) => (
        <Card key={idx} >
            <Card.Image src={item.image} alt={item.title} />
            <Card.Title>{item.title}</Card.Title>
            <Card.Description>{item.description}</Card.Description>
            <Card.Button href={item.projectUrl} target="_blank" >Voir le projet</Card.Button>
        </Card>
    ))

    return (
        <div className="projects" id="projects">
            <div className="text-container">
                <h1> Projects 🏆 </h1>
                <h2> Achievements, Some Cool Stuff that I have worked on !</h2>
            </div>
            <div className="projects-cards"> 
                {ProjectsCards} 
            </div>
        </div>
    )
}


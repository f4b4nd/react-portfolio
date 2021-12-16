import { DefaultCard } from "./cards/DefaultCard"


export default function Projects () {

    const projects = [
        {
            title: 'Netflix', 
            description : 'Build a Netflix Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : '/images/react-netflix.png',
            projectUrl: 'https://react-netflix-clone-f4b4nd.netlify.app/'
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
        },
    ]
 

    const ProjectsCards = projects.map((item, idx) => (
        <DefaultCard  key={idx} >
            <DefaultCard.Image src={item.image} />
            <DefaultCard.Title>{item.title}</DefaultCard.Title>
            <DefaultCard.Description>{item.description}</DefaultCard.Description>
            <DefaultCard.Button href={item.projectUrl}>Voir le projet</DefaultCard.Button>
        </DefaultCard>
    ))

    return (
        <div className="projects">
            <h1> Projects </h1>
            <h2> Achievements, Some Cool Stuff that I have worked on !</h2>
            <div className="projects-cards"> 
                {ProjectsCards} 
            </div>
        </div>
    )
}


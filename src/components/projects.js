import { ProjectCard } from "./cards/ProjectCard"


export default function Projects () {

    const projects = [
        {
            title: 'Netflix', 
            description : 'Build a Netflix Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
        },
        {
            title: 'Airbnb', 
            description : 'Build a Airbnb Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
        },
        {
            title: 'Netflix', 
            description : 'Build a Netflix Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
        },
        {
            title: 'Airbnb', 
            description : 'Build a Airbnb Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
        },
        {
            title: 'Netflix', 
            description : 'Build a Netflix Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
        },
        {
            title: 'Airbnb', 
            description : 'Build a Airbnb Clone, with React, Redux, Stripe, SCSS, firebase.',
            image : 'link',
        },
    ]

    const ProjectsCards = projects.map((item, idx) => (
        <ProjectCard 
            key={idx} 
            title={item.title}
            description={item.description}
            image={item.image}
        />
    ))

    return (
        <div className="projects">
            <h1> Projects </h1>
            <h2> Achievements, Some Cool Stuff that I have worked on !</h2>
            <div className="grid"> 
                {ProjectsCards} 
            </div>
        </div>
    )
}


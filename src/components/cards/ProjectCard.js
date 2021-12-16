import styled from 'styled-components'


export const ProjectCard = ({title, description, image}) => {
    return (
        <StyledProjectCard 
            className="card">
            <div className="img-container"> 
                <img src={image} />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="description">
                {description}
            </div>
            <div className="see-more"> <button> See more </button> </div>
        </StyledProjectCard>
    )
}

const StyledProjectCard = styled.div`
    border: 1px solid grey;
    max-width: 300px;
    border-radius: 10px;

    img {
      min-height: 200px;
    }
`
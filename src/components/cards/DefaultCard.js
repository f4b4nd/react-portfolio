import styled from 'styled-components'


export const DefaultCard = ({children, ...restProps}) => (
    <StyledDefaultCard className="card" {...restProps} >
        {children}
    </StyledDefaultCard>
)


DefaultCard.Image = ({...restProps}) => (
    <div className="card-image">
        <img {...restProps} />
    </div>
)

DefaultCard.Title = ({children, ...restProps}) => (
    <div className="card-title" {...restProps}>
        {children}
    </div>
)

DefaultCard.Description = ({children, ...restProps}) => (
    <div className="card-description" {...restProps}>
        {children}
    </div>
)

DefaultCard.Button = ({children, ...restProps}) => (
    <div className="card-button" >
        <a {...restProps}>
            {children}
        </a>
    </div>
)


const StyledDefaultCard = styled.div`

    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;

    border: 1px solid hsla(0, 0%, 82.7%, .397);
    border-radius: 10px;

    & > *:not(:first-of-type):not(:last-of-type){
        margin: 5px 0;
    }
    
    &:hover {
        box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.2);
    }

    .card-image {
        height: 250px;
        max-width: 90%;
        display: flex;
        justify-content: center;
        justify-self: flex-start;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            margin: auto;
        }
    }

    .card-title {
        color: #666;
        font-size: 22px;
        line-height: 24px;
        font-weight: 700;
    }

    .card-description {
        color: #666;
        font-size: 17px;
        line-height: 1.5rem;
    }

    .card-button {
        background-color: #06b6d4;
        color: white;
        border-radius: 5px;
        padding: 0.5em;

        a:visited {
            color: white;
        }

        a {
            text-decoration: none;
        }

        &:hover {
            background-color: #fbbf24;
            transition: 0.2s;
        }
    }

`
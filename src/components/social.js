import styled from 'styled-components'

export default function Social () {
    return (
        <StyledSocial className="social">
        
            <div className="row">
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-google"></i> 
            </div>
        </StyledSocial>
    )
}

const StyledSocial = styled.div`

    .fab {
        color: white;
        font-size:2rem;
        height: 2.6rem;
        width: 2.6rem;
        border-radius: 2.6rem;
        line-height: 2.6rem;
        padding: 0.2em;
        position: relative;
        text-align: center;
        margin: 10px;

        &:hover {
            background-color: black;
            transition: background-color 0.5s ease;
            transition: opacity 0.5s ease;
            opacity: 0.7;
        }
    }

    .fa-github {
        background-color: black;
    }

    .fa-linkedin-in {
        background-color: #0e76a8;
    }

    .fa-google {
        background-color: #ea4335;
    }

`
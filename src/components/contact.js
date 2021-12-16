import Social from "./social"


export default function Contact () {
    return (
        <div className="contact" id="contact">
            <div className="col"> 
                <h1> Contact me </h1>
                <h2> DISCUSS ABOUT YOUR COMPANY ? OUR PROJECT ? A JOB ? LET'S GET IN TOUCH </h2>
                <h3> +33.6.62.12.72.94</h3>
                <h4> fabien.andria@pm.me </h4>
                <Social />
            </div>
            <div className="col"> 
                <div className="image"></div>
            </div>
        </div>
    )
}
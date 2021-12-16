import Social from "./social"

export default function Hero () {
    return (
        <div className="hero">
            <div className="col">
                <h1> Hi all, I'm Fabien </h1>
                <p>
                I'm a web developer FullStack Javascript 🚀 <br/>
                I'm also pasionate by all the web technologies, I'm curious, and motivated to learn and step up. <br/>
                During my free time, I practice sport, spend time with my friends, or going in the nature.
                </p>
                <Social />
            </div>
            <div className="col">
                <div className="img-container">
                    <img src="/images/moi.png" />
                </div>
            </div>
        </div>
    )
}
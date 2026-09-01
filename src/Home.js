const Home = () => {
    return ( 
        <section className="page-body">
        <main className="container home-main">

        <section className="home-section">
            <h1 className="home-title">Welcome</h1>
            
            <p className="home-text">
                I am a Mechatronics Engineering student, music lover, gamer, problem solver exploring his passion and interest of technology.
            </p>
            
            <a href="/about" className="cta-button">Discover More About Me</a>
        </section>

        <section className="highlights-section">
            <div className="feature-card">
                <h3>Engineering</h3>
                <p>
                    A student of The bells university of technology currently interning at SNAPNET to bridge the gap between physical principles, hands-on experience and computational solutions.
                </p>
            </div>

            <div className="feature-card">
                <h3>Gaming</h3>
                <p>
                    A deep love for puzzle solving, action and sport games. You can usually find me playing FC26, Need for Speed, Ghost of Tsushima, or God of War.
                </p>
            </div>

            <div className="feature-card">
                <h3>Anime & Music</h3>
                <p>
                    I listen to pretty much anything that sounds good and shows like Black clover, Bleach, A.O.T, Death Note and Naruto and more that push the boundaries.
                </p>
            </div>

        </section>
    </main>
    </section>
     );
}
 
export default Home;
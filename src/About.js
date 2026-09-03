const About = () => {
    return (
        <section className="page-body">
            <header className="main-header">
            </header>

            <main className="container">
                <section className="summary">
                    <h1 className="name">Wisdom Kennedy</h1>
                    <p className="hobbies">Engineering Student, Music Lover, Gamer.</p>
                    <hr className="divider" />
                    <p className="intro">
                        This is where my technical world and creative passions for games music and everything comes to life.
                    </p>
                    <hr className="divider" />
                    <p className="greeting">I hope you enjoy exploring my corner of the world and leave feeling inspired.</p>
                </section>

                <section className="about-grid">
                    <div className="image-column">
                        <img src="Me.gif" alt="Wisdom Kennedy" className="profile-image" />
                    </div>

                    <div className="text-column">
                        <h2>Hi, I'm Wisdom. Welcome.</h2>

                        <p>
                            I am a 400 level mechatronics engineering student, I'm currently undergoing my SIWES internship at <strong>SNAPNET</strong>. I live in the city of Lagos, Nigeria. I thrive on diving deep into complex structural and computational problems, breaking them down into systems that work seamlessly. Which is what gave birth to my love for puzzle solving and mystery games.
                        </p>

                        <p>
                            Taking theory into practice, I am currently gaining invaluable real-world experience at <strong>Snapnet</strong>. This experience bridges the gap between core physical principles and modern technology by giving me real world experience, and pushing me to evolve as both a thinker and a creator daily.
                        </p>

                        <p>
                            I love watching anime, listening to muusic and playing games - My personal favourates are FC26, Need for Speed, COD, Ghost of Tushima, God Of War and many more.
                        </p>

                        <p>
                            I'm still figuring out more about myself like where or whoI want to be and what I really want to do with my life you know.
                        </p>

                        <p>
                            Thanks for being here. Let's see where this adventure takes us!
                        </p>

                        <div className="links-section">
                            <h3>Let's Chat!</h3>
                            <p><strong>Email:</strong> wisdom.akajiaku@hcmatrix.com</p>
                            <p className="social-tags"><strong>Instagram:</strong> @wisdom_aj</p>
                        </div>
                    </div>
                </section>

                <section className="signup-section">
                    <h3>Want Updates on Projects & Assignments?</h3>
                    <p>Subscribe to stay updated on my latest engineering projects and creative work.</p>

                    <form className="signup-form">
                        <div className="input-group">
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </section>
            </main>
        </section>
    );
};

export default About;
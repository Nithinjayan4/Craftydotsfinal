

function Hero() {
    return (
        <section
            data-name="hero"
            id="home"
            className="min-h-screen flex items-center justify-center hero-gradient"
        >
            <div className="container mx-auto px-4 text-center">
                <h1
                    data-name="hero-title"
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    <span className="logo-text-white">Crafty</span>
                    <span className="logo-text-red">Dots</span>
                </h1>
                <p
                    data-name="hero-quote"
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                >
                    Connecting the dots to create extraordinary solutions.
                </p>
            </div>
        </section>
    );
}

export default Hero;



function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Building responsive and dynamic websites using the latest technologies like React, Angular, and NextJs.",
            image: "https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg?w=826"
        },
        {
            title: "Mobile Development",
            description: "Custom mobile app development solutions for both iOS and Android platforms.",
            image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?t=st=1736246533~exp=1736250133~hmac=71e1ada36bc8a66ca37b5218791a306bca5f38f774dc11f5554a4ad522b566b3&w=826"
        },
        {
            title: "Cloud Solutions",
            description: "Leveraging cloud platforms like AWS and Google Cloud to provide scalable and secure solutions.",
            image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399284.jpg?t=st=1736254425~exp=1736258025~hmac=a4b5dab09d2d4e377a358e8b675e7ac2dbbf4351ab731adccefe6af0d559362f&w=826"
        },
        {
            title: "WordPress Development",
            description: "Creating custom WordPress websites and themes with powerful content management capabilities.",
            image: "https://wallpapercave.com/wp/wp6905445.png"
        },
        {
            title: "Shopify Development",
            description: "Building robust e-commerce stores on Shopify platform with custom themes and functionality.",
            image: "https://bavaan.com/wp-content/uploads/2022/07/S.jpg"
        },
        {
            title: "AI Development",
            description: "Developing intelligent solutions using machine learning and artificial intelligence technologies.",
            image: "https://blogs.debutinfotech.com/wp-content/uploads/2024/04/Artificial-Intelligence-Development.jpg"
        }
    ];

    return (
        <section data-name="services" id="services" className="section bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 
                    data-name="services-title" 
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                >
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-name={`service-card-${index}`}
                            className="service-card bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

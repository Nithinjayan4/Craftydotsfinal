import'../styles/footer.css'

function Footer() {
    return (
        <footer data-name="footer" className="footer-gradient text-white py-12">
            <div data-name="footer-content" className="container mx-auto px-6">
                <div data-name="footer-grid" className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-name="footer-about">
                        <h3 data-name="footer-title" className="text-xl font-bold mb-4">CraftyDots</h3>
                        <p data-name="footer-description" className="text-gray-300">
                            Creating innovative software solutions for tomarrow's challenges.
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 data-name="links-title" className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul data-name="links-list" className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-contact">
                        <h4 data-name="contact-title" className="text-lg font-semibold mb-4">Contact</h4>
                        <p data-name="contact-info" className="text-gray-300">
                            Email: info@craftydots.com<br />
                            Phone: +91 9074080652
                        </p>
                    </div>
                    <div data-name="footer-social">
                        <h4 data-name="social-title" className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div data-name="social-links" className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                        </div>
                    </div>
                </div>
                <div data-name="footer-bottom" className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p data-name="copyright" className="text-gray-400">
                        © 2024 CraftyDots. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

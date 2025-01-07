import '../styles/WhatsApp.css'
function WhatsAppChat() {
    const phoneNumber = '+919074080652'; // Replace with your WhatsApp phone number
    const message = 'Hello%20I%20need%20assistance'; // URL-encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
    return (
      <div className="whatsapp-chat-button">
        {/* Floating WhatsApp Button */}
        <a
          href={whatsappURL}
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i> {/* Change class to className */}
        </a>
   </div>
  );
}

export default WhatsAppChat;
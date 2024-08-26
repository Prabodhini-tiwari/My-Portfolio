import "./Contact.css";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="email" 
                        placeholder="Your Email Id" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <textarea 
                        placeholder="Your Message" 
                        required 
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;

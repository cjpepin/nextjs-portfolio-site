import React, {useState} from 'react';


const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if(email2){
            return;
        }
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.value) return;
            if(field.id == "email-2"){};

            formData[field.id] = field.value;
        })
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData),
        })
        alert("Message sent!");
        location.reload();
        
    }
    return(
        <>
            <div className="contact-wrapper">
                <p className="contact-title">Contact Me</p>
                <form method="POST" onSubmit={handleSubmit}>
                    <p>Name</p>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder={name}
                        className="contact-input"  
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />

                    <p>Email</p>
                    <input 
                        type="text" 
                        id="email" 
                        className="contact-input"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        />
                        {/* Email 2 checks for spam */}
                    <input 
                        type="text"
                        id="email-2"
                        className="contact-input"
                        onChange={(e) => {
                            setEmail2(e.target.value)
                        }}
                        />

                    <p>Message</p>
                    <textarea 
                        id="message" 
                        className="contact-input"
                        onChange={(e) => {
                            setContent(e.target.value)
                        }}/>

                    <br />
                    <button type="submit" style={{marginTop: '20px'}}>Submit</button>
                    
                </form>
            </div>

        </>
    )
}   

export default ContactMe;
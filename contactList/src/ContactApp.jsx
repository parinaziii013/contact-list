import { useState } from "react";
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/contactForm";

export const ContactApp = () =>{

  
    return (
     <div className="pl-8">
        <ContactForm />
        <ContactList />
     </div>
    )
}
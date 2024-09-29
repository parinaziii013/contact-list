import { useState } from "react";
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/contactForm";

let counter = 0;

export const ContactApp = () => {
  const [list, setList] = useState([]);
  const handleItems = (name, phone, email) => {
    const newContactItem = {
      id: counter++,
      name,
      phone,
      email,
    };
    setList([...list, newContactItem]);
  };
  return (
    <div className="pl-8">
      <ContactForm onAddContact={handleItems}/>
      <ContactList contactItems={list} />
    </div>
  );
};

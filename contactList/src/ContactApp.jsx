import { useState } from "react";
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/contactForm";

let counter = 0;

export const ContactApp = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItems = (name, phone, email) => {
    const newContactItem = {
      id: counter++,
      name,
      phone,
      email,
    };
    setList([...list, newContactItem]);
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const filterContacts = list.filter((contact) =>
    contact.name.includes(searchTerm)
  );

  return (
    <div className="p-8">
      <ContactForm onAddContact={handleItems} onSearch={handleSearch} />
      <ContactList contactItems={filterContacts} />
    </div>
  );
};

/*
contactItems={filterContacts}
When the search input is empty, it include all contacts that have already been added."
*/

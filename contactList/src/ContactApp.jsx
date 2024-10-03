import { useState } from "react";
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/contactForm";

let counter = 0;

export const ContactApp = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const handleItems = (name, phone, email) => {
    const newContactItem = {
      id: counter++,
      name,
      phone,
      email,
    };
    setList([...list, newContactItem]);
  };
  const handleSearchItems = (value) => {
    setSearch(value);
  };

  const filterContacts = list.filter((contact) =>
    contact.name.includes(search)
  );

  return (
    <div className="p-8">
      <ContactForm onAddContact={handleItems} onSearch={handleSearchItems} />
      <ContactList contactItems={filterContacts} />
    </div>
  );
};

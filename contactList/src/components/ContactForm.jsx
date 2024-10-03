import { useState } from "react";

const Input = ({ text, className, onChangeValue, val }) => {
  const handleChange = ({ target }) => {
    onChangeValue(target.value);
  };

  return (
    <input
      value={val}
      onChange={handleChange}
      placeholder={text}
      className={`border-solid border rounded-md mr-1 p-2 outline-none ${className}`}
    />
  );
};

export const ContactForm = ({ onAddContact, onSearch }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, phone, email);
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleName = (value) => {
    setName(value);
  };

  const handlePhone = (value) => {
    setPhone(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleSearch = (value) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <div>
      <Input
        type="search"
        val={search}
        className="w-2/5"
        text="Search..."
        onChangeValue={handleSearch}
      />
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col justify-center items-start pt-4 "
      >
        <div className="flex mt-2">
          <Input
            type="text"
            val={name}
            text="Name"
            onChangeValue={handleName}
          />

          <Input
            type="tel"
            val={phone}
            text="Phone"
            onChangeValue={handlePhone}
          />

          <Input
            type="email"
            val={email}
            text="Email"
            onChangeValue={handleEmail}
          />
          <button
            type="submit"
            className="bg-blue-600 p-2 pr-4 rounded-md text-white font-bold transition-colors hover:bg-blue-700"
          >
            + Add
          </button>
        </div>
      </form>
    </div>
  );
};
/**
 * In Input Component, we use value, because in this way, every time we add a new contact,
 we can empty all of previous inputs.
 */

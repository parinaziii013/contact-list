import { useState } from "react";

const Input = ({ text, className, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        placeholder={text}
        className={`border-solid border rounded-md mr-1 p-2 outline-none ${className}`}
      />
    </div>
  );
};

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleName = (value) => {
    setName(value);
  };
  const handlePhone = (value) => {
    setName(value);
    console.log(value);
  };
  const handleEmail = (value) => {
    setName(value);
    console.log(value);
  };
  return (
    <form className="container flex flex-col justify-center items-start pt-4 ">
      <div className="w-full">
        <Input type="text" text="Search..." className="w-2/5" />
      </div>

      <div className="flex mt-2">
        <Input type="text" text="Name" onChange={handleName} />

        <Input type="tel" text="Phone" onChange={handlePhone} />

        <Input type="email" text="Email" onChange={handleEmail} />
        <button
          type="submit"
          className="bg-blue-600 p-2 pr-4 rounded-md text-white font-bold transition-colors hover:bg-blue-700"
        >
          + Add
        </button>
      </div>
    </form>
  );
};

const Input = ({ text, className }) => {
  return (
    <div>
      <input
        placeholder={text}
        className={`border-solid border rounded-md mr-1 p-2 outline-none ${className}`}
      />
    </div>
  );
};

export const ContactForm = () => {
  return (
    <form className="container flex flex-col justify-center items-start pt-4 ">
      <div className="w-full">
        <Input type="text" text="Search..." className="w-2/5" />
      </div>

      <div className="flex mt-2">
        <Input type="text" text="Name" />
        <Input type="tel" text="Phone" />
        <Input type="email" text="Email" />
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

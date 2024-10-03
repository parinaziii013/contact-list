import { ContactItem } from "./ContactItem";

export const ContactList = ({ contactItems }) => {
  return (
    <div>
      <div className="w-full flex justify-around pt-8 pb-4 border-b-2">
        <div className="flex w-4/12 justify-center font-bold">
          <span className="material-symbols-outlined">person</span>
          <h3>Name</h3>
        </div>

        <div className="flex w-4/12 justify-center font-bold">
          <span className="material-symbols-outlined">call</span>
          <h3>Phone</h3>
        </div>

        <div className="flex w-4/12 justify-center font-bold">
          <span className="material-symbols-outlined">mail</span>
          <h3>Email</h3>
        </div>
      </div>

      <div>
        {contactItems.map(({ id, name, phone, email }) => (
          <ContactItem key={id} name={name} phone={phone} email={email} />
        ))}
      </div>
    </div>
  );
};

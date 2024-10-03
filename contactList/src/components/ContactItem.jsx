export const ContactItem = ({ name, phone, email }) => {
  return (
    <div className="w-full flex justify-around">
      <p className="w-4/12 p-4 text-center">{name}</p>
      <p className="w-4/12 p-4 text-center">{phone}</p>
      <p className="w-4/12 p-4 text-center">{email}</p>
    </div>
  );
};

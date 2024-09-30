export const ContactItem = ({ name, phone, email }) => {
  return (
    <div className="w-full flex justify-around">
      <h3 className="w-4/12 p-4 text-center">
        {name} 
      </h3>
      <h3 className="w-4/12 p-4 text-center">
        {phone} 
      </h3>
      <h3 className="w-4/12 p-4 text-center">
        {email}
      </h3>
    </div>
  );
};

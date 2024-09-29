export const ContactItem = ({ name, phone, email }) => {
  return (
    <div className="w-2/4 flex justify-around">
      <h3>
        {name} 
      </h3>
      <h3>
        {phone} 
      </h3>
      <h3>
        {email}
      </h3>
    </div>
  );
};

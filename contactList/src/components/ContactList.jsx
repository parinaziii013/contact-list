export const ContactList = () => {
  return (
    <div className="w-2/4 flex justify-around pt-8 pl-4 pb-4 border-b-2">
      <div className="flex w-full justify-center">
        <span class="material-symbols-outlined">person</span>
        <h3>Name</h3>
      </div>
      <div className="flex w-full justify-center">
        <span class="material-symbols-outlined">call</span>
        <h3>Phone</h3>
      </div>
      <div className="flex w-full justify-center">
        <span class="material-symbols-outlined">mail</span>
        <h3>Email</h3>
      </div>
    </div>
  );
};

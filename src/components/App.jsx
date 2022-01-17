import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      id={contact.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQFpO5muOOHGQA/profile-displayphoto-shrink_200_200/0/1577374845108?e=1648080000&v=beta&t=PuxWlqxqnJMznvLGPUI7IPXWGVZ4G-CAcSNY2FuAQi0" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;

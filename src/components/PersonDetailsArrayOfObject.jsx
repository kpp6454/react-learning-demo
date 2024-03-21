import React from "react";

const PersonDetailsArrayOfObject = ({ personDetails }) => {
  return (
    <div>
      {personDetails.map((person, index) => (
        <ul className="listing-block" key={index}>
          <li><strong>Name:</strong> {person.name}</li>
          <li><strong>Age:</strong> {person.age}</li>
          <li><strong>Gender:</strong> {person.gender}</li>
        </ul>
      ))}
    </div>
  );
};

export default PersonDetailsArrayOfObject;

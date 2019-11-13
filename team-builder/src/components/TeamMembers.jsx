import React, { useState } from "react";
import Form from "./Form";
import uuid from "uuid";

function TeamMembers() {
  const initialTeamForm = {
    name: "",
    email: "",
    role: "Backend Engineer"
  };
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    setTeamForm({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role
    });
  };

  const onEmailChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role
    });
  };

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newTeamMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role
    };
    const newTeamList = teamMembers.concat(newTeamMember);
    setTeamMembers(newTeamList);
    setTeamForm(initialTeamForm);
  };

  return (
    <div className="App">
      <Form
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        onFormSubmit={onFormSubmit}
        teamForm={teamForm}
      />

      {teamMembers.map(member => (
        <div key={member.id}>
          <p>Name: {member.name}</p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;

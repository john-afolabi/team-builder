import React from "react";

function Form(props) {
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
  const { name, email, role } = props.teamForm;
  const isDisabled = () => {
    if (!name || !email) {
      return true;
    }
    return false;
  };

  return (
    <form>
      <label htmlFor="nameInput">Name: </label>
      <input value={name} onChange={onNameChange} id="nameInput" type="text" />
      <br />
      <label htmlFor="emailInput">Email: </label>
      <input
        value={email}
        onChange={onEmailChange}
        id="emailInput"
        type="text"
      />
      <br />
      <label htmlFor="roleInput">Role: </label>
      <select value={role} onChange={onRoleChange} id="roleInput" type="text">
        <option>Backend Engineer</option>
        <option>Frontend Engineer</option>
        <option>Designer</option>
      </select>
      <br />

      <input type="submit" onClick={onFormSubmit} disabled={isDisabled()} />
    </form>
  );
}

export default Form;

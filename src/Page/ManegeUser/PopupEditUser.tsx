import React, { Fragment, useState, useEffect } from "react";

const PopupEditUser = ({ id, newUsers, onUpdateUser }) => {
  // const [selectedUser, setSelectedUser] = useState(null);
  const [editName, setEditName] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    if (newUsers && newUsers.length > 0) {
      const selectedUser = newUsers.find((user) => user.id === id);
      if (selectedUser) {
        setEditName(selectedUser.name);
        setEditUserName(selectedUser.username);
        setEditEmail(selectedUser.email);
      }
    }
  }, [newUsers, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userEdited = {
      name: editName,
      username: editUserName,
      email: editEmail,
      id: id,
    };
    const updatedUsers = [...newUsers];
    const index = updatedUsers.findIndex(
      (element) => element.id === userEdited.id
    );

    updatedUsers[index] = userEdited;
    console.log(userEdited);
    onUpdateUser(updatedUsers);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onUpdateUser(newUsers);
  };

  return (
    <div className=" flex flex-col w-3/5 items-center justify-center  border-gray-600 border-2 overflow-auto m-auto bg-slate-50">
      <div className="title bg-cyan-500 w-full border-b-2 border-inherit">
        <p className="p-2 ">Edit User</p>
      </div>
      <div className="edit-uer w-full">
        <div className="edit-name flex justify-between items-center p-5">
          <label htmlFor="edit-name">Edit Name:</label>
          <input
            className="border-2 border-inherit w-60 "
            id="edit-name"
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <div className="edit-username items-center flex justify-between px-5">
          <label htmlFor="edit-username">Edit User Name:</label>
          <input
            className="border-2 border-inherit w-60 "
            id="edit-username "
            type="text"
            value={editUserName}
            onChange={(e) => setEditUserName(e.target.value)}
          />
        </div>
        <div className="edit-email items-center flex justify-between p-5">
          <label htmlFor="edit-email">Edit Email:</label>
          <input
            className="border-2 border-inherit w-60"
            id="edit-email"
            type="text"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-group flex items-center justify-around flex-row w-full">
        <button
          className="btn-save px-3 my-2  border-2 border-inherit bg-sky-500 rounded-md"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button className="btn-cancel px-3 my-2 " onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopupEditUser;

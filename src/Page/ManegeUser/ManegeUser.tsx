import React, {
  ChangeEvent,
  Fragment,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import "./Manage.css";
import "./Manage.Moudle.css";

import PopupEditUser from "./PopupEditUser";
// import "animate.css";

// import { RiZzzLine } from "react-icons/ri";
interface Pertional {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ManegeUser = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [newUsers, setNewUsers] = useState<Pertional[]>([]);
  const [newName, setNewName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [selectedId, setSelectedId] = useState(0);

  const [errorName, setErrorName] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  // useEffect(() => {
  //   return setNewUsers(dataUser);
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const dataUser = await response.json();
        setNewUsers(dataUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddNewUser = () => {
    if (!newName) {
      setErrorName("Please enter a name!");
    } else {
      setErrorName("");
    }
    if (!newUserName) {
      setErrorUserName("Please enter a username!");
    } else {
      setErrorUserName("");
    }
    if (!newEmail) {
      setErrorEmail("Please enter an email!");
    } else {
      setErrorEmail("");
    }
    if (newName && newUserName && newEmail) {
      const newUser = {
        id: newUsers.length + 1,
        name: newName,
        username: newUserName,
        email: newEmail,
      };

      setNewUsers([...newUsers, newUser]);
      setNewName("");
      setNewUserName("");
      setNewEmail("");
    }
  };
  const handleDelete = (index: number) => {
    const deleteUser = [...newUsers];
    deleteUser.splice(index, 1);
    setNewUsers(deleteUser);
  };

  const enterDoAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddNewUser();
    }
  };

  const handleUpdateUser = (
    updatedUsers: React.SetStateAction<Pertional[]>
  ) => {
    console.log(updatedUsers);
    setNewUsers(updatedUsers);
    setIsEditUserOpen(false);
  };
  const handleEditUser = (userId: number) => {
    // console.log(userId);
    setSelectedId(userId);
    setIsEditUserOpen(true);
  };

  return (
    <Fragment>
      <div className="user-container overflow-auto">
        {isEditUserOpen ? (
          <div className="popup absolute transition place-items-center translate-y-2/4 animate__fadeInDown animate_fading overflow-auto w-full ">
            <PopupEditUser
              newUsers={newUsers}
              id={selectedId}
              onUpdateUser={handleUpdateUser}
            />
          </div>
        ) : undefined}

        <div className="user-wrap overflow-auto mx-2">
          <h1 className="text-4xl text-center my-3 font-bold">MANAGE USER</h1>
          <div className="add-user flex w-full justify-around my-3 items-center">
            <p>Add new user:</p>
            <div className="name flex flex-col w-1/5">
              <input
                className=" full"
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewName(e.target.value)
                }
                onKeyPress={(e) => enterDoAdd(e)}
              />
              {errorName && <p style={{ color: "red" }}>{errorName}</p>}
            </div>
            <div className="user-name flex flex-col w-1/5">
              <input
                value={newUserName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewUserName(e.target.value)
                }
                className=" w-full"
                type="text"
                placeholder="User Name  "
                onKeyPress={(e) => enterDoAdd(e)}
              />
              {errorUserName && <p style={{ color: "red" }}>{errorUserName}</p>}
            </div>
            <div className="email flex flex-col w-1/5">
              <input
                className=" w-full "
                type="text"
                placeholder="Email"
                value={newEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewEmail(e.target.value)
                }
                onKeyPress={(e) => enterDoAdd(e)}
              />
              {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
            </div>
            <button
              onClick={handleAddNewUser}
              //   disabled={!newName || !newUserName || !newEmail}
            >
              Add
            </button>
          </div>
          <div className="user-list">
            <table className="w-full m-auto p-auto">
              <tr className="bg-blue-600 text-black">
                <th className="text-center">ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th></th>
              </tr>
              {newUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-1 border-inherit items-center overflow-auto"
                >
                  <td className="border-2 border-inherit text-center">
                    {index + 1}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email} </td>
                  <td className="  ">
                    <div className="wrap-btn flex  justify-around">
                      <button
                        className="hover:bg-blue-200 text-green-400"
                        onClick={() => handleDelete(index)}
                      >
                        <MdDelete />
                      </button>{" "}
                      <button onClick={() => handleEditUser(user.id)}>
                        <FaPen />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ManegeUser;

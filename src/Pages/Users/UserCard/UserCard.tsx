import { IUserCard as IProps } from "./IUserCard";
import { useState } from "react";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import AddUser from "../AddUser/AddUser";
import "./UserCard.scss";

const UserCard: React.FC<IProps> = ({ user }) => {
  const [editUser, setEditUser] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleEditUser = (user: any): void => {
    setEditedData(user);
    setEditUser(true);
  };
  const handleCloseModal = () => {
    setEditUser(false);
  };
  const handleDeleteUser = (id: number): void => {};
  return (
    <>
      <div className="user-card__wrapper  my-3 p-2 container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center w-25">
          <img src={user.avatar_url} alt="avatar" />
          <p className="mx-2">{user.login}</p>
        </div>
        <p className="text-left user-type">{user.type}</p>
        <div>
          <BsPencil
            onClick={() => handleEditUser(user)}
            className="cursor-pointer mx-2"
          />
          <BsFillTrashFill
            onClick={() => handleDeleteUser(user.id)}
            className="cursor-pointer  mx-2"
          />
        </div>
      </div>
      {editUser && (
        <AddUser
          show={editUser}
          handleCloseModal={handleCloseModal}
          heading="Edit User"
          initialForm={editedData}
        />
      )}
    </>
  );
};

export default UserCard;

import { useState } from "react";
import SharedButton from "../../Components/Button/Button";
import FilterUsers from "./FilterUsers/FilterUsers";
import ListUsers from "./ListUsers/ListUsers";
import AddUser from "./AddUser/AddUser";

const Users = () => {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleAddUser = () => {
    setShow(true);
  };
  return (
    <div className="container my-4 w-75">
      <div className="row align-items-end">
        <div className="col-8">
          <FilterUsers />
        </div>
        <div className="col-4 text-right">
          <SharedButton
            text="Add user"
            onClick={handleAddUser}
            color="primary"
          />
        </div>
      </div>
      {show && (
        <AddUser
          show={show}
          handleCloseModal={handleCloseModal}
          heading="Add User"
        />
      )}
      <ListUsers />
    </div>
  );
};

export default Users;

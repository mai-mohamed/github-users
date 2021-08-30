import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../store/Users/actions";
import { RootState } from "../../../store/baseReducer";
import { IUsers } from "../../../store/Users/IAction";
import UserCard from "../UserCard/UserCard";
const ListUsers = () => {
  const dispatch = useDispatch();
  const users: IUsers = useSelector((state: RootState) => state.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      {users?.allUsers?.map((user, i) => (
        <div key={i}>
          <UserCard user={user} />
        </div>
      ))}
    </>
  );
};

export default ListUsers;

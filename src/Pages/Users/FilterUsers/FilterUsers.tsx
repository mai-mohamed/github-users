import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { getFilteredDataAction } from "../../../store/Users/actions";
import "./FilterUsers.scss";

const FilterUsers = () => {
  const dispatch = useDispatch();
  const handleFilterByUserName = (e: { target: { value: string } }) => {
    dispatch(getFilteredDataAction({ data: e.target.value }));
  };
  return (
    <div className="filter-users__wrapper">
      <BsSearch className="search-icon" />
      <Form.Control
        className="px-4"
        placeholder="search by user name ..."
        onChange={(e) => handleFilterByUserName(e)}
      />
    </div>
  );
};
export default FilterUsers;

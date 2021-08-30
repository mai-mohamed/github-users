import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import SharedButton from "../../../Components/Button/Button";
import InputSelect from "../../../Components/InputSelect/InputSelect";
import InputText from "../../../Components/InputText/InputText";
import SharedModal from "../../../Components/Modal/Modal";
import { IAddUser as IProps } from "./IAddUser";
import "./AddUser.scss";

const AddUser: React.FC<IProps> = ({
  show,
  handleCloseModal,
  heading,
  initialForm,
}) => {
  const [newType, setNewType] = useState(false);
  const [typeOptions, setTypeOptions] = useState([
    { value: "user", label: "user" },
    { value: "organization", label: "organization" },
  ]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    control,
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });
  useEffect(() => {
    setValue("name", initialForm?.login);
    setValue("type", { value: initialForm?.type, label: initialForm?.type });
  }, [initialForm]);
  const onSubmit = handleSubmit((data) => console.log(data));

  const handleSubmitNewType = (): void => {
    const value = getValues("otherType");
    setTypeOptions([...typeOptions, { value, label: value }]);
    setValue("otherType", "");
    setNewType(false);
  };
  const handleAddingNewType = () => {
    setNewType(true);
  };
  return (
    <div className="add-admin__wrapper">
      <SharedModal
        size="md"
        show={show}
        handleClose={handleCloseModal}
        heading={heading}
        content={
          <Form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-lg-12 mb-1">
                <InputText
                  className="mb-2"
                  label="Name"
                  type="text"
                  placeholder="Name"
                  controls={register("name", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.name?.type === "required"
                      ? " name is required"
                      : null
                  }
                />
              </div>

              <div className="mb-3 col-12">
                <div className="row d-flex align-items-center">
                  <div className={!newType ? "col-11" : "col-12"}>
                    <InputSelect
                      control={control}
                      options={typeOptions}
                      placeholder="Type"
                      asterick={true}
                      label="Type"
                      name="type"
                      controls={register("type", {
                        required: true,
                      })}
                      errorMsg={
                        errors?.type?.type === "required"
                          ? "type is required"
                          : null
                      }
                    />
                  </div>
                  {!newType && (
                    <div className="col-1">
                      <BsFillPlusSquareFill
                        className="add-more-options cursor-pointer mt-4"
                        onClick={handleAddingNewType}
                      />
                    </div>
                  )}
                </div>
              </div>
              {newType && (
                <div className="col-lg-12 mb-1">
                  <div className="row d-flex align-items-center">
                    <div className="col-10">
                      <InputText
                        label="Other type"
                        type="text"
                        placeholder="other type"
                        controls={register("otherType", {})}
                      />
                    </div>
                    <div className="col-2">
                      <SharedButton
                        onClick={handleSubmitNewType}
                        className="mt-4 px-3 py-2"
                        text="Add"
                        color="primary"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between">
                  <SharedButton
                    type="submit"
                    color="primary"
                    className="btn  my-3 px-5 border-radius-10 primary-btn"
                    text="Submit"
                  />
                  <SharedButton
                    color="secondary"
                    className="btn  my-3 px-5 border-radius-10 light-btn"
                    text="Cancel"
                    onClick={handleCloseModal}
                  />
                </div>
              </div>
            </div>
          </Form>
        }
      />
    </div>
  );
};

export default AddUser;

import { Form } from "react-bootstrap";
import { IInputText as IProps } from "./IInputText";

const InputText: React.FC<IProps> = ({
  label,
  type,
  placeholder,
  controls,
  errorMsg,
  customError,
  disabled,
  className,
  labelClassName,
}) => {
  return (
    <>
      {label && <Form.Label className={labelClassName}> {label}</Form.Label>}
      <Form.Control
        {...controls}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
      />
      {errorMsg && <small className="error d-block">{errorMsg}</small>}
      {customError}
    </>
  );
};
export default InputText;

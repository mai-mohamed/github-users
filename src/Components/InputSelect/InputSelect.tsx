import Select from "react-select";
import { Controller } from "react-hook-form";
import { IInputSelect as IProps } from "./IInputSelect";

const InputSelect: React.FC<IProps> = ({
  options,
  label,
  control,
  controls,
  name,
  errorMsg,
  placeholder,
  asterick,
}) => {
  return (
    <>
      <label>
        {label} {asterick && <span className="error d-inline">*</span>}
      </label>
      <Controller
        name={name}
        isClearable
        control={control}
        {...controls}
        render={({ field }) => (
          <Select
            className="react-select"
            {...field}
            options={options}
            placeholder={placeholder}
          />
        )}
      />
      {errorMsg && <small className="error d-block">{errorMsg}</small>}
    </>
  );
};
export default InputSelect;

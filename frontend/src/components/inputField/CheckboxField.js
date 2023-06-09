import React from "react";
import PropTypes from "prop-types";

CheckboxField.propsTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
CheckboxField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
export default function CheckboxField(props) {
  const { field, type, placeholder, disabled } = props;
  const { name } = field;
  return (
    <div className="group-input">
      <div className="checkbox__sex">
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          {...field}
        />
        <span>Nữ (Nếu giới tính là nam thì để trống).</span>
      </div>
    </div>
  );
}

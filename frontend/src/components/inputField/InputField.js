import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    className: '',
    disabled: false,
};

export default function InputField(props) {
    const { field, form, type, placeholder, disabled, className, label } =
        props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <div className={className}>
            {label && (
                <label>
                    {label}
                    <span>*</span>
                </label>
            )}
            <input
                className={showError ? 'input-error' : ''}
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                invalid={showError}
            />
            {showError ? <img className='iconLogin' src='assets/common/imgs/avtFemale.jpg'></img> : null}
            <ErrorMessage name={name}>
                {(msg) => <p className="input-message redline">{msg}</p>}
            </ErrorMessage>
        </div>
    );
}

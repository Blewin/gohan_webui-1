import React, {PropTypes} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function CheckboxWidget({
  schema,  // eslint-disable-line
  id,
  value,
  required,
  disabled,// eslint-disable-line
  label,
  autofocus,
  onChange,
}) {
  return (
    <label className={`${bootstrap['form-check-label']} gohan-form-checkbox`} htmlFor={id}>
      <input type='checkbox'
        className={bootstrap['form-check-input']}
        id={id}
        checked={typeof value === 'undefined' ? false : value}
        required={required}
        disabled={disabled}
        autoFocus={autofocus}
        onChange={event => onChange(event.target.checked)}
      />
      <span className="pt-control-indicator"/>
      {label}
    </label>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxWidget;

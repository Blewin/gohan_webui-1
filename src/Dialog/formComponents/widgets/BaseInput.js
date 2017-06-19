import React, {Component, PropTypes} from 'react';
import {asNumber} from 'react-jsonschema-form/lib/utils';
import validator from './../validator';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

class BaseInput extends Component {
  onInputChange = (event) => {
    const {value} = event.target;

   /* if (this.props.schema.type === 'number') {
      validator.validate(this.props.schema, asNumber(value));
    } else {
      validator.validate(this.props.schema, value);
    }*/

    this.props.onChange(event.target.value || undefined);
  };

  render() {
    const {
      id,
      value,
      placeholder,
      rawErrors,
      label,        // eslint-disable-line
      required,     // eslint-disable-line
      readonly,     // eslint-disable-line
      autofocus,    // eslint-disable-line
      options,      // eslint-disable-line
      schema,       // eslint-disable-line
      formContext,  // eslint-disable-line
      ...inputProps // eslint-disable-line
    } = this.props;

    return (
      <input className={`${bootstrap['form-control']} ${(rawErrors && rawErrors.length) ? bootstrap['form-control-danger'] : ''}`}
        type={schema.type}
        placeholder={placeholder}
        dir="auto"
        value={value ? value : ''}
        onChange={this.onInputChange}
        id={id}
      />
    );
  }
}

BaseInput.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default BaseInput;

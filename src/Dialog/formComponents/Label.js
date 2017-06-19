import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const REQUIRED_FIELD_SYMBOL = '*';

function Label(props) {
  const {label, required, id} = props;

  if (!label) {
    return <div />;
  }

  return (
    <label className={bootstrap['form-control-label']} htmlFor={id}>
      {label}
      {required ? <span className={'gohan-form-asterisk'}>{REQUIRED_FIELD_SYMBOL}</span> : null}
    </label>
  );
}

export default Label;

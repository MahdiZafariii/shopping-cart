import "./Input.css";

const Input = ({ name, formik, type = "text", label }) => {
  return (
    <div className="formControl">
      <label>{label}</label>
      <input type={type} name={name} {...formik.getFieldProps({ name })} />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;

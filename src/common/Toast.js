import { toast } from "react-toastify";

const ToastComponent = ({ type, message }) => {
  return toast[type](message)
};

export default ToastComponent;

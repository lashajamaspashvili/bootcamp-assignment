import Input from "./input/Input";
import Select from "./select/Select";
import Textarea from "./textarea/Textarea";
import RadioButtons from "./radio/RadioButtons";
import DatePicker from "./datePicker/DatePicker";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;

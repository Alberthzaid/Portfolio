import "./Contact.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { saveContact } from "../../Utils/Controllers";
import Swal from "sweetalert2";

interface FormData {
  email: string;
  name: string;
  idea: string;
}

export const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await saveContact(data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      
      console.log("Formulario enviado con éxito:", data);
    } catch (error) {
      console.error(error)
    }
    
  };

  return (
    <div className="login-box">
      <p>Contact me</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="user-box">

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />

          <label>Email</label>
          {errors.email && <span className="error">{errors.email.message}</span>}

        </div>

        <div className="user-box">

          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          <label>Your name</label>
          {errors.name && <span className="error">{errors.name.message}</span>}

        </div>

        <div className="user-box">

          <input
            type="text"
            {...register("idea", { required: "Message is required" })}

          />

          <label>How can I help you?</label>
          {errors.idea && <span className="error">{errors.idea.message}</span>}

        </div>

        <button type="submit" className="boton-elegante">
          Submit
        </button>

      </form>

      <p className="span_msg">¡Send me your ideas!</p>
      
    </div>
  );
};

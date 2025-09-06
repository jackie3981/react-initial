import { useForm } from "react-hook-form";
import api from "../lib/axios";

export default function FormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Form data:", data);
    try {
      const response = await api.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log("API answer:", response.data);
      alert("¡Data sent succefully! Check the console.");
    } catch (error) {
      console.error("Error:", error);
      alert("Error while sending data.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4"
    >
      <div>
        <label className="block mb-1">Title</label>
        <input
          {...register("title", { required: "Mandatory field" })}
          className="w-full p-2 border rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
}

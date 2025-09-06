import { useEffect } from "react";
import api from "../lib/axios";

export default function TestRequest() {
  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <p>Check the console on the browser (F12).</p>;
}

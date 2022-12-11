import { useParams } from "react-router-dom";

export function AddingMyName() {
  const { name } = useParams();
  return <h1>The customer's name is {name}</h1>;
}

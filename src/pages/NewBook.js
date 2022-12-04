import { useParams } from "react-router-dom";
export function NewBook() {
  const { id } = useParams();
  return <h1>This is Book {id}</h1>;
}

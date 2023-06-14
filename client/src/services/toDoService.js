import axios from "axios";

export async function getToDo() {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL);

    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function saveToDo(text) {
  try {
    const response = await axios.post(process.env.REACT_APP_API_URL + "/save", {
      text,
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function updateToDo(_id, text) {
  try {
    const response = await axios.patch(
      process.env.REACT_APP_API_URL + "/update",
      { _id, text }
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function deleteToDo(_id) {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "/delete",
      { _id }
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
}

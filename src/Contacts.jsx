import { useContext, useEffect } from "react";
import { Context } from "./Context/UserContext";
import Axios from "axios";

const Contacts = () => {
  const { dispatch, state } = useContext(Context);

  useEffect(() => {
    const FetchData = async () => {
      const users = await Axios(`https://jsonplaceholder.typicode.com/users`);
      dispatch({ type: "FETCH_USERS", data: users.data });
      console.log(users.data);
    };
    FetchData();
  }, []);


  const { data: users } = state;

  if (!users) return null;
  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default Contacts;

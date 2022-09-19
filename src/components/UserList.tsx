import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/User";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user);
  const { fetchUsers } = useActions();
  console.log(fetchUsers);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>LOADING...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map(user => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;

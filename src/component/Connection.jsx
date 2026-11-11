import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connection = () => {
  const disptach = useDispatch();
  const connections = useSelector((store) => store.connections);

  const myConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data);
      disptach(addConnection(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    myConnections();
  }, []);

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-xl">My Connection</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } =
          connection;

        return (
          <div key={_id} className=" flex m-4 p-4 rounded-lg bg-base-200 w-96 mx-auto">
            <div>
              <img
                src={photoUrl}
                alt={firstName}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold">
                {firstName} {lastName}
              </h2>
              {age && gender && (
                <p>
                  {age} | {gender}
                </p>
              )}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connection;

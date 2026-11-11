import { useState } from "react";
import UserCards from "./UserCards";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const safeProfile = async () => {
    try {
      const res = axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, about, age, gender, photoUrl },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-5">
        <div className="flex justify-center items-center">
          <div className="card bg-base-300 w-80 shadow-xl">
            <div className="card-body  p-4 gap-1">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
                <div className="label">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <div className="label">
                  <span className="label-text">PhotoUrl</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>

              <div className="card-actions justify-center mt-2">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={safeProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCards
          feedData={{ firstName, lastName, age, about, gender, photoUrl }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Save successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;

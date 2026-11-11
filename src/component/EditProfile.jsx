import { useState } from "react";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <div className="label">
              <span className="label-text">About</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <div className="label">
              <span className="label-text">PhotoUrl</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <div className="card-actions justify-center">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

const UserCards = ({feedData}) => {
    console.log("UserCards feedData:", feedData);
    const { firstName, lastName, photoUrl, age, gender, about } = feedData
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img
        className="w-full h-64 object-cover"
          src={photoUrl || "https://as2.ftcdn.net/v2/jpg/02/60/78/83/1000_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg"}
          alt="person"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        <p>{about ? about : "No description available."}</p>
        {age && gender && <p>Age: {age}, Gender: {gender}</p>}
        <div className="card-actions justify-between">
          <button className="btn btn-secondary">Ignore</button>

          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;

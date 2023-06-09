import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "./provider/usersProvider";
import { ActiveUserContext } from "./provider/activeUserProvider";

const LandingPage = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [user, setUser] = useContext(ActiveUserContext);
  return (
    <div className="landing-page flex items-center justify-center h-[100vh] relative">
      <div className="z-50 w-[47rem] flex-col  shadow-2xl my-auto pb-5 rounded-b-[2rem]">
        <div className="py-10 bg-gray-100 rounded-t-[20px] ">
          <h1 className="text-center text-stone-600 font-semibold text-[1.8rem]">
            Select an account
          </h1>
        </div>
        <div className=" bg-white h-[32rem] overflow-y-scroll rounded-b-[2rem] px-12 pt-1">
          {users.map((user, i) => (
            <Link
              to={`/profile-details/${user.name.replace(/\s/g, "-")}`}
              onClick={() => setUser(user)}
              state={{ user: user }}
              key={i}
            >
              <div className="flex flex-row items-center w-full space-x-3  py-4 px-1 ">
                <img
                  className="rounded-[20px]"
                  src={user.profilepicture}
                  width="40"
                  height="40"
                />
                <p className="flex-1 text-stone-600 text-[1.5rem]">
                  {user.name}
                </p>
              </div>
              <hr className="h-0 bg-stone-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

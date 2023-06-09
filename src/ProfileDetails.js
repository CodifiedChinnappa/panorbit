import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";

//context provider
import { ActiveUserContext } from "./provider/activeUserProvider";

const ProfileDetails = () => {
  const [user, setUser] = useContext(ActiveUserContext);
  const location = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-5 p-10 text-[1.7rem]">
        <div className="flex flex-col pb-2 -ml-6">
          <div className="flex justify-center pb-1">
            <img
              className="rounded-[50%] "
              src={user?.profilepicture}
              alt="test"
              width="280"
              height="280"
            />
          </div>
          <div className="text-center font-semibold text-neutral-600  capitalize">
            {user?.name}
          </div>
        </div>
        <div className="space-y-2 pb-3 ">
          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400  ">
              <span>Username</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600  font-semibold ">
              <span>{user?.name}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box  font-normal text-neutral-400  ">
              <span>e-mail</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" text-neutral-600  font-semibold ">
              <span>{user?.email}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400  ">
              <span>Phone</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400  ">:</span>
            </div>
            <div className=" capitalize text-neutral-600  font-semibold ">
              <span>{user?.phone}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 ">
              <span>Website</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" text-neutral-600 font-semibold  ">
              <span>{user?.website}</span>
            </div>
          </div>
        </div>

        <hr class="h-0.5 bg-stone-300" />

        <div>
          <div className="capitalize font-medium text-neutral-400 text-center  py-2 -ml-[3rem]">
            Company
          </div>
          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 ">
              <span>Name</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className="capitalize text-neutral-600  font-semibold ">
              <span>{user.company.name}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 ">
              <span>CatchPhrase</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600  font-semibold ">
              <span>{user?.company.catchPhrase}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 ">
              <span>Bs</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600 font-semibold ">
              <span>{user?.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7 flex flex-col text-[1.7rem]  pl-[3rem] ">
        <div className="capitalize font-normal text-neutral-400 text-left py-2">
          Address:
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400  ">
            <span>Street</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600  font-semibold ">
            <span>{user?.address.street}</span>
          </div>
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400  ">
            <span>Suite</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600  font-semibold ">
            <span>{user?.address.suite}</span>
          </div>
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400  ">
            <span>City</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600  font-semibold ">
            <span>{user?.address.city}</span>
          </div>
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400  ">
            <span>Zipcode</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600  font-semibold ">
            <span>{user?.address.zipcode}</span>
          </div>
        </div>

        <div className=" w-[33vw] h-[48vh] pt-2  ml-5">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={location}
            defaultZoom={10}
          >
            <div className="text-lg">&#128204;</div>
          </GoogleMapReact>
          <div className="flex justify-end space-x-4 mt-3">
            <div className="flex justify-end space-x-3 -ml-1">
              <div className=" capitalize font-normal text-neutral-400 text-sm">
                <span className="w-fit">Lat</span>
              </div>
              <div className="box text-sm">
                <span className=" text-neutral-400 ">:</span>
              </div>
              <div className=" text-black  font-semibold text-sm ">
                <span>{user?.address.geo.lat}</span>
              </div>
            </div>
            <div className="flex space-x-3 -ml-1">
              <div className="capitalize font-normal text-neutral-400 text-sm">
                <span style={{ width: "auto!important" }}>Long</span>
              </div>
              <div className="box text-sm">
                <span className=" text-neutral-400 ">:</span>
              </div>
              <div className=" text-black  font-semibold text-sm ">
                <span>{user?.address.geo.lng}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

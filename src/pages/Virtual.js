import React from "react";
import Page from "./Page";
import { useNavigate, useParams } from "react-router-dom";
const Card = () => (
  <div className="flex flex-col w-56 h-80 overflow-hidden rounded-lg shadow-lg ">
    <img
      className="h-36 w-full bg-gray-200 object-cover"
      src="https://shooliniuniversity.com/blog/wp-content/uploads/2022/05/BTech-in-Food-Tech.jpg"
      alt=""
    />
    <div className="w-full gap-6 p-4 font-mont bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col h-full ">
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl text-white font-semibold">Title</h1>
        <h1 className="text-sm text-white font-base">Description</h1>
      </div>
    </div>
  </div>
);
const StallCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("asdasd")}
      className="flex flex-row w-96 h-56 overflow-hidden rounded-lg shadow-lg "
    >
      <img
        className="w-36 h-full bg-gray-200 object-cover"
        src="https://shooliniuniversity.com/blog/wp-content/uploads/2022/05/BTech-in-Food-Tech.jpg"
        alt=""
      />
      <div className="w-full gap-6 p-4 font-mont bg-gradient-to-br from-green-600 to-green-400 flex flex-col h-full ">
        <div className="flex flex-row justify-start gap-4 bg-white p-2 rounded-full">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-sm text-gray-800 font-semibold">Author</h1>
            <h1 className="text-xs text-gray-600 font-semibold">Role</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl text-white font-semibold">Title</h1>
          <h1 className="text-sm text-white font-semibold">Description</h1>
        </div>
      </div>
    </div>
  );
};
function Virtual() {
  const params = useParams();
  return (
    <Page
      page="themes"
      title={params.virtualId ? "Title of Stall" : "Virtual Stalls"}
    >
      {params.virtualId ? (
        <div className="w-full h-full flex flex-col justify-start">
          <div className="flex flex-row justify-between shadow-inner shadow-slate-500 w-full">
            <img
              className="w-full h-36 object-cover"
              src="https://shooliniuniversity.com/blog/wp-content/uploads/2022/05/BTech-in-Food-Tech.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-wrap m-8">
            <Card />
          </div>
        </div>
      ) : (
        <div className="w-full h-full m-8 flex flex-row gap-4 flex-wrap justify-center">
          <StallCard />
          <StallCard />
        </div>
      )}
    </Page>
  );
}

export default Virtual;

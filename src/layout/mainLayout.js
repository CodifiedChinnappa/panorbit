import Sidebar from "../components/sidebar";
import Chat from "./../components/chat/chat";
import Header from "./../components/header";

const MainLayout = (props) => {
  return (
    <div className="flex  p-[3.8rem]   bg-slate-100 shadow-2xl gap-10">
      <div className="w-[19vw]">
        <Sidebar type={props.type} />
      </div>
      {/* //header */}
      <div className="relative w-[81vw] flex flex-col break-words ">
        <Header type={props.type} />
        <hr className="h-0.5 bg-slate-300" />
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">{props.children}</div>
        </div>
      </div>
      <div className="fixed bottom-0 right-8  ">
        <Chat />
      </div>
    </div>
  );
};

export default MainLayout;

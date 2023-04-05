import { getSvg } from "../utils/getSvg";

const Sidebar = () => {
    return (
        <div className="w-64 py-2 text-sm text-[#5f6368]">
            <div className="mx-4 flex w-min items-center gap-3 rounded-full py-2 pl-2 pr-8 shadow-md">
                <div>{getSvg({ type: "new", fill: "#5f6368" })}</div>
                <div className="font-medium text-[##3C4043]">New</div>
            </div>
            <div className="flex items-center gap-5 px-7 py-2">
                <div>{getSvg({ type: "myDrive" })}</div>
                <div>My Drive</div>
            </div>
            <div className="flex items-center gap-5 px-7 py-2">
                <div>{getSvg({ type: "computers" })}</div>
                <div>Computers</div>
            </div>
            <div className="flex items-center gap-5 px-7 py-2">
                <div>{getSvg({ type: "sharedWithMe" })}</div>
                <div>Shared with me</div>
            </div>
            <div className="flex items-center gap-5 px-7 py-2">
                <div>{getSvg({ type: "recent" })}</div>
                <div>Recent</div>
            </div>
            <div className="flex items-center gap-5 px-7 py-2">
                <div>{getSvg({ type: "starred" })}</div>
                <div>Starred</div>
            </div>
            <div className="flex items-center gap-5 px-7 pt-2 pb-4">
                <div>{getSvg({ type: "trash" })}</div>
                <div>Trash</div>
            </div>
            <div className="flex items-center gap-5 border-t-[1px] border-[#DADCE0] px-7 py-4">
                <div>{getSvg({ type: "cloud" })}</div>
                <div>Storage (81% full)</div>
            </div>
            <div className="flex h-2 w-2 bg-[#f9ab00]"></div>
            <div className="px-7 py-1">12.24 GB of 15 GB used</div>
            <div className="px-7 py-1">
                <button className="rounded border-[1px] border-solid border-[#dadce0] px-7 py-2 font-medium text-[#1a73e8]">
                    Buy Storage
                </button>
            </div>
        </div>
    );
};
export default Sidebar;

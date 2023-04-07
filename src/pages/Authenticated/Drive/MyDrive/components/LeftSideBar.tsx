import googleDriveIcon from "../../../../../assets/imgs/googleDrive.png"
import { getSvg } from "../../../../../utils/getSvg"
const LeftSideBar = () => {
  return (
    <div className="min-w-[260px] bg-red-500">
      <div className="h-[7%] bg-green-400">
        <div className="flex items-center gap-2 py-3  px-5">
          <img src={googleDriveIcon} alt="" className="h-10 w-10" />
          <p className="text-2xl text-[#5F6368]">Drive</p>
        </div>
      </div>
      <div className="h-[93%]">
        <div className=" py-3 px-3">
          <div className="flex w-[120px] items-center gap-3 rounded-full bg-blue-400 py-2 px-2">
            <div className="">{getSvg({ type: "new", fill: "#5F6368" })}</div>
            <div className="text-sm font-medium text-[##3C4043]">New</div>
          </div>
        </div>
        <div className=" px-7 py-1 text-[13px]">
          <div className="mb-[15px] flex items-center gap-4">
            <div>{getSvg({ type: "myDrive" })}</div>
            <div>My Drive</div>
          </div>
          <div className="mb-[15px] flex items-center gap-4">
            <div>{getSvg({ type: "computers" })}</div>
            <div>Computers</div>
          </div>
          <div className="mb-[15px] flex items-center gap-4">
            <div>{getSvg({ type: "sharedWithMe" })}</div>
            <div>Shared with me</div>
          </div>
          <div className="mb-[16px] flex items-center gap-4">
            <div>{getSvg({ type: "recent" })}</div>
            <div>Recent</div>
          </div>
          <div className="mb-[16px] flex items-center gap-4">
            <div>{getSvg({ type: "starred" })}</div>
            <div>Starred</div>
          </div>
          <div className="flex items-center gap-4 pb-[14px]">
            <div>{getSvg({ type: "trash" })}</div>
            <div>Trash</div>
          </div>
        </div>
        <div className="border-t border-solid border-[#dadce0] pt-[12px]"></div>
        <div className="py-1 pl-7 pr-14 text-[13px]">
          <div className="flex items-center gap-4 pb-4">
            <div>{getSvg({ type: "cloud" })}</div>
            <div>Storage (81% full)</div>
          </div>
          <div className="rounded-full bg-yellow-500 py-[2px]"></div>
          <div className="pt-1 pb-3">12.24 GB of 15 GB used</div>
          <button className="rounded border-[1px] border-solid border-[#dadce0] px-7 py-2 text-sm font-medium text-[#1a73e8]">
            Buy Storage
          </button>
        </div>
      </div>
    </div>
  )
}
export default LeftSideBar

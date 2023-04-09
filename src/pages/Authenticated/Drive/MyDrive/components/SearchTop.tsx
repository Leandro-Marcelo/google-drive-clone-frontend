import profilePicture from "../../../../../assets/imgs/profilePicture.jpg"
import { getSvg } from "../../../../../utils/getSvg"
import Tooltip from "../../../../../components/Tooltip"

const SearchTop = () => {
  return (
    <div
      className="flex h-[7%] bg-[#F7F9FC] "
      onContextMenu={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <div className="flex w-full items-center  ">
        {/* relative flex w-full items-center shadow-md lg:shadow-none xl:w-[714px] */}
        <div className="relative flex w-full items-center shadow-md rounded-full xl:w-[714px]">
          {/* hover:bg-[#3c404314] rounded-full p-2 group */}
          <div className="absolute left-[6px] hidden lg:block   ">
            <Tooltip text="Search" direction="top-10 -left-4" textNoWrap={true}>
              <div>
                {getSvg({
                  type: "searchGoogleDrive",
                  fill: "#444746",
                })}
              </div>
            </Tooltip>
          </div>
          <div className="absolute left-3 h-4 w-4 lg:hidden">
            {getSvg({ type: "menuSquared", fill: "#000" })}
          </div>

          <input
            type="text"
            className="w-full rounded-full py-3 px-14 outline-none  lg:bg-[#EDF2FC] focus:bg-white placeholder-[#1F1F1F]"
            placeholder="Search in Drive"
          />

          <div className="absolute right-3 hidden lg:block">
            <Tooltip
              text="Advanced search"
              direction="top-10 -left-10"
              textNoWrap={true}
            >
              <div>
                {getSvg({
                  type: "showSearchIcon",
                  fill: "#444746",
                })}
              </div>
            </Tooltip>
          </div>
          <div className="absolute right-3 lg:hidden">
            <img src={profilePicture} alt="" className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex w-[215px] items-center justify-between  px-4 ">
        <Tooltip text="Support" direction="top-10 -left-4" textNoWrap={true}>
          <div className="h-6 w-6  ">
            {getSvg({
              type: "support",
              fill: "#444746",
            })}
          </div>
        </Tooltip>
        <Tooltip text="Settings" direction="top-10 -left-4" textNoWrap={true}>
          <div className="h-6 w-6">
            {getSvg({
              type: "settings",
              fill: "#444746",
            })}
          </div>
        </Tooltip>
        <Tooltip
          text="Google apps"
          direction="top-10 -left-7"
          textNoWrap={true}
        >
          <div className="h-6 w-6">
            {getSvg({
              type: "googleApps",
              fill: "#444746",
            })}
          </div>
        </Tooltip>

        <div className="relative group ml-3 z-10">
          <div className=" rounded-full pl-1 py-1 hover:bg-[#3c404314]">
            <div className="w-[32px] h-[32px] flex items-center justify-center">
              <img src={profilePicture} alt="" className="rounded-full " />
            </div>
          </div>

          <div
            className={`absolute top-10 rounded text-white hidden transition-all duration-300 group-hover:block -left-28`}
          >
            <div className="flex max-w-xs flex-col items-center">
              <div
                className={`rounded bg-[rgb(95,99,104,0.95)] py-[6px] px-2 text-[12px] shadow-lg whitespace-nowrap`}
              >
                <div className="font-bold">Google Account</div>
                <div>Leandro Marcelo</div>
                <div>lmarcelos2019@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchTop

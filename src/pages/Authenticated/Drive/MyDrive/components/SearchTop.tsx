import profilePicture from "../../../../../assets/imgs/profilePicture.jpg"
import { getSvg } from "../../../../../utils/getSvg"

const SearchTop = () => {
  return (
    <div className="flex h-[7%] bg-blue-500">
      <div className="flex w-full items-center bg-yellow-500 ">
        <div className="relative flex w-full items-center shadow-md lg:shadow-none xl:w-[714px]">
          <div className="absolute left-3 hidden lg:block">
            {getSvg({
              type: "searchGoogleDrive",
              fill: "#71757A",
            })}
          </div>
          <div className="absolute left-3 h-4 w-4 lg:hidden">
            {getSvg({ type: "menuSquared", fill: "#000" })}
          </div>
          <input
            type="text"
            className="w-full rounded-lg py-3 px-12 outline-none  lg:bg-[#F1F3F4]"
          />
          <div className="absolute right-3 hidden lg:block">
            {getSvg({
              type: "showSearchIcon",
              fill: "#71757A",
            })}
          </div>
          <div className="absolute right-3 lg:hidden">
            <img src={profilePicture} alt="" className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex w-[255px] items-center justify-between bg-green-400 px-4">
        <div className="flex items-center gap-4">
          <div className="h-6 w-6">
            {getSvg({
              type: "support",
              fill: "#5F6368",
            })}
          </div>
          <div className="h-6 w-6">
            {getSvg({
              type: "settings",
              fill: "#5F6368",
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-6 w-6">
            {getSvg({
              type: "googleApps",
              fill: "#5F6368",
            })}
          </div>
          <img src={profilePicture} alt="" className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default SearchTop

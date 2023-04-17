import { useState } from "react"
import googleDriveIcon from "../../../../../assets/imgs/googleDrive.png"
import { getSvg } from "../../../../../utils/getSvg"
import { useLocation } from "react-router-dom"
import { AuthenticatedRoutes } from "../../../../../utils/constants"
import Dropdown from "../../../../../components/Dropdown"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import { setMenuOfNewIsOpenReducer } from "../../../../../store/style/styleSlice"

export type SubMenuName = "docs" | "sheets" | "slides" | "forms" | "more"

const LeftSideBar = () => {
  const storeStyle = useAppSelector((store) => store.style)
  const dispatch = useAppDispatch()

  const location = useLocation()
  const { pathname } = location
  const splitedPathname = pathname.split("/")
  const lastPathname = splitedPathname[splitedPathname.length - 1]

  const sidebarItemStyle =
    "mb-[2px] flex items-center gap-4 hover:bg-[#E3E3E3] py-[6px] rounded-full cursor-pointer"

  const sidebarItemStyleSelected =
    "mb-[2px] flex items-center gap-4 py-[6px] rounded-full bg-[#C2E7FF]"

  return (
    <div
      className="min-w-[260px] bg-[#F7F9FC] "
      onContextMenu={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <div className="h-[7%] ">
        <div className="flex items-center gap-2 py-3  px-5">
          <img src={googleDriveIcon} alt="" className="h-10 w-10" />
          <p className="text-2xl text-[#5F6368]">Drive</p>
        </div>
      </div>
      <div className="h-[93%] ">
        <div className=" py-3 px-3 ">
          <div
            className="flex w-[100px] items-center gap-3 rounded-2xl  py-4 px-2 justify-center cursor-pointer hover:bg-[#EFF3FB] transition-colors hover:shadow-md relative bg-white"
            onClick={(e) => {
              e.stopPropagation()
              dispatch(setMenuOfNewIsOpenReducer(true))
            }}
            style={{
              boxShadow:
                "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
            }}
          >
            <div className="">{getSvg({ type: "new", fill: "#5F6368" })}</div>
            {/* relative w-[300px] ml-4 bg-red-500 */}
            <div className="text-sm font-medium text-[##3C4043]">New</div>
            <Dropdown menuIsOpen={storeStyle.menuOfNewIsOpen} />
          </div>
        </div>
        <div className=" pl-3 pr-5 py-5 text-[13px] ">
          {/* Sidebar Item */}
          <div
            className={
              lastPathname === AuthenticatedRoutes.MY_DRIVE
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-2 flex items-center">
              <div>
                {getSvg({
                  type: "arrowLeftSelect",
                  width: "12px",
                  height: "12px",
                })}
              </div>
              <div>
                {getSvg({
                  type:
                    lastPathname === AuthenticatedRoutes.MY_DRIVE
                      ? "myDriveSelected"
                      : "myDrive",
                  width: "20px",
                  height: "20px",
                })}
              </div>
            </div>

            <div>My Drive</div>
          </div>
          {/* ./ Sidebar Item */}
          <div
            className={
              lastPathname === AuthenticatedRoutes.COMPUTERS
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-2 flex items-center">
              <div>
                {getSvg({
                  type: "arrowLeftSelect",
                  width: "12px",
                  height: "12px",
                })}
              </div>
              <div>
                {getSvg({ type: "computers", width: "20px", height: "20px" })}
              </div>
            </div>

            <div>Computers</div>
          </div>
          <div
            className={
              lastPathname === AuthenticatedRoutes.SHARED_WITH_ME
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-5 flex items-center">
              {getSvg({
                type:
                  lastPathname === AuthenticatedRoutes.SHARED_WITH_ME
                    ? "sharedWithMeSelected"
                    : "sharedWithMe",

                width: "20px",
                height: "20px",
              })}
            </div>
            <div>Shared with me</div>
          </div>
          <div
            className={
              lastPathname === AuthenticatedRoutes.RECENT
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-5 flex items-center">
              {getSvg({
                type:
                  lastPathname === AuthenticatedRoutes.RECENT
                    ? "recentSelected"
                    : "recent",

                width: "20px",
                height: "20px",
              })}
            </div>
            <div>Recent</div>
          </div>
          <div
            className={
              lastPathname === AuthenticatedRoutes.STARRED
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-5 flex items-center">
              {getSvg({
                type:
                  lastPathname === AuthenticatedRoutes.STARRED
                    ? "starredSelected"
                    : "starred",

                width: "20px",
                height: "20px",
              })}
            </div>
            <div>Starred</div>
          </div>
          <div
            className={
              lastPathname === AuthenticatedRoutes.TRASH
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-5 flex items-center">
              {getSvg({
                type:
                  lastPathname === AuthenticatedRoutes.TRASH
                    ? "trashSelected"
                    : "trash",

                width: "20px",
                height: "20px",
              })}
            </div>
            <div>Trash</div>
          </div>
          <div
            className={
              lastPathname === AuthenticatedRoutes.STORAGE
                ? sidebarItemStyleSelected
                : sidebarItemStyle
            }
          >
            <div className="pl-5 flex items-center">
              {getSvg({
                type:
                  lastPathname === AuthenticatedRoutes.STORAGE
                    ? "cloudSelected"
                    : "cloud",
                width: "20px",
                height: "20px",
              })}
            </div>
            <div>Storage</div>
          </div>
          <div className="pl-5 pr-7 pt-1">
            <div className="flex items-center py-[2.3px] bg-yellow-500 rounded-2xl"></div>
            <div className="pt-1 pb-3 text-[14px] text-[#5f6368] cursor-pointer">
              12.24 GB of 15 GB used
            </div>
          </div>
          <div className="flex pl-6">
            <button className="rounded-full border-[1px] border-solid border-[#848786] px-7 py-2 text-sm font-medium text-[#1a73e8] hover:bg-[#EFF3FB]">
              Get more storage
            </button>
          </div>
        </div>
        {/* <div className="py-1 pl-7 pr-14 text-[13px]">
          <div className="rounded-full bg-yellow-500 py-[2px]"></div>
          <div className="pt-1 pb-3">12.24 GB of 15 GB used</div>
          <button className="rounded border-[1px] border-solid border-[#dadce0] px-7 py-2 text-sm font-medium text-[#1a73e8]">
            Buy Storage
          </button>
        </div> */}
      </div>
    </div>
  )
}
export default LeftSideBar

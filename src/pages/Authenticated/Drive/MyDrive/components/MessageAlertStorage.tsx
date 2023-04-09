import { useState } from "react"
import { getSvg } from "../../../../../utils/getSvg"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import ContextMenu from "./ContextMenu"
/* import FolderContainer from "./FolderContainer" */
import FileContainer from "./FileContainer"

const MessageAlertStorage = () => {
  return (
    <>
      {"81% of storage used" ? (
        /* flex-wrap items-center justify-between */
        /* px-3 py-[6px] */
        <div
          className="grid min-h-[5%]   w-full grid-cols-[30px_1fr_30px]  bg-[#F9DEDC] py-2 px-3 rounded-md"
          onContextMenu={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          {/*  pt-3 */}
          <div className=" flex justify-center pt-[6px]">
            {getSvg({
              type: "warningSelected",
              fill: "#B42921",
              width: "20px",
              height: "20px",
            })}
          </div>
          <div className="flex flex-wrap items-center gap-4  pl-3">
            <div className="text-wrap">
              <span className="font-medium text-sm">
                Almost out of storage{" "}
              </span>
              If you run out, you can't create or edit files, send or receive
              email on Gmail, or back up to Google Photos.
            </div>
            <div className="flex flex-1 items-center  justify-end whitespace-nowrap px-2 text-[#c5221f] font-semibold text-sm">
              <div className="hover:bg-[rgb(197,34,31,0.1)] px-4 p-[6px] rounded-full text-center cursor-pointer">
                Learn more
              </div>
              <div className="hover:bg-[rgb(197,34,31,0.1)] px-4 p-[6px] rounded-full text-center cursor-pointer">
                Buy storage
              </div>
            </div>
          </div>
          {/* pt-2 justify-center items-center */}
          {/* pt-4 */}
          <div className="flex justify-center    hover:bg-[rgb(197,34,31,0.1)] rounded-full cursor-pointer h-max p-[10px]">
            {/* <div className=" h-max pb-2 pl-2 pr-2 bg-blue-400"></div> */}
            {getSvg({
              type: "close",
              fill: "#c5221f",
              width: "12px",
              height: "12px",
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}
export default MessageAlertStorage

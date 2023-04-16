import React, { useState } from "react"
import Tooltip from "../../../../../components/Tooltip"
import { getSvg } from "../../../../../utils/getSvg"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import {
  handleCheckAllIdsReducer,
  updateChildFoldersReducer,
} from "../../../../../store/folder/folderSlice"
import folderMovePNG from "../../../../../assets/imgs/folderMove.png"

const FileActions = () => {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  const [fileOrFolderSelected, setFileOrFolderSelected] = useState(true)

  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)

  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked)
    setIndeterminate(false)
  }

  return (
    /*   pl-1 pr-7 */
    <div
      className="flex h-[7.5%] items-center justify-between pl-1 pr-8"
      onContextMenu={(e) => {
        e.preventDefault()
      }}
    >
      {storeFolder.checkedIds.size > 0 ? (
        /* pl-4  */
        <div
          className="flex items-center gap-3 pl-3"
          onClick={(e) => {
            e.stopPropagation()
            dispatch(handleCheckAllIdsReducer())
          }}
        >
          <Tooltip
            text="Select all files on screen"
            direction="top-10 -left-4"
            textNoWrap={true}
          >
            <div>
              {getSvg({
                type: `${
                  storeFolder.checkedIds.size ===
                  storeFolder.totalFilesPlusFolders
                    ? "checkboxChecked"
                    : "checkboxIndeterminate"
                }`,
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>

          <div className="text-[#1F1F1F] font-semibold">
            {storeFolder.checkedIds.size} selected
          </div>

          <Tooltip text="Share" direction="top-10 -left-4" textNoWrap={true}>
            <div>
              {getSvg({
                type: "share",
                fill: "#1F1F1F",
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>

          <Tooltip text="Download" direction="top-10 -left-4" textNoWrap={true}>
            <div>
              {getSvg({
                type: "download",
                fill: "#1F1F1F",
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>

          <Tooltip text="Move to" direction="top-10 -left-4" textNoWrap={true}>
            {/* <div className="w-[18px] h-[18px]">
              <img
                src={folderMovePNG}
                alt="folder move"
                className="max-w-full"
              />
            </div> */}
            <div className="">
              {getSvg({
                type: "folderMove",
                width: "18px",
                height: "18px",
              })}
            </div>
          </Tooltip>

          <Tooltip text="Remove" direction="top-10 -left-4" textNoWrap={true}>
            <div>
              {getSvg({
                type: "trash",
                fill: "#1F1F1F",
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>

          <Tooltip text="Get link" direction="top-10 -left-4" textNoWrap={true}>
            <div>
              {getSvg({
                type: "getLink",
                fill: "#1F1F1F",
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>

          <Tooltip
            text="More options"
            direction="top-10 -left-4"
            textNoWrap={true}
          >
            <div>
              {getSvg({
                type: "moreOptions",
                fill: "#1F1F1F",
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>
        </div>
      ) : storeFolder.childFolders.length === 0 ? (
        <div className="flex cursor-pointer items-center gap-1 rounded-full px-[6px] py-1 hover:bg-[#f5f5f5] ">
          <div className="text-2xl pl-2">My Drive</div>
          <div className="pt-1">{getSvg({ type: "arrowDownSelect" })}</div>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <div
            className="text-[24px] px-4 cursor-pointer hover:bg-[#f5f5f5] rounded-full "
            onClick={() =>
              dispatch(
                updateChildFoldersReducer({
                  id: "ROOT",
                  originalName: "ROOT",
                })
              )
            }
          >
            My Drive
          </div>
          {storeFolder.childFolders.map((cf, idx) => {
            if (idx === storeFolder.childFolders.length - 1) {
              return (
                <React.Fragment key={cf.id}>
                  <div className="">
                    {getSvg({
                      type: "greatherThanFolder",
                      width: "24px",
                      height: "24px",
                      fill: "#747775",
                    })}
                  </div>
                  <div className="flex  items-center pl-4 pr-2 cursor-pointer hover:bg-[#f5f5f5] rounded-full text-[22px]">
                    <div>{cf.originalName}</div>
                    <div className="pt-1">
                      {getSvg({ type: "arrowDownSelect" })}
                    </div>
                  </div>
                </React.Fragment>
              )
            }

            return (
              <React.Fragment key={cf.id}>
                <div className="">
                  {getSvg({
                    type: "greatherThanFolder",
                    width: "24px",
                    height: "24px",
                    fill: "#747775",
                  })}
                </div>
                <div
                  className="text-[22px] pl-4 pr-4 cursor-pointer hover:bg-[#f5f5f5] rounded-full "
                  onClick={() =>
                    dispatch(
                      updateChildFoldersReducer({
                        id: cf.id,
                        originalName: cf.originalName,
                      })
                    )
                  }
                >
                  {cf.originalName}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      )}
      <div className="gap-5 h-full flex items-center">
        <Tooltip
          text="List layout"
          textNoWrap={true}
          direction="top-[28px] -left-5"
        >
          <div>
            {getSvg({
              type: "listLayout",
              fill: "#444746",
              width: "20px",
              height: "20px",
            })}
          </div>
        </Tooltip>
        <div>
          <Tooltip
            text="View details"
            textNoWrap={true}
            direction="top-[28px] -left-7"
          >
            <div>
              {getSvg({
                type: "toggleDetails",
                fill: "#444746",
                width: "20px",
                height: "20px",
              })}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
export default FileActions

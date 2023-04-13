import { useRef, useState } from "react"
import { getSvg } from "../../../../../utils/getSvg"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import ContextMenu from "./ContextMenu"
/* import FolderContainer from "./FolderContainer" */
import FileContainer from "./FileContainer"
import FolderContainer from "./FolderContainer"
import { openModalCreateUpdateFolder } from "../../../../../utils/openModal"
import DropArea from "./DropArea"
import {
  updateIsShowCtxMenuReducer,
  updatePositionCtxMenuReducer,
} from "../../../../../store/folder/folderSlice"

const MyFilesAndFolders = () => {
  const refInputFile = useRef<HTMLInputElement>(null)
  /* const handleClickInputFile = () => {
    refInputFile.current && refInputFile.current.click()
  } */

  const dispatch = useAppDispatch()
  /*  const { childFolders } = useAppSelector((state) => state.folder) */

  return (
    <>
      {/* TODO Crear las imagenes que van debajo de Suggested */}
      <div
        className="h-[7%] py-4 pl-1 pr-7 text-sm font-semibold text-[#5f6368] "
        onContextMenu={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        Suggested
      </div>
      <div
        /* className={` bg-green-500 ${
          "81% of storage used" === "81% of storage used"
            ? `min-h-[89%]`
            : `min-h-[94%]`
        } `} */
        /* bg-green-500 */
        className={`   ${
          "hasStorageFull" === "hasStorageFull" ? `min-h-[87%]` : `min-h-[93%]`
        } `}
        onContextMenu={(e) => {
          e.preventDefault()
          e.stopPropagation()

          dispatch(
            updatePositionCtxMenuReducer({
              x: e.pageX,
              y: e.pageY,
            })
          )
          dispatch(
            updateIsShowCtxMenuReducer({
              type: "outside",
              isShow: true,
            })
          )
        }}
      >
        <DropArea refInputFile={refInputFile}>
          <h4 className="py-4 pl-1 text-[14px] text-[#1f1f1f] font-semibold">
            Folders
          </h4>
          <FolderContainer />
          <h4 className="py-4 pl-1 text-[14px] text-[#1f1f1f] font-semibold">
            Files
          </h4>
        </DropArea>
        {/* EL FILE NO DEJA VERSE EL AZUL QUE APARECE AL REDEDOR CUANDO HACEMOS DRAG OVER */}
        <FileContainer />
      </div>
    </>
  )
}
export default MyFilesAndFolders

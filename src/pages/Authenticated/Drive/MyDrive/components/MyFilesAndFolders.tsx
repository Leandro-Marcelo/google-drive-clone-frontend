import { useRef, useState } from "react"
import { getSvg } from "../../../../../utils/getSvg"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import ContextMenu from "./ContextMenu"
/* import FolderContainer from "./FolderContainer" */
import FileContainer from "./FileContainer"
import FolderContainer from "./FolderContainer"
import { openModalCreateUpdateFolder } from "../../../../../utils/openModal"
import DropArea from "./DropArea"

interface InitialState {
  x: number
  y: number
  fileSelected: string
  folderSelected: string
  dropAreaSelected: "newFileOrFolder" | "folder" | "file" | ""
}

const MyFilesAndFolders = () => {
  const refInputFile = useRef<HTMLInputElement>(null)
  const handleClickInputFile = () => {
    refInputFile.current && refInputFile.current.click()
  }

  const dispatch = useAppDispatch()
  /*  const { childFolders } = useAppSelector((state) => state.folder) */

  const initialState: InitialState = {
    x: 0,
    y: 0,
    fileSelected: "",
    folderSelected: "",
    dropAreaSelected: "",
  }

  const [points, setPoints] = useState(initialState)

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
          setPoints({
            ...initialState,
            x: e.pageX,
            y: e.pageY,
            fileSelected: "",
            folderSelected: "",
            dropAreaSelected: "newFileOrFolder",
          })
        }}
      >
        <h4 className="py-4 pl-1 text-[14px] text-[#1f1f1f] font-semibold">
          Folders
        </h4>
        <FolderContainer />
        <DropArea refInputFile={refInputFile}></DropArea>
        <h4 className="py-4 pl-1 text-[14px] text-[#1f1f1f] font-semibold">
          Files
        </h4>
        <FileContainer />
        {points.dropAreaSelected === "newFileOrFolder" && (
          <ContextMenu y={points.y} x={points.x}>
            <ul className="rounded-md bg-white py-4">
              <li
                className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
                onClick={() => openModalCreateUpdateFolder()}
              >
                New Folder
              </li>
              <li
                className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
                onClick={handleClickInputFile}
              >
                File Upload
              </li>
              <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                Folder Upload
              </li>
            </ul>
          </ContextMenu>
        )}

        {/* <ContextMenu y={points.y} x={points.x}>
          <ul className="rounded-md bg-white py-4">
            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              onClick={() => openModalCreateUpdateFolder()}
            >
              New Folder
            </li>
            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              onClick={handleClickInputFile}
            >
              File Upload
            </li>
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Folder Upload
            </li>
          </ul>
        </ContextMenu> */}
      </div>
    </>
  )
}
export default MyFilesAndFolders

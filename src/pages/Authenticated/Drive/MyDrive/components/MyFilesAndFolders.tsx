import { useState } from "react"
import { getSvg } from "../../../../../utils/getSvg"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import ContextMenu from "./ContextMenu"
/* import FolderContainer from "./FolderContainer" */
import FileContainer from "./FileContainer"

interface InitialState {
  x: number
  y: number
  fileSelected: string
  folderSelected: string
  dropAreaSelected: "newFileOrFolder" | "folder" | "file" | ""
}

const MyFilesAndFolders = () => {
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
      <div className="h-[6%] py-4 pl-1 pr-7 text-sm font-semibold text-[#5f6368]">
        Suggested
      </div>
      <div
        /* bg-yellow-500 */
        className={`bg-white ${
          "81% of storage used" === "81% of storage used"
            ? `min-h-[89%]`
            : `min-h-[94%]`
        } `}
      >
        <div
          /* bg-yellow-500  min-h-screen */
          className="bg-yellow-500"
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
          {/* <DropArea refInputFile={refInputFile} /> */}
          <h4 className="py-4 pl-1 text-[14px] text-[#1f1f1f] font-semibold">
            Folders
          </h4>
          {/* <FolderContainer
              initialState={initialState}
              show={show}
              setShow={setShow}
              points={points}
              setPoints={setPoints}
            /> */}
          <h4 className="py-4 pl-1 text-[14px] text-[#1f1f1f] font-semibold">
            Files
          </h4>
          <FileContainer
            initialState={initialState}
            points={points}
            setPoints={setPoints}
          />
        </div>
        {points.dropAreaSelected === "newFileOrFolder" && (
          <ContextMenu y={points.y} x={points.x}>
            <ul className="rounded-md bg-white py-4">
              <li
                className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
                /* onClick={() => openModalCreateUpdateFolder()} */
              >
                New Folder
              </li>
              <li
                className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
                /* onClick={handleClickInputFile} */
              >
                File Upload
              </li>
              {/* <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                    Folder Upload
                                </li> */}
            </ul>
          </ContextMenu>
        )}
      </div>
    </>
  )
}
export default MyFilesAndFolders

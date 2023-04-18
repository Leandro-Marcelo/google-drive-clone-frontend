import Dropdown from "../../../../../components/Dropdown"
import { setFolderToUpdateReducer } from "../../../../../store/folder/folderSlice"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import {
  openModalCreateUpdateFolder,
  openModalUpdateFile,
} from "../../../../../utils/openModal"
import ContextMenu from "./ContextMenu"

const CtxMenus = () => {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  return (
    <>
      {/* FILES */}

      {storeFolder.isShowCtxMenu.file && (
        <ContextMenu
          y={storeFolder.positionCtxMenu.y}
          x={storeFolder.positionCtxMenu.x}
        >
          <ul className="rounded-md bg-white py-4">
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Preview {storeFolder.fileToUpdate?.fileId}
            </li>
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Get Link
            </li>
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Move to
            </li>
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Add to Starred or Tag
            </li>

            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              onClick={() => {
                /* dispatch(
                  setFileToUpdateReducer({
                    fileId: file.id,
                    data: {
                      originalName: file.originalName,
                      folderId: file.folderId,
                    },
                  })
                ) */
                openModalUpdateFile()
                /* setPoints({
                  ...initialState,
                  fileSelected: "",
                }) */
              }}
            >
              Rename
            </li>
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Download
            </li>
            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              onClick={() => {
                console.log(`handleRemove(file.id)`)
              }}
            >
              Remove
            </li>
          </ul>
        </ContextMenu>
      )}

      {/* FOLDER */}

      {storeFolder.isShowCtxMenu.folder && (
        <ContextMenu
          y={storeFolder.positionCtxMenu.y}
          x={storeFolder.positionCtxMenu.x}
        >
          <ul className="cardShadow rounded-md bg-white py-4">
            {/* <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Get Link {folder.id}
                                    </li>
                                    <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Move to
                                    </li>
                                    <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Add to Starred or Tag
                                    </li> */}

            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              onClick={() => {
                if (!storeFolder.folderToUpdate) return

                dispatch(
                  setFolderToUpdateReducer({
                    folderId: storeFolder.folderToUpdate.folderId,
                    data: {
                      originalName:
                        storeFolder.folderToUpdate.data.originalName,
                      parentFolderId:
                        storeFolder.folderToUpdate.data.parentFolderId,
                      softDeleted: storeFolder.folderToUpdate.data.softDeleted,
                    },
                  })
                )
                openModalCreateUpdateFolder()
              }}
            >
              Rename
            </li>
            {/* <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Change Color
                                    </li>
                                    <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Download
                                    </li> */}
            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              // onClick={() => handleDelete(folder.id)}
            >
              Remove
            </li>
          </ul>
        </ContextMenu>
      )}

      {/* Outside of files and folder */}

      {storeFolder.isShowCtxMenu.outside && (
        <ContextMenu
          y={storeFolder.positionCtxMenu.y}
          x={storeFolder.positionCtxMenu.x}
        >
          {/*  <ul className="rounded-md bg-white py-4">
            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              onClick={() => openModalCreateUpdateFolder()}
            >
              New Folder
            </li>
            <li
              className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
              // onClick={handleClickInputFile}
            >
              File Upload
            </li>
            <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
              Folder Upload
            </li>
          </ul> */}
          <Dropdown menuIsOpen={storeFolder.isShowCtxMenu.outside} />
        </ContextMenu>
      )}
    </>
  )
}
export default CtxMenus

import Dropdown from "../../../../../components/Dropdown"
import { softDeleteManyFoldersAPI } from "../../../../../services/folders"
import {
  setFolderToUpdateReducer,
  updateFilesAndFoldersToSoftDeletedFilesReducer,
} from "../../../../../store/folder/folderSlice"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import {
  openModalCreateFolder,
  openModalUpdateFile,
  openModalUpdateFolder,
} from "../../../../../utils/openModal"
import ContextMenu from "./ContextMenu"

const CtxMenus = () => {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  const handleDeleteFolder = async () => {
    if (!storeFolder.folderToUpdate?.folderId) return

    const foldersIds: string[] = [storeFolder.folderToUpdate.folderId]
    const folderResponse = await softDeleteManyFoldersAPI(foldersIds)
    dispatch(
      updateFilesAndFoldersToSoftDeletedFilesReducer({
        files: [],
        folders: folderResponse.data,
      })
    )
  }

  return (
    <>
      {/* FILES */}

      {storeFolder.isShowCtxMenu.file && (
        <ContextMenu
          y={storeFolder.positionCtxMenu.y}
          x={storeFolder.positionCtxMenu.x}
        >
          <ul
            className="rounded-md bg-white py-4"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
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
          <ul
            className="cardShadow rounded-md bg-white py-4"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
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
                openModalUpdateFolder()
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
              onClick={(e) => handleDeleteFolder()}
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

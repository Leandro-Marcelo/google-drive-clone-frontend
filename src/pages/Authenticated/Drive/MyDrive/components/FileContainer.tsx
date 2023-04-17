import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
/* import { setFileToUpdate } from "../store/folder/folderSlice"
import { deleteManyThunk } from "../store/folder/folderThunk" */
import fileNameIcon from "../../../../../assets/imgs/photoImg.png"
import { File } from "../../../../../utils/typesAndInterfaces"
import { getSvg } from "../../../../../utils/getSvg"
import Tooltip from "../../../../../components/Tooltip"
import {
  checkSpecificFileOrFolderIdReducer,
  handleCheckFileOrFolderIdReducer,
  resetIsShowCtxMenuReducer,
  setFileToUpdateReducer,
  updateIsShowCtxMenuReducer,
  updatePositionCtxMenuReducer,
} from "../../../../../store/folder/folderSlice"
import {
  setIsDraggingFileReducer,
  setMenuOfNewIsOpenReducer,
} from "../../../../../store/style/styleSlice"
/* import { openModalUpdateFile } from "../utils/openModal" */

interface Props {}

export default function FileContainer({}: Props) {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((state) => state.folder)

  const handleShowCtxMenu = (
    clickedFile: File,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(
      setFileToUpdateReducer({
        fileId: clickedFile.id,
        data: {
          originalName: clickedFile.originalName,
          folderId: clickedFile.folderId,
        },
      })
    )
    dispatch(
      updatePositionCtxMenuReducer({
        x: e.pageX,
        y: e.pageY,
      })
    )
    dispatch(
      updateIsShowCtxMenuReducer({
        type: "file",
        isShow: true,
      })
    )
  }

  return (
    <div
      /* Le damos z-10 y relative para que cuando el usuario este drageando un archivo, poner el drop-area a z-20 y se ponga por encima de todo */
      className=" grid  w-full   grid-cols-2 justify-between   gap-2  xl:grid-cols-3 2xl:grid-cols-6 z-10 relative"
      onDragOver={(e) => {
        dispatch(setIsDraggingFileReducer(true))
      }}
    >
      {storeFolder.files.length >= 0 &&
        storeFolder.files.map((file) => (
          <div
            key={file.id}
            /* rounded-md border-[1px] border-solid border-[#DADCE0] */
            className={`rounded-xl ${
              storeFolder.checkedFilesAndFoldersIds.has(file.id)
                ? `bg-[#C2E7FF]`
                : `bg-[#F2F6FC] hover:bg-[#f5f5f5]`
            }  group/showCheckbox`}
            onClick={(e) => {
              e.stopPropagation()
              dispatch(
                checkSpecificFileOrFolderIdReducer({
                  id: file.id,
                  type: "file",
                })
              )
              // * CLEAN UP
              dispatch(resetIsShowCtxMenuReducer())
              dispatch(setMenuOfNewIsOpenReducer(false))
            }}
          >
            {/* bg-blue-500 */}
            <div
              /* px-3 pb-3 py-1  */
              className="px-[10px] relative cursor-default"
              // onClick={() => setIsClicked(!isClicked)}
              onContextMenu={(e) => {
                // ESTO ES PARA QUE NO SE ACTIVE EL DROP AREA CONTEXT MENU
                e.stopPropagation()
                // ESTO ES PARA QUE NO SE HABRA EL CONTEXT MENU POR DEFECTO DE LOS NAVEGADORES
                e.preventDefault()

                handleShowCtxMenu(file, e)

                // * CLEAN UP
                dispatch(setMenuOfNewIsOpenReducer(false))
              }}
            >
              <div
                /* mb-1 w-full py-1 */
                className={` text-ellipsis whitespace-nowrap   flex items-center w-full py-[6px]`}
              >
                <div className="flex items-center gap-4 w-[90%]">
                  {storeFolder.checkedFilesAndFoldersIds.has(file.id) ? (
                    <div
                      className="p-2 hover:bg-[#3c404314] rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        dispatch(
                          handleCheckFileOrFolderIdReducer({
                            id: file.id,
                            type: "file",
                          })
                        )
                        // * CLEAN UP
                        dispatch(resetIsShowCtxMenuReducer())
                        dispatch(setMenuOfNewIsOpenReducer(false))
                      }}
                    >
                      {getSvg({
                        type: `checkboxChecked`,
                        width: "20px",
                        height: "20px",
                      })}
                    </div>
                  ) : (
                    <div
                      className="hover:bg-[#3c404314]   p-2 rounded-full cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        dispatch(
                          handleCheckFileOrFolderIdReducer({
                            id: file.id,
                            type: "file",
                          })
                        )
                        // * CLEAN UP
                        dispatch(resetIsShowCtxMenuReducer())
                        dispatch(setMenuOfNewIsOpenReducer(false))
                      }}
                    >
                      <div className="hidden group-hover/showCheckbox:flex">
                        {getSvg({
                          type: `${
                            storeFolder.checkedFilesAndFoldersIds.has(file.id)
                              ? "checkboxChecked"
                              : "checkboxFileFolder"
                          }`,
                          width: "20px",
                          height: "20px",
                        })}
                      </div>
                      <div className="group-hover/showCheckbox:hidden h-[20px] w-[20px]  flex items-center justify-center">
                        <img
                          src={fileNameIcon}
                          alt=""
                          className="h-[16px] w-[16px]"
                        />{" "}
                      </div>
                    </div>
                  )}

                  <div
                    className={`group/tooltip overflow-hidden text-ellipsis whitespace-nowrap  flex-1 pr-2`}
                  >
                    <span className=" text-[13px]">{file.originalName}</span>
                    <div
                      className={`absolute  rounded text-white hidden transition-all duration-300 group-hover/tooltip:block top-8 left-6`}
                    >
                      <div className="flex max-w-xs flex-col items-center">
                        <div
                          className={`rounded bg-[#5f6368] py-[6px] px-2 text-[12px] text-center shadow-lg`}
                        >
                          {file.originalName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[10%]">
                  <Tooltip
                    text="More actions"
                    direction="top-8 -left-6"
                    textNoWrap={true}
                    hoverPadding="p-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleShowCtxMenu(file, e)
                      dispatch(
                        checkSpecificFileOrFolderIdReducer({
                          id: file.id,
                          type: "file",
                        })
                      )
                      // * CLEAN UP
                      dispatch(setMenuOfNewIsOpenReducer(false))
                    }}
                  >
                    <div>
                      {getSvg({
                        type: "moreOptions",
                        width: "18px",
                        height: "18px",
                      })}
                    </div>
                  </Tooltip>
                </div>
              </div>
              <img
                src={file.imgSrc}
                alt="leandro profile picture"
                className="h-[200px] w-full rounded-md object-cover "
              />
            </div>
          </div>
        ))}
    </div>
  )
}

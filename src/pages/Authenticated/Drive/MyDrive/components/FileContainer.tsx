import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
/* import { setFileToUpdate } from "../store/folder/folderSlice"
import { deleteManyThunk } from "../store/folder/folderThunk" */
import fileNameIcon from "../../../../../assets/imgs/photoImg.png"
import { File } from "../../../../../utils/typesAndInterfaces"
import { getSvg } from "../../../../../utils/getSvg"
import Tooltip from "../../../../../components/Tooltip"
import {
  setFileToUpdateReducer,
  updateIsShowCtxMenuReducer,
  updatePositionCtxMenuReducer,
} from "../../../../../store/folder/folderSlice"
/* import { openModalUpdateFile } from "../utils/openModal" */

interface Props {}

export default function FileContainer({}: Props) {
  const dispatch = useAppDispatch()
  const { files } = useAppSelector((state) => state.folder)

  return (
    /* px-2 */
    <div className=" grid  w-full   grid-cols-2 justify-between   gap-2  xl:grid-cols-3 2xl:grid-cols-6 ">
      {files &&
        files.length >= 0 &&
        files.map((file) => (
          <div
            key={file.id}
            /* rounded-md border-[1px] border-solid border-[#DADCE0] */
            className="rounded-xl bg-[#F2F6FC] hover:bg-[#f5f5f5] "
          >
            {/* bg-blue-500 */}
            <div
              className=" px-3 pb-3 py-1 relative cursor-default"
              // onClick={() => setIsClicked(!isClicked)}
              onContextMenu={(e) => {
                // ESTO ES PARA QUE NO SE ACTIVE EL DROP AREA CONTEXT MENU
                e.stopPropagation()
                // ESTO ES PARA QUE NO SE HABRA EL CONTEXT MENU POR DEFECTO DE LOS NAVEGADORES
                e.preventDefault()

                dispatch(
                  setFileToUpdateReducer({
                    fileId: file.id,
                    data: {
                      originalName: file.originalName,
                      folderId: file.folderId,
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
              }}
            >
              <div
                className={` text-ellipsis whitespace-nowrap   flex items-center mb-1 w-full py-1`}
              >
                <div className="flex items-center gap-4 pl-3   w-[90%]">
                  <img src={fileNameIcon} alt="" className="h-4 w-4" />{" "}
                  <div
                    className={`group/tooltip overflow-hidden text-ellipsis whitespace-nowrap  flex-1`}
                  >
                    <span className=" text-[13px] ">{file.originalName}</span>
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

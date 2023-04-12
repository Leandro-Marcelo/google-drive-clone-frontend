import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
import { openModalCreateUpdateFolder } from "../../../../../utils/openModal"
import { getSvg } from "../../../../../utils/getSvg"
import ContextMenu from "./ContextMenu"
import {
  updateChildFoldersReducer,
  setFolderToUpdate,
} from "../../../../../store/folder/folderSlice"
import Tooltip from "../../../../../components/Tooltip"

interface Props {
  /* setShow: React.Dispatch<React.SetStateAction<boolean>>; */
  initialState: {
    x: number
    y: number
    fileSelected: string
    folderSelected: string
  }
  points: {
    x: number
    y: number
    fileSelected: string
    folderSelected: string
  }
  setPoints: any
}

export default function FolderContainer({
  initialState,
  points,
  setPoints,
}: Props) {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  /* const addFolderIdToInFolderState = (id: number, originalName: string) => */

  // PARA QUE SE PONGA AZUL
  // ! QUIZAS NO DEBERÍAMOS UTILIZAR UN ESTADO PORQUE RENDERIZA TODA LA APP
  /* const [isClicked, setIsClicked] = useState(false);

    const normalFolder =
        "flex items-center rounded-md border-1 border-solid border-[#ccc]   px-5 relative hover:bg-[#f5f5f5]  font-semibold";

    const clickedFolder =
        "flex items-center rounded-md border-1 border-solid border-[#ccc] bg-[#E8F0FE]  px-5 relative text-[#185ABC] font-semibold"; */

  /* const handleDelete = (folderId: number) => {
    dispatch(deleteFolderThunk(folderId))
  } */

  return (
    <div className="grid w-full  grid-cols-2   justify-between gap-2    xl:grid-cols-3 2xl:grid-cols-6">
      {storeFolder.folders.length >= 0 &&
        storeFolder.folders.map((folder) => (
          <div
            key={folder.id}
            /* border-[1px] border-solid border-[#DADCE0] */
            className="rounded-xl bg-[#F2F6FC] hover:bg-[#f5f5f5] "
          >
            <div
              className={"px-3 py-[6px] relative cursor-default "}
              onContextMenu={(e) => {
                // ESTO ES PARA QUE NO SE HABRA EL CONTEXT MENU POR DEFECTO DE LOS NAVEGADORES
                e.preventDefault()
                // ESTO ES PARA QUE NO SE ACTIVE EL DROP AREA CONTEXT MENU
                e.stopPropagation()
                setPoints({
                  ...initialState,
                  x: e.pageX,
                  y: e.pageY,
                  folderSelected: folder.id,
                })
              }}
              /* px-3 pb-3 py-1 relative cursor-default */
              /* z-100 relative flex items-center */
            >
              <div
                className={` text-ellipsis whitespace-nowrap   flex items-center mb-1 w-full py-1 `}
              >
                {/* //! ACA DEBERÍAMOS QUITARLE LA EXNTESIÓN PORQUE HAY GENTE QUE SUBE IMAGENES CON . */}
                {/* flex-1 */}
                <div className="flex items-center gap-4 pl-3   w-[90%]">
                  {getSvg({ type: "folder", width: "20px", height: "20px" })}
                  {/* flex-1 */}
                  <div
                    className={`group/tooltip overflow-hidden text-ellipsis whitespace-nowrap  flex-1`}
                    onDoubleClick={(e) => {
                      dispatch(
                        updateChildFoldersReducer({
                          id: folder.id,
                          originalName: folder.originalName,
                        })
                      )
                    }}
                  >
                    {/* flex-1 */}
                    <span className=" text-[13px] ">{folder.originalName}</span>
                    <div
                      className={`absolute  rounded text-white hidden transition-all duration-300 group-hover/tooltip:block top-8 left-6`}
                    >
                      <div className="flex max-w-xs flex-col items-center">
                        <div
                          className={`rounded bg-[#5f6368] py-[6px] px-2 text-[12px] text-center shadow-lg`}
                        >
                          {folder.originalName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-[90%] pl-3">
                <p
                  className={`border-1 relative flex items-center rounded-md border-solid   border-[#ccc]    `}
                >
                  {getSvg({ type: "folder", width: "20px", height: "20px" })}
                  <span
                    className="overflow-hidden text-ellipsis whitespace-nowrap p-4 text-[13px] hover:cursor-default"
                    title={folder.originalName}
                  >
                    {folder.originalName}
                  </span>
                </p>
              </div> */}
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
            </div>
            {points.folderSelected === folder.id && (
              <ContextMenu y={points.y} x={points.x}>
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
                      dispatch(
                        setFolderToUpdate({
                          folderId: folder.id,
                          data: {
                            originalName: folder.originalName,
                            parentFolderId: folder.parentFolderId,
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
          </div>
        ))}
    </div>
  )
}

/* 


<Folder
                        key={folder.id}
                        id={folder.id}
                        originalName={folder.originalName}
                    />
*/

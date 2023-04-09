import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
/* import { setFileToUpdate } from "../store/folder/folderSlice"
import { deleteManyThunk } from "../store/folder/folderThunk" */
import ContextMenu from "./ContextMenu"
import fileNameIcon from "../../../../../assets/imgs/photoImg.png"
import { File } from "../../../../../utils/typesAndInterfaces"
import { getSvg } from "../../../../../utils/getSvg"
import Tooltip from "../../../../../components/Tooltip"
import { setFileToUpdateReducer } from "../../../../../store/folder/folderSlice"
import { openModalUpdateFile } from "../../../../../utils/openModal"
import { useState } from "react"
/* import { openModalUpdateFile } from "../utils/openModal" */

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

export default function FileContainer({
  initialState,
  points,
  setPoints,
}: Props) {
  const dispatch = useAppDispatch()
  const { files } = useAppSelector((state) => state.folder)

  /* const files: File[] = [
    {
      id: "1",
      fileName: "file1",
      folderId: null,
      originalName: "file1",
      userId: "1",
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      fileName: "file1",
      folderId: null,
      originalName: "file1",
      userId: "1",
      imgSrc:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      fileName: "file1",
      folderId: null,
      originalName: "file1",
      userId: "1",
      imgSrc:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4",
      fileName: "file1",
      folderId: null,
      originalName: "file1",
      userId: "1",
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5",
      fileName: "file1",
      folderId: null,
      originalName: "file1",
      userId: "1",
      imgSrc:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "7",
      fileName: "file1",
      folderId: null,
      originalName: "file1",
      userId: "1",
      imgSrc:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ] */

  const normalFile =
    "overflow-hidden text-ellipsis whitespace-nowrap rounded-b-md border-b-1 border-l-1 border-r-1 border-solid border-[#ccc] p-4 group-hover:bg-[#f5f5f5] flex gap-2 items-center"

  /* const clickedFile =
        "overflow-hidden text-ellipsis whitespace-nowrap rounded-b-md border-b-1 border-l-1 border-r-1 border-solid border-[#ccc] p-4 group-hover:bg-[#f5f5f5] bg-[#E8F0FE] text-[#185ABC]"; */

  // ! QUIZAS NO DEBERÍAMOS UTILIZAR UN ESTADO PORQUE RENDERIZA TODA LA APP
  /* const [isClicked, setIsClicked] = useState(false); */

  /* const handleRemove = (fileId: string) => {
    dispatch(deleteManyThunk([fileId]))
  } */

  return (
    /* px-2 */
    <div className=" grid  w-full   grid-cols-2 justify-between   gap-2  md:grid-cols-3 2xl:grid-cols-6 ">
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
              className=" px-3 pb-3 py-1 relative cursor-default " /* onClick={() => setIsClicked(!isClicked)} */
              onContextMenu={(e) => {
                // ESTO ES PARA QUE NO SE ACTIVE EL DROP AREA CONTEXT MENU
                e.stopPropagation()
                // ESTO ES PARA QUE NO SE HABRA EL CONTEXT MENU POR DEFECTO DE LOS NAVEGADORES
                e.preventDefault()
                setPoints({
                  ...initialState,
                  x: e.pageX,
                  y: e.pageY,
                  fileSelected: file.id,
                  dropAreaSelected: "",
                })
              }}
            >
              {/* p-4 */}
              {/* overflow-hidden text-ellipsis whitespace-nowrap rounded-b-md border-b-1 border-l-1 border-r-1 border-solid border-[#ccc]  group-hover:bg-[#f5f5f5] flex gap-2 items-center bg-red-500 */}
              {/* overflow-hidden */}
              {/* group-hover:bg-[#f5f5f5]  */}
              <div
                className={` text-ellipsis whitespace-nowrap   flex items-center mb-1 w-full py-1`}
              >
                {/* //! ACA DEBERÍAMOS QUITARLE LA EXNTESIÓN PORQUE HAY GENTE QUE SUBE IMAGENES CON . */}
                {/* flex-1 */}
                <div className="flex items-center gap-4 pl-3   w-[90%]">
                  <img src={fileNameIcon} alt="" className="h-4 w-4" />{" "}
                  {/* flex-1 */}
                  <div
                    className={`group/tooltip overflow-hidden text-ellipsis whitespace-nowrap  flex-1`}
                  >
                    {/* flex-1 */}
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
            {points.fileSelected === file.id && (
              <ContextMenu y={points.y} x={points.x}>
                <ul className="rounded-md bg-white py-4">
                  {/* <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Preview {file.id}
                                    </li>
                                    <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Get Link
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
                        setFileToUpdateReducer({
                          fileId: file.id,
                          originalName: file.originalName,
                        })
                      )
                      openModalUpdateFile()
                      setPoints({
                        ...initialState,
                        fileSelected: "",
                      })
                    }}
                  >
                    Rename
                  </li>
                  {/* <li className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]">
                                        Download
                                    </li> */}
                  <li
                    className="py-2 px-4 hover:cursor-pointer hover:bg-[#f5f5f5]"
                    /* onClick={() => handleRemove(file.fileName)} */
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

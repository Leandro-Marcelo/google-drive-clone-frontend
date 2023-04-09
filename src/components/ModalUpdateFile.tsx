import { useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../store/hook"
import styles from "../styles/Modal.module.css"
import { useForm } from "../utils/hooks/useForm"
import {
  setFileToUpdateReducer,
  updateFileByIdReducer,
} from "../store/folder/folderSlice"
import { getSvg } from "../utils/getSvg"
import { updateFileByIdAPI } from "../services/files"

interface Props {
  root: any
}

export default function ModalUpdateFile({ root }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const { fileToUpdate } = useAppSelector((state) => state.folder)

  const ref = useRef<HTMLDivElement>(null)

  const { originalName, handleChange, resetForm } = useForm({
    originalName: fileToUpdate ? fileToUpdate.data.originalName : "",
  })

  function cb(e: Event) {
    root.unmount()
    document.querySelector("#modalCreateFolder")?.remove()
    document.removeEventListener("animationend", cb)
  }

  function handleClick() {
    ref.current && ref.current.classList.add(styles.fadeOut)
    ref.current?.addEventListener("animationend", cb, { once: true })
  }

  function cancel() {
    handleClick()
    dispatch(setFileToUpdateReducer(null))
  }

  const updateFileByIdFetch = async () => {
    try {
      // TODO: add validation
      if (!fileToUpdate) return
      const response = await updateFileByIdAPI({
        fileId: fileToUpdate.fileId,
        data: {
          originalName: originalName,
          folderId: fileToUpdate.data.folderId,
        },
      })
      dispatch(updateFileByIdReducer(response.data))
    } catch (err) {}
  }

  const handleUpdateFileById = async () => {
    if (!fileToUpdate) return

    await updateFileByIdFetch()
    handleClick()
    resetForm()
  }

  useEffect(() => {
    // Enfocar el input cuando el componente se monta
    if (inputRef.current) {
      inputRef.current.focus()
      // Seleccionar el contenido del input, excluyendo la extensión
      const fileNameWithoutExtension = inputRef.current.value
        .split(".")
        .slice(0, -1)
        .join(".")
      inputRef.current.setSelectionRange(0, fileNameWithoutExtension.length)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`modalContainer fixed top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.35)] text-black`}
    >
      <div
        className={`${styles.modalView} flex h-[201px] w-[400px] flex-col gap-2 overflow-hidden rounded-[10px] bg-white p-6 `}
        style={{
          boxShadow:
            "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        }}
      >
        <div className="flex justify-between mb-2">
          <div className="mb-1 text-[25px]  text-[#2A2A2A]">Rename</div>
          <div className="h-max">
            <div
              className={`p-2 rounded-full cursor-pointer relative group text-[#626262] hover:text-[#000]`}
              onClick={cancel}
            >
              <div className="">
                {getSvg({
                  type: "close",
                  width: "10px",
                  height: "10px",
                })}
              </div>
              <div
                className={`absolute rounded text-white hidden transition-all duration-300 group-hover:block top-5 -left-2 z-20`}
              >
                <div className="flex max-w-xs flex-col items-center">
                  <div
                    className={`rounded bg-[#424547] py-1 px-3 text-[12px] text-center shadow-lg font-semibold`}
                  >
                    {"Close"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          name="originalName"
          className="border-[1px] focus:border-1 mb-4 rounded-md border-solid border-[#747775]  px-3 py-2 text-sm  focus:outline-[#1967D2]"
          /* defaultValue={`Untitled folder`} */
          value={originalName}
          onChange={handleChange}
          autoFocus={true}
          ref={inputRef}
        />
        <div className="ml-auto">
          <div className="pr-3">
            <button
              /* f6f9fd */
              className="closeBtn  text-[15px] text-[#1a73e8] cursor-pointer rounded-full bg-none px-[15px] py-[2px] font-semibold  hover:bg-[#f6f9fd] hover:text-[#185ABC] mr-4 outline-[#ccc] hover:outline outline-1"
              onClick={cancel}
            >
              Cancel
            </button>
            <button
              /* 1967d2 */
              /* f6f9fd */
              className="closeBtn cursor-pointer bg-none px-5 py-1 font-medium text-white  bg-[#1967d2] rounded-full text-[15px]"
              onClick={handleUpdateFileById}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

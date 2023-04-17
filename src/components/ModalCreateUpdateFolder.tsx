import { useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../store/hook"
import styles from "../styles/Modal.module.css"
import { useForm } from "../utils/hooks/useForm"
import {
  createFolderReducer,
  setFolderToUpdateReducer,
  updateFolderByIdReducer,
} from "../store/folder/folderSlice"
import { createFolderAPI, updateFolderByIdAPI } from "../services/folders"
import { CreateFolderDBInput } from "../utils/typesAndInterfaces"

interface Props {
  root: any
}

export default function ModalCreateFolder({ root }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const { childFolders, folderToUpdate } = useAppSelector(
    (state) => state.folder
  )

  const ref = useRef<HTMLDivElement>(null)

  const { originalName, handleChange, resetForm } = useForm({
    originalName: folderToUpdate
      ? folderToUpdate.data.originalName
      : "Untitled folder",
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
    dispatch(setFolderToUpdateReducer(null))
  }

  const updateFolderByIdFetch = async () => {
    try {
      if (!folderToUpdate) return

      const response = await updateFolderByIdAPI({
        folderId: folderToUpdate.folderId,
        data: {
          originalName: originalName,
          parentFolderId: folderToUpdate.data.parentFolderId,
        },
      })
      dispatch(updateFolderByIdReducer(response.data))
    } catch (err) {}
  }

  const createFolderFetch = async (
    createFolderFetchParams: CreateFolderDBInput
  ) => {
    try {
      const response = await createFolderAPI({
        originalName: createFolderFetchParams.originalName,
        parentFolderId: createFolderFetchParams.parentFolderId,
      })
      dispatch(createFolderReducer(response.data))
    } catch (err) {}
  }

  const handleCreateUpdateFolder = () => {
    if (folderToUpdate && folderToUpdate.folderId) {
      updateFolderByIdFetch()
    } else {
      // Este If es para verificar si el folder que creo el usuario es hijo de otro folder para guardarlo así en la base de datos
      if (childFolders && childFolders.length >= 1) {
        createFolderFetch({
          originalName,
          parentFolderId: childFolders[childFolders.length - 1].id,
        })
      } else {
        createFolderFetch({ originalName, parentFolderId: null })
      }
    }

    handleClick()
    // aunque puede que no sea necesario ya que vamos a destruir el componente pero bueno xd
    resetForm()
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`modalContainer fixed top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.35)] text-black z-20`}
    >
      <div
        className={`${styles.modalView} flex h-[200px] w-[343px] flex-col gap-2 overflow-hidden rounded-[10px] bg-white p-5`}
        style={{
          boxShadow:
            "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        }}
      >
        <div className="mb-2 text-[24px]  text-[#1F1F1F] pl-1">
          {folderToUpdate && folderToUpdate.folderId ? "Rename" : "New folder"}
        </div>
        <input
          type="text"
          name="originalName"
          className="border-[1px] focus:border-1 mb-4 rounded-[4px] border-solid border-[#747775]  px-4 py-[10px] text-sm  focus:outline-[#1967D2] "
          value={originalName}
          onChange={handleChange}
          ref={inputRef}
        />
        <div className="ml-auto">
          <button
            className="closeBtn hover:bg-[rgba(0,0,0,0.1) ] cursor-pointer rounded-full bg-none px-[15px] py-[10px] font-semibold text-[#0b57d0] hover:bg-[#f6f9fd] hover:text-[#185ABC] text-[15px]"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="closeBtn cursor-pointer rounded-full bg-none px-[15px] py-[10px] font-medium text-[#0b57d0] hover:bg-[#f6f9fd] text-[15px]"
            onClick={handleCreateUpdateFolder}
          >
            {folderToUpdate && folderToUpdate.folderId ? "Rename" : "Create"}
          </button>
        </div>
      </div>
    </div>
  )
}

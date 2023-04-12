import { ChangeEvent, DragEvent, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"
// import { uploadMany } from "../redux/states/folder"
import { getSvg } from "../../../../../utils/getSvg"
import cloudUploading from "../../../../../assets/cloudUploading.gif"
import {
  hideCloudUploadingReducer,
  showCloudUploadingReducer,
} from "../../../../../store/style/styleSlice"
import { uploadManyFilesAPI } from "../../../../../services/files"
import { uploadManyFilesReducer } from "../../../../../store/folder/folderSlice"

export default function DropArea({
  children,
  refInputFile,
}: {
  children: React.ReactNode
  refInputFile: any
}) {
  const anotherRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  /* DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>; */
  const refDropArea = useRef<HTMLDivElement>(null)
  const refCloudUploading = useRef<HTMLDivElement>(null)
  const refDriveEmpty = useRef<HTMLDivElement>(null)
  const refDragText = useRef<HTMLDivElement>(null)

  /* export const uploadMany = createAsyncThunk(
    "folder/uploadMany",
    async ({ formData, folderId }: UploadManyParams, thunkApi) => {
        try {
            const res = await axios.post(
                `${API_REST}/api/files/uploadMany/folder/${folderId}`,
                formData,
                {
                    withCredentials: true,
                }
            );
            return res.data;
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
); */

  const uploadManyFilesFetch = async (formData: FormData) => {
    try {
      const res = await uploadManyFilesAPI({ formData })
      dispatch(uploadManyFilesReducer(res.data))
    } catch (err: any) {}
  }

  const showFiles = (htmlFiles: FileList) => {
    const formData = new FormData()

    if (htmlFiles.length === 1) {
      formData.append("files", htmlFiles[0])
    } else {
      for (const htmlFile of htmlFiles) {
        formData.append("files", htmlFile)
      }
    }

    if (storeFolder.childFolders.length !== 0) {
      formData.append(
        "folderId",
        storeFolder.childFolders[storeFolder.childFolders.length - 1].id
      )
    }

    uploadManyFilesFetch(formData)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(showCloudUploadingReducer())
    refDropArea.current && refDropArea.current.classList.add("active")

    /* refCloudUploading.current &&
      refCloudUploading.current.classList.add("active") */

    /* files &&
      files.length === 0 &&
      refDriveEmpty.current &&
      refDriveEmpty.current.classList.add("active")

    if (refDragText.current) {
      refDragText.current.textContent = "Drop files to upload them to My Drive"
    } */
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(hideCloudUploadingReducer())
    refDropArea.current && refDropArea.current.classList.remove("active")
    /* refCloudUploading.current &&
      refCloudUploading.current.classList.remove("active") */

    /* files &&
      files.length === 0 &&
      refDriveEmpty.current &&
      refDriveEmpty.current.classList.remove("active") */

    /*  if (refDragText.current) {
      if (files && files.length === 0) {
        refDragText.current.textContent = "A place for all of your files"
      } else {
        refDragText.current.textContent = ""
      }
    } */
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    refDropArea.current && refDropArea.current.classList.remove("active")
    /*  refCloudUploading.current &&
      refCloudUploading.current.classList.remove("active") */
    /* if (refDragText.current) refDragText.current.textContent = "" */

    showFiles(e.dataTransfer.files)
  }

  const handleChangeInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files !== null && e.target.files.length >= 1) {
      showFiles(e.target.files)
    }
  }

  return (
    <div className="relative bg-yellow-500">
      {/* height: 500px;
   width: 700px;
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: absolute; */}
      {/* items-center justify-center */}
      <div
        className="absolute flex min-h-[100vh] w-full flex-col drop-area"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        ref={refDropArea}
      >
        {/* <h2 className="text-[30px] font-medium text-black" ref={refDragText}>
          {files && files.length === 0 && "A place for all of your files"}
        </h2>

        <div ref={refDriveEmpty} className="driveEmpty">
          {files && files.length === 0 && getSvg({ type: "driveEmpty" })}
        </div> */}

        {/* <div ref={refCloudUploading} className="cloudUploading hidden">
          <img src={cloudUploading} width={150} />
        </div> */}

        {/* <div
          className="cloudUploading hidden relative "
          ref={refCloudUploading}
        >
          <h1 className="absolute  bg-blue-500 w-full folder-svg min-h-screen bottom-8">
            Hellow
          </h1>
        </div> */}

        {/* bottom-8 */}

        <input
          type="file"
          id="inputFile"
          hidden
          multiple
          onChange={handleChangeInputFile}
          ref={refInputFile}
        />
        {children}
      </div>
      {/* <div
        className=""
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        ref={refDropArea}
      ></div> */}
    </div>
  )
}

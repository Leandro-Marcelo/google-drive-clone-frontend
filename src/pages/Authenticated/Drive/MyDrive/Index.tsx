import LeftSideBar from "./components/LeftSideBar"
import SearchTop from "./components/SearchTop"
import OthersApps from "./components/OthersApps"
import FileActions from "./components/FileActions"
import MessageAlertStorage from "./components/MessageAlertStorage"
import MyFilesAndFolders from "./components/MyFilesAndFolders"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../store/hook"
import { getRootFilesAndFoldersReducer } from "../../../../store/folder/folderSlice"
import { getRootFilesAPI } from "../../../../services/files"
import {
  getFolderContentsAPI,
  getRootFoldersAPI,
} from "../../../../services/folders"

const Index = () => {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  useEffect(() => {
    //console.log("childFolders", childFolders);

    const getRootFilesAndFolderFetch = async () => {
      try {
        const filesResponse = await getRootFilesAPI()
        const folderResponse = await getRootFoldersAPI()
        dispatch(
          getRootFilesAndFoldersReducer({
            files: filesResponse.data,
            folders: folderResponse.data,
          })
        )
      } catch (err) {
        console.log(err)
      }
    }

    const getFolderContentsFetch = async () => {
      try {
        const response = await getFolderContentsAPI({
          folderId:
            storeFolder.childFolders[storeFolder.childFolders.length - 1].id,
        })
        dispatch(
          getRootFilesAndFoldersReducer({
            files: response.data.files,
            folders: response.data.childFolders,
          })
        )
      } catch (err) {}
    }

    if (storeFolder.childFolders && storeFolder.childFolders.length >= 1) {
      /* dispatch(
        getFolderByIdThunk(
          storeFolder.childFolders[storeFolder.childFolders.length - 1].id
        )
      ) */
      getFolderContentsFetch()
    } else {
      getRootFilesAndFolderFetch()
      // dispatch(getRootFilesAndFoldersReducer())
    }

    return () => {}
  }, [storeFolder.childFolders])

  return (
    <>
      <div className="flex max-h-screen min-h-screen">
        <LeftSideBar />
        {/* (all-without-left-sidebar.png)  */}
        <div className="w-full ">
          <SearchTop />
          {/* (files-folders-body-and-others-apps.png) */}
          <div className="flex h-[93%] bg-[#F7F9FC] ">
            <div className="h-full">
              {/* (files-folders-body.png) */}
              <div className="w-full   h-[98%] bg-white rounded-2xl">
                <FileActions />
                {/* message-warning-storage-and-preview-file */}
                {/* bg-white rounded-xl */}
                <div className="flex h-[92.5%] ">
                  {/* <MessageWarningStorage /> */}
                  {/* overflow-y-scroll */}
                  <div className="w-full overflow-y-auto  px-4 h-full">
                    {"hasStorageFull" === "hasStorageFull" ? (
                      <MessageAlertStorage />
                    ) : null}
                    <MyFilesAndFolders />
                  </div>
                  {/* <PreviewFile /> */}
                </div>
                {/* ./ message-warning-storage-and-preview-file */}
              </div>
              {/* ./ (files-folders-body.png) */}
              <div className="h-[2%]"></div>
            </div>
            <OthersApps />
          </div>
          {/* ./ (files-folders-body-and-others-apps.png) */}
        </div>
        {/* ./ (all-without-left-sidebar.png) */}
      </div>
    </>
  )
}
export default Index

/* <div>
              <div></div>  
              <div></div>  
            </div> */

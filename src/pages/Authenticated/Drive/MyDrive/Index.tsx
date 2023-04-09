import LeftSideBar from "./components/LeftSideBar"
import SearchTop from "./components/SearchTop"
import PreviewFile from "./components/PreviewFile"
import MessageWarningStorage from "./components/MessageWarningStorage"
import OthersApps from "./components/OthersApps"
import FileActions from "./components/FileActions"
import MessageAlertStorage from "./components/MessageAlertStorage"
import MyFilesAndFolders from "./components/MyFilesAndFolders"

const Index = () => {
  return (
    <>
      <div className="flex max-h-screen min-h-screen">
        <LeftSideBar />
        {/* (all-without-left-sidebar.png)  */}
        <div className="w-full ">
          <SearchTop />
          {/* (files-folders-body-and-others-apps.png) */}
          <div className="flex h-[93%] bg-[#F7F9FC] ">
            {/* (files-folders-body.png) */}
            {/* px-5 py-1 */}
            <div className="w-full bg-white rounded-2xl ">
              <FileActions />
              {/* message-warning-storage-and-preview-file */}
              <div className="flex h-[92.5%]">
                {/* <MessageWarningStorage /> */}
                <div className="w-full overflow-y-scroll  px-4">
                  <MessageAlertStorage />
                  <MyFilesAndFolders />
                </div>
                {/* <PreviewFile /> */}
              </div>
              {/* ./ message-warning-storage-and-preview-file */}
            </div>
            {/* ./ (files-folders-body.png) */}
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

import LeftSideBar from "./components/LeftSideBar"
import SearchTop from "./components/SearchTop"
import PreviewFile from "./components/PreviewFile"
import MessageWarningStorage from "./components/MessageWarningStorage"
import OthersApps from "./components/OthersApps"
import FileActions from "./components/FileActions"

const Index = () => {
  return (
    <>
      <div className="flex max-h-screen min-h-screen">
        <LeftSideBar />
        {/* (all-without-left-sidebar.png) */}
        <div className="w-full bg-green-500">
          <SearchTop />
          {/* (files-folders-body-and-others-apps.png) */}
          <div className="flex h-[93%] bg-yellow-400">
            {/* (files-folders-body.png) */}
            <div className="w-full bg-amber-600">
              <FileActions />
              {/* message-warning-storage-and-preview-file */}
              <div className="flex h-[94.5%]">
                <MessageWarningStorage />
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

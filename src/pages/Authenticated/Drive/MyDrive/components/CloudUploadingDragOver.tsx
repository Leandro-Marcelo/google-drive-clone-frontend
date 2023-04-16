import { getSvg } from "../../../../../utils/getSvg"
import cloudUploading from "../../../../../assets/cloudUploading.gif"
import { useAppDispatch, useAppSelector } from "../../../../../store/hook"

const CloudUploadingDragOver = () => {
  const dispatch = useAppDispatch()
  const storeStyle = useAppSelector((store) => store.style)

  return (
    <div
      className="absolute bottom-6 w-full flex z-50 flex-col"
      style={{
        display: storeStyle.IsDraggingFile ? "block" : "none",
      }}
    >
      <div className="flex justify-center">
        <img src={cloudUploading} alt="" className="h-16 w-16" />
      </div>
      <div className="flex justify-center"></div>
      <div className="flex flex-col bg-[#0B57D0] w-max mx-auto px-4 py-3 rounded-full text-white text-xs">
        <div className="flex justify-center ">Drop files to upload them to</div>
        <div className="flex items-center gap-2 justify-center">
          <div className="">
            {getSvg({ type: "myDrive", width: "18px", height: "18px" })}
          </div>
          <div className="">My Drive</div>
        </div>
      </div>
    </div>
  )
}
export default CloudUploadingDragOver

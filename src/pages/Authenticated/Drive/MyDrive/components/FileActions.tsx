import { getSvg } from "../../../../../utils/getSvg"

const FileActions = () => {
  return (
    <div className="flex h-[5.5%] items-center justify-between border-b-[1px] border-solid border-[#ccc] bg-white pl-4 pr-7">
      <div className="flex cursor-pointer items-center gap-1 rounded-md px-[6px] py-1 hover:bg-[#f5f5f5]">
        <div className="">My Drive</div>
        {getSvg({ type: "arrowDownSelect" })}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-6 ">
          <div>
            {getSvg({
              type: "getLink",
              fill: "#5F6368",
            })}
          </div>
          <div>
            {getSvg({
              type: "share",
              fill: "#5F6368",
            })}
          </div>
          <div>
            {getSvg({
              type: "preview",
              fill: "#5F6368",
            })}
          </div>
          <div>
            {getSvg({
              type: "trash",
              fill: "#5F6368",
            })}
          </div>
          <div>
            {getSvg({
              type: "moreOptions",
              fill: "#5F6368",
            })}
          </div>
        </div>
        <div className=" h-6 border-[1px] border-solid border-[#f1f3f4]"></div>
        <div className="flex items-center gap-5">
          <div>
            {getSvg({
              type: "listLayout",
              fill: "#5F6368",
            })}
          </div>
          <div>
            {getSvg({
              type: "toggleDetails",
              fill: "#5F6368",
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default FileActions

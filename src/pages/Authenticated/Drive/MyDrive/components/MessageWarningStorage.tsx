import { getSvg } from "../../../../../utils/getSvg"

const MessageWarningStorage = () => {
  return (
    <div className="w-full bg-white pr-2">
      <div className="flex items-center justify-between bg-[#FEF7E0] px-3 py-[10px]">
        <div className="flex items-center gap-4">
          <div className="">{getSvg({ type: "warning" })}</div>
          <div>
            <span className="font-medium">81% of storage used</span> … You can
            clean up space or get more storage for Drive, Gmail, and Google
            Photos.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>Learn more</div>
          <div>Buy storage</div>
          <div>{getSvg({ type: "close" })}</div>
        </div>
      </div>
      <div className="py-4 pl-2 pr-7 text-sm font-semibold text-[#5f6368]">
        Suggested
      </div>
      {/* only-files-and-folders */}
      <div></div>
    </div>
  )
}
export default MessageWarningStorage

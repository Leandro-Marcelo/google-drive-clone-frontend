import { getSvg } from "../../../../../utils/getSvg"

const MessageAlertStorage = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll  px-2">
        {"81% of storage used" ? (
          /* flex-wrap items-center justify-between */
          /*  */
          <div className="grid min-h-[5%]   w-full grid-cols-[30px_1fr_30px]  bg-[#F9DEDC] px-3 py-[10px]">
            <div className=" flex justify-center ">
              {getSvg({
                type: "warningSelected",
                fill: "#B42921",
                width: "20px",
                height: "20px",
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4  pl-3">
              <div className="text-wrap">
                <span className="font-medium">Almost out of storage</span>If you
                run out, you can't create or edit files, send or receive email
                on Gmail, or back up to Google Photos.
              </div>
              <div className="flex flex-1 items-center  justify-end whitespace-nowrap px-2 text-[#B42921] font-semibold">
                <div className="pr-3">Learn more</div>
                <div>Buy storage</div>
              </div>
            </div>
            <div className=" flex  justify-center py-1">
              {getSvg({ type: "close" })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
export default MessageAlertStorage

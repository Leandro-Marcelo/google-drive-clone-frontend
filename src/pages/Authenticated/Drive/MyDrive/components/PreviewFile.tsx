import photoImg from "../../../../../assets/imgs/photoImg.png"
import { getSvg } from "../../../../../utils/getSvg"
import dockerSvg from "../../../../../assets/svgs/docker.svg"
import emptyStateDetails from "../../../../../assets/imgs/emptyStateDetails.png"
import profilePicture from "../../../../../assets/imgs/profilePicture.jpg"

const PreviewFile = () => {
  return (
    <div className="w-[428px] bg-white">
      {/* bg-yellow-500 */}
      {/* h-[140px] */}
      <div className="flex h-[19%] flex-col ">
        <div className="flex items-center justify-between px-9 py-8">
          <div className="flex items-center gap-2">
            {"selectedFileTrue" ? (
              <>
                <div>
                  <img src={photoImg} alt="" className="h-7 w-7" />
                </div>
                <div className="text-xl">docker.svg</div>
              </>
            ) : (
              <>
                <div>
                  {getSvg({
                    type: "myDrive",
                  })}
                </div>
                <div className="text-xl">My Drive</div>
              </>
            )}
          </div>
          <div>
            {getSvg({
              type: "close",
              fill: "#5F6368",
            })}
          </div>
        </div>
        <div className="flex border-b-[1px] border-solid border-[#dadce0] px-3">
          <div className="w-[50%] border-[1px] border-solid border-[#1a73e8] px-2 text-center text-[#1a73e8]">
            <div className="flex h-full items-center justify-center border-b-[2px] border-solid border-[#1a73e8]">
              Details
            </div>
          </div>
          <div className="w-[50%] py-3  text-center text-[#5f6368]">
            Activity
          </div>
        </div>
      </div>
      <div
        /* Si este es false, el de abajo también y si es true el de abajo tmb es true */
        className={`h-[81%] ${"selectedFileTrue" ? `overflow-y-scroll` : ``}`}
      >
        {"selectedFileTrue" ? (
          <>
            <div className="mx-auto h-[160px] w-[311px] overflow-hidden rounded-md border-[1px] border-solid border-[#dadce0]">
              <img src={dockerSvg} alt="" />
            </div>
            <div className="px-4">
              <div className="pt-8 pb-2 font-semibold text-[#3c4043]">
                Who has access
              </div>
              <div className="mb-1">
                <img
                  src={profilePicture}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <div className="pb-4 text-xs text-[#5f6368]">Private to you</div>
              <button className="mb-[22px] rounded border-[1px] border-solid border-[#dadce0] px-7 py-[6px] text-sm font-medium text-[#1a73e8]">
                Manage access
              </button>
            </div>
            <div className="border-[1px] border-b border-[#dadce0]"></div>
            <div className="px-4">
              <div className="pt-5 pb-2 text-base font-semibold text-[#3c4043]">
                File details
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Type
                  </div>
                  <div className="text-sm text-[#5f6368]">Image</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Size
                  </div>
                  <div className="text-sm text-[#5f6368]">437 bytes</div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Storage used
                  </div>
                  <div className="text-sm text-[#5f6368]">437 bytes</div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Location
                  </div>
                  <div className=" ">
                    <button className="flex items-center rounded-full border-[1px] border-solid border-[#dadce0] px-2 py-1">
                      <div className="pr-1">
                        {getSvg({
                          type: "myDriveMini",
                          fill: "#5F6368",
                        })}
                      </div>
                      <div className="text-sm text-[#5f6368]">My Drive</div>
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Owner
                  </div>
                  <div className="text-sm text-[#5f6368]">me</div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Modified
                  </div>
                  <div className="flex items-center gap-2  text-sm text-[#5f6368]">
                    <div>Dec 11, 2022 by me </div>
                    <div>
                      {getSvg({
                        type: "modified",
                      })}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Opened
                  </div>
                  <div className="text-sm text-[#5f6368]">
                    Dec 13, 2022 by me
                  </div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Created
                  </div>
                  <div className="text-sm text-[#5f6368]">Dec 11, 2022</div>
                </div>
                <div className="">
                  <div className="text-xs font-semibold text-[#3c4043]">
                    Download permissions
                  </div>
                  <div className="text-sm text-[#5f6368]">
                    Viewers can download
                  </div>
                </div>
                <div className="mb-4">
                  <div className="mb-1 text-xs font-semibold text-[#3c4043]">
                    Description
                  </div>
                  <div className="text-sm text-[#5f6368]">
                    <input
                      type="text"
                      className="w-full rounded border-[1px] border-solid border-[#dadce0] px-4 py-2  text-sm text-[#3c4043] outline-none transition-colors hover:border-[#000] focus:border-2 focus:border-[#1967D2]"
                      placeholder="Add description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto h-52 w-52">
              <img src={emptyStateDetails} alt="" />
            </div>
            <div className="text-center text-sm text-[#5f6368]">
              Select an item to see the details
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default PreviewFile

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import googleDriveIcon from "./assets/imgs/googleDrive.png"
import profilePicture from "./assets/imgs/profilePicture.jpg"

import { getSvg } from "./utils/getSvg"

// sidebar right
import googleCalendar from "./assets/imgs/googleCalendar.png"
import googleContact from "./assets/imgs/googleContact.png"
import googleKeep from "./assets/imgs/googleKeep.png"
import googleTask from "./assets/imgs/googleTask.png"
import getAddsOn from "./assets/imgs/getAddsOn.png"
import photoImg from "./assets/imgs/photoImg.png"
import dockerSvg from "./assets/svgs/docker.svg"
import emptyStateDetails from "./assets/imgs/emptyStateDetails.png"

const App = () => {
  return (
    /* CONTAINER MAIN */
    <div className="flex max-h-screen min-h-screen">
      {/* (left-sidebar.png) . Logo Google Drive and Drive. Below: New, My Drive, Computers, Shared with me, Recent, Starred, Trash, Storage, etc  */}
      <div className="min-w-[260px] bg-red-500">
        <div className="h-[7%] bg-green-400">
          <div className="flex items-center gap-2 py-3  px-5">
            <img src={googleDriveIcon} alt="" className="h-10 w-10" />
            <p className="text-2xl text-[#5F6368]">Drive</p>
          </div>
        </div>
        <div className="h-[93%]">
          <div className=" py-3 px-3">
            <div className="flex w-[120px] items-center gap-3 rounded-full bg-blue-400 py-2 px-2">
              <div className="">{getSvg({ type: "new", fill: "#5F6368" })}</div>
              <div className="text-sm font-medium text-[##3C4043]">New</div>
            </div>
          </div>
          <div className=" px-7 py-1 text-[13px]">
            <div className="mb-[15px] flex items-center gap-4">
              <div>{getSvg({ type: "myDrive" })}</div>
              <div>My Drive</div>
            </div>
            <div className="mb-[15px] flex items-center gap-4">
              <div>{getSvg({ type: "computers" })}</div>
              <div>Computers</div>
            </div>
            <div className="mb-[15px] flex items-center gap-4">
              <div>{getSvg({ type: "sharedWithMe" })}</div>
              <div>Shared with me</div>
            </div>
            <div className="mb-[16px] flex items-center gap-4">
              <div>{getSvg({ type: "recent" })}</div>
              <div>Recent</div>
            </div>
            <div className="mb-[16px] flex items-center gap-4">
              <div>{getSvg({ type: "starred" })}</div>
              <div>Starred</div>
            </div>
            <div className="flex items-center gap-4 pb-[14px]">
              <div>{getSvg({ type: "trash" })}</div>
              <div>Trash</div>
            </div>
          </div>
          <div className="border-t border-solid border-[#dadce0] pt-[12px]"></div>
          <div className="py-1 pl-7 pr-14 text-[13px]">
            <div className="flex items-center gap-4 pb-4">
              <div>{getSvg({ type: "cloud" })}</div>
              <div>Storage (81% full)</div>
            </div>
            <div className="rounded-full bg-yellow-500 py-[2px]"></div>
            <div className="pt-1 pb-3">12.24 GB of 15 GB used</div>
            <button className="rounded border-[1px] border-solid border-[#dadce0] px-7 py-2 text-sm font-medium text-[#1a73e8]">
              Buy Storage
            </button>
          </div>
        </div>
      </div>
      {/* (all-without-left-sidebar.png) */}
      <div className="w-full bg-green-500">
        {/* (search-top.png) */}
        <div className="flex h-[7%] bg-blue-500">
          <div className="flex w-full items-center bg-yellow-500 ">
            <div className="relative flex w-full items-center shadow-md lg:shadow-none xl:w-[714px]">
              <div className="absolute left-3 hidden lg:block">
                {getSvg({
                  type: "searchGoogleDrive",
                  fill: "#71757A",
                })}
              </div>
              <div className="absolute left-3 h-4 w-4 lg:hidden">
                {getSvg({ type: "menuSquared", fill: "#000" })}
              </div>
              <input
                type="text"
                className="w-full rounded-lg py-3 px-12 outline-none  lg:bg-[#F1F3F4]"
              />
              <div className="absolute right-3 hidden lg:block">
                {getSvg({
                  type: "showSearchIcon",
                  fill: "#71757A",
                })}
              </div>
              <div className="absolute right-3 lg:hidden">
                <img
                  src={profilePicture}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[255px] items-center justify-between bg-green-400 px-4">
            <div className="flex items-center gap-4">
              <div className="h-6 w-6">
                {getSvg({
                  type: "support",
                  fill: "#5F6368",
                })}
              </div>
              <div className="h-6 w-6">
                {getSvg({
                  type: "settings",
                  fill: "#5F6368",
                })}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-6 w-6">
                {getSvg({
                  type: "googleApps",
                  fill: "#5F6368",
                })}
              </div>
              <img
                src={profilePicture}
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
        {/* (files-folders-body-and-others-apps.png) */}
        <div className="flex h-[93%] bg-yellow-400">
          {/* (files-folders-body.png) */}
          <div className="w-full bg-amber-600">
            {/* (file-actions.png) */}
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
            {/* message-warning-storage-and-preview-file */}
            <div className="flex h-[94.5%]">
              {/* message-warning-storage */}
              <div className="w-full bg-white pr-2">
                <div className="flex items-center justify-between bg-[#FEF7E0] px-3 py-[10px]">
                  <div className="flex items-center gap-4">
                    <div className="">{getSvg({ type: "warning" })}</div>
                    <div>
                      <span className="font-medium">81% of storage used</span> …
                      You can clean up space or get more storage for Drive,
                      Gmail, and Google Photos.
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
              {/* preview-file */}
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
                  className={`h-[81%] ${
                    "selectedFileTrue" ? `overflow-y-scroll` : ``
                  }`}
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
                        <div className="pb-4 text-xs text-[#5f6368]">
                          Private to you
                        </div>
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
                            <div className="text-sm text-[#5f6368]">
                              437 bytes
                            </div>
                          </div>
                          <div className="">
                            <div className="text-xs font-semibold text-[#3c4043]">
                              Storage used
                            </div>
                            <div className="text-sm text-[#5f6368]">
                              437 bytes
                            </div>
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
                                <div className="text-sm text-[#5f6368]">
                                  My Drive
                                </div>
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
                            <div className="text-sm text-[#5f6368]">
                              Dec 11, 2022
                            </div>
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
            </div>
          </div>
          {/* (others-apps.png) */}
          <div className="w-[50px]">
            {/* flex w-[50px] flex-col items-center gap-8 bg-green-400 py-3 */}
            <div className="flex h-[93.5%] flex-col items-center gap-8 bg-red-500 py-3">
              <div>
                <img src={googleCalendar} alt="" className="h-5 w-5" />
              </div>

              <div>
                <img src={googleKeep} alt="" className="h-5 w-5" />
              </div>
              <div>
                <img src={googleTask} alt="" className="h-5 w-5" />
              </div>
              <div>
                <img src={googleContact} alt="" className="h-5 w-5" />
              </div>
              <div className="my-8">
                <img src={getAddsOn} alt="" className="h-5 w-5" />
              </div>
            </div>
            <div className="flex h-[6.5%] items-center justify-center bg-blue-500">
              <div>{getSvg({ type: "arrowToggleSidePanel" })}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* ./CONTAINER MAIN */
  )
}

export default App

{
  /* <div className="h-screen w-full bg-[#fff]">
            <Navbar />
            <Sidebar />
        </div> */
}

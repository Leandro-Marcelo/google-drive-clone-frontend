import React, { useRef, useState } from "react"
import googleDocsPNG from "../assets/imgs/googleDocs.png"
import googleSheetsPNG from "../assets/imgs/googleSheets.png"
import googleSlidesPNG from "../assets/imgs/googleSlides.png"
import googleFormsPNG from "../assets/imgs/googleForms.png"
import googleDrawingPNG from "../assets/imgs/googleDrawing.png"
import googleMyMapsPNG from "../assets/imgs/googleMyMaps.png"
import googleSitesPNG from "../assets/imgs/googleSites.png"
import googleAppsScriptPNG from "../assets/imgs/googleAppsScript.png"
import googleJamboardPNG from "../assets/imgs/googleJamboard.png"
import { getSvg } from "../utils/getSvg"
import { useAppDispatch, useAppSelector } from "../store/hook"
import { openModalCreateUpdateFolder } from "../utils/openModal"
import { setMenuOfNewIsOpenReducer } from "../store/style/styleSlice"
import { uploadManyFilesAPI } from "../services/files"
import { uploadManyFilesReducer } from "../store/folder/folderSlice"

export type SubMenuName = "docs" | "sheets" | "slides" | "forms" | "more"

interface Props {
  menuIsOpen: boolean
}

const Dropdown = ({ menuIsOpen }: Props) => {
  const dispatch = useAppDispatch()
  const storeFolder = useAppSelector((store) => store.folder)

  // * INPUT FILE
  const refInputFile = useRef<HTMLInputElement>(null)

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

  const handleChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files !== null && e.target.files.length >= 1) {
      showFiles(e.target.files)
    }
  }

  // * ./ INPUT FILE

  const [updateSubsMenuOpen, setUpdateSubsMenuOpen] = useState(
    new Map<SubMenuName, boolean>()
  )

  const handleSubsMenu = (subMenuName: SubMenuName) => {
    const copy = new Map<SubMenuName, boolean>(updateSubsMenuOpen)

    if (!copy.has(subMenuName)) {
      copy.set(subMenuName, true)
      setUpdateSubsMenuOpen(copy)
    }

    if (copy.has(subMenuName) && copy.get(subMenuName) === false) {
      copy.set(subMenuName, true)
      setUpdateSubsMenuOpen(copy)
    }
  }

  const resetSubsMenuLessSubMenuNameReceive = (
    subMenuName: SubMenuName | null
  ) => {
    if (subMenuName === null) {
      setUpdateSubsMenuOpen(new Map<SubMenuName, boolean>())
    } else {
      const copy = new Map<SubMenuName, boolean>(updateSubsMenuOpen)
      copy.forEach((value, key) => {
        if (key !== subMenuName) {
          copy.set(key, false)
        }
      })
      setUpdateSubsMenuOpen(copy)
    }
  }

  return (
    <>
      <input
        type="file"
        id="inputFile"
        hidden
        multiple
        onChange={handleChangeInputFile}
        ref={refInputFile}
      />
      {menuIsOpen && (
        <ul
          className="absolute py-2 rounded-md animate-dropdown bg-white z-50 w-[200px] md:w-[300px] top-0 left-0"
          style={{
            boxShadow:
              "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
          }}
        >
          <li className="pb-2 pt-1">
            <a
              className="flex  py-1  px-6  text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive(null)
              }}
              onClick={(e) => {
                e.stopPropagation()
                openModalCreateUpdateFolder()
                dispatch(setMenuOfNewIsOpenReducer(false))
              }}
            >
              <div>
                {getSvg({
                  type: "newFolder",
                  width: "20px",
                  height: "20px",
                })}
              </div>
              <div>New folder</div>
            </a>
          </li>
          <li>
            <hr className="border-gray-200" />
          </li>
          <li className="pt-1">
            <a
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive(null)
              }}
              onClick={(e) => {
                e.stopPropagation()
                if (refInputFile.current) {
                  refInputFile.current.click()
                }
                dispatch(setMenuOfNewIsOpenReducer(false))
              }}
            >
              <div>
                {getSvg({
                  type: "fileUpload",
                  width: "20px",
                  height: "20px",
                })}
              </div>
              <div>File upload</div>
            </a>
          </li>
          <li className="pb-1">
            <a
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive(null)
              }}
            >
              <div>
                {getSvg({
                  type: "folderUpload",
                  width: "20px",
                  height: "20px",
                })}
              </div>
              <div>Folder upload</div>
            </a>
          </li>
          <li>
            <hr className="border-gray-200" />
          </li>
          <li className="pt-1">
            <a
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive("docs")
              }}
              href="https://docs.google.com"
              target="_blank"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-4">
                  <div className="h-[20px] w-[20px]">
                    <img src={googleDocsPNG} alt="" className="w-4 h-4" />
                  </div>
                  <div>Google Docs</div>
                </div>
                <div
                  onMouseEnter={(e) => handleSubsMenu("docs")}
                  className="hover:bg-slate-200 px-[6.5px] py-[0.8px] rounded-full cursor-pointer "
                >
                  {">"}
                </div>
              </div>

              {updateSubsMenuOpen.get("docs") && (
                <ul
                  className="absolute top-[117px] left-full ml-[2px] py-4  rounded-md overflow-hidden animate-dropdown bg-white w-72"
                  style={{
                    boxShadow:
                      "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4 "
                      href="https://docs.google.com"
                      target="_blank"
                    >
                      Blank document
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4 group/stop"
                      href="https://docs.google.com"
                      target="_blank"
                    >
                      From a template
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="pt-1">
            <a
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center group/google-sheets"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive("sheets")
              }}
              href="https://docs.google.com/spreadsheets"
              target="_blank"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-4">
                  <div className="h-[20px] w-[20px]">
                    <img src={googleSheetsPNG} alt="" className="w-4 h-4" />
                  </div>
                  <div>Google Sheets</div>
                </div>
                <div
                  onMouseEnter={(e) => handleSubsMenu("sheets")}
                  className="hover:bg-slate-200 px-[6.5px] py-[0.8px] rounded-full cursor-pointer"
                >
                  {">"}
                </div>
              </div>

              {updateSubsMenuOpen.get("sheets") && (
                <ul
                  className="absolute top-[150px] left-full ml-[2px] py-4  rounded-md overflow-hidden animate-dropdown bg-white w-72"
                  style={{
                    boxShadow:
                      "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4 group-hover/google-docs:bg-gray-100"
                      href="https://docs.google.com/spreadsheets"
                      target="_blank"
                    >
                      Blank spreadsheet
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/spreadsheets"
                      target="_blank"
                    >
                      From a template
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="pt-1">
            <a
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive("slides")
              }}
              href="https://docs.google.com/presentation"
              target="_blank"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-4">
                  <div className="h-[20px] w-[20px]">
                    <img src={googleSlidesPNG} alt="" className="w-4 h-4" />
                  </div>
                  <div>Google Slides</div>
                </div>
                <div
                  onMouseEnter={(e) => handleSubsMenu("slides")}
                  className="hover:bg-slate-200 px-[6.5px] py-[0.8px] rounded-full cursor-pointer"
                >
                  {">"}
                </div>
              </div>

              {updateSubsMenuOpen.get("slides") && (
                <ul
                  className="absolute top-[185px] left-full ml-[2px] py-4  rounded-md overflow-hidden animate-dropdown bg-white w-72"
                  style={{
                    boxShadow:
                      "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/presentation"
                      target="_blank"
                    >
                      Blank presentation
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/presentation"
                      target="_blank"
                    >
                      From a template
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="pt-1">
            <a
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive("forms")
              }}
              href="https://docs.google.com/forms"
              target="_blank"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-4">
                  <div className="h-[20px] w-[20px]">
                    <img src={googleFormsPNG} alt="" className="w-4 h-4" />
                  </div>
                  <div>Google Forms</div>
                </div>
                <div
                  onMouseEnter={(e) => handleSubsMenu("forms")}
                  className="hover:bg-slate-200 px-[6.5px] py-[0.8px] rounded-full cursor-pointer"
                >
                  {">"}
                </div>
              </div>

              {updateSubsMenuOpen.get("forms") && (
                <ul
                  className="absolute top-[220px] left-full ml-[2px] py-4  rounded-md overflow-hidden animate-dropdown bg-white w-72"
                  style={{
                    boxShadow:
                      "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/forms"
                      target="_blank"
                    >
                      Blank form
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/forms"
                      target="_blank"
                    >
                      Blank quiz
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/forms"
                      target="_blank"
                    >
                      From a template
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="pt-1">
            <div
              className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center"
              onMouseEnter={(e) => {
                resetSubsMenuLessSubMenuNameReceive("more")
              }}
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-4">
                  <div className="h-[20px] w-[20px]"></div>
                  <div>More</div>
                </div>
                <div
                  onMouseEnter={(e) => handleSubsMenu("more")}
                  className="hover:bg-slate-200 px-[6.5px] py-[0.8px] rounded-full cursor-pointer"
                >
                  {">"}
                </div>
              </div>

              {updateSubsMenuOpen.get("more") && (
                <ul
                  className="absolute top-[250px] left-full ml-[2px] py-4  rounded-md overflow-hidden animate-dropdown bg-white w-72"
                  style={{
                    boxShadow:
                      "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://docs.google.com/drawings"
                      target="_blank"
                    >
                      <div className="flex gap-4">
                        <div className="h-[20px] w-[20px]">
                          <img
                            src={googleDrawingPNG}
                            alt=""
                            className="w-4 h-4"
                          />
                        </div>
                        <div>Google Drawings</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://www.google.com/maps"
                      target="_blank"
                    >
                      <div className="flex gap-4">
                        <div className="h-[20px] w-[20px]">
                          <img
                            src={googleMyMapsPNG}
                            alt=""
                            className="w-4 h-4"
                          />
                        </div>
                        <div>Google My Maps</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://sites.google.com/"
                      target="_blank"
                    >
                      <div className="flex gap-4">
                        <div className="h-[20px] w-[20px]">
                          <img
                            src={googleSitesPNG}
                            alt=""
                            className="w-4 h-4"
                          />
                        </div>
                        <div>Google Sites</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://script.google.com/"
                      target="_blank"
                    >
                      <div className="flex gap-4">
                        <div className="h-[20px] w-[20px]">
                          <img
                            src={googleAppsScriptPNG}
                            alt=""
                            className="w-4 h-4"
                          />
                        </div>
                        <div>Google Apps Script</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
                      href="https://jamboard.google.com/"
                      target="_blank"
                    >
                      <div className="flex gap-4">
                        <div className="h-[20px] w-[20px]">
                          <img
                            src={googleJamboardPNG}
                            alt=""
                            className="w-4 h-4"
                          />
                        </div>
                        <div>Google Jamboard</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="border-gray-200" />
                  </li>
                  <li className="pt-2">
                    <a
                      className="flex  px-6 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4 "
                      href="#"
                    >
                      <div className="flex gap-4 ">
                        <div className="h-[20px] w-[20px]">
                          {getSvg({
                            type: "new",
                            width: "20px",
                            height: "20px",
                          })}
                        </div>
                        <div>Connect more apps</div>
                      </div>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      )}
    </>
  )
}

export default Dropdown

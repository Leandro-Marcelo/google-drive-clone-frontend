import { useState } from "react"
import { getSvg } from "../utils/getSvg"
import googleDocsPNG from "../assets/imgs/googleDocs.png"
import googleSheetsPNG from "../assets/imgs/googleSheets.png"
import googleSlidesPNG from "../assets/imgs/googleSlides.png"
import googleFormsPNG from "../assets/imgs/googleForms.png"

const DropdownSAved = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-[300px] ml-4">
      <button
        className="flex items-center justify-center bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        onClick={toggleDropdown}
      >
        Dropdown
      </button>
      {isOpen && (
        /* bg-white */
        <ul
          className="absolute w-full mt-2 py-2  rounded-md overflow-hidden animate-dropdown bg-white"
          style={{
            boxShadow:
              "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
          }}
        >
          <li className="pb-2 pt-1">
            <a
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
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
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
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
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
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
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
            >
              <div className="h-[20px] w-[20px]">
                <img src={googleDocsPNG} alt="" className="w-4 h-4" />
              </div>
              <div>Google Docs</div>
            </a>
          </li>
          <li>
            <a
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
            >
              <div className="h-[20px] w-[20px]">
                <img src={googleSheetsPNG} alt="" className="w-4 h-4" />
              </div>
              <div>Google Sheets</div>
            </a>
          </li>
          <li>
            <a
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
            >
              <div className="h-[20px] w-[20px]">
                <img src={googleSlidesPNG} alt="" className="w-4 h-4" />
              </div>
              <div>Google Slides</div>
            </a>
          </li>
          <li>
            <a
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
            >
              <div className="h-[20px] w-[20px]">
                <img src={googleFormsPNG} alt="" className="w-4 h-4" />
              </div>
              <div>Google Forms</div>
            </a>
          </li>
          <li className="pb-1">
            <a
              className="flex px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 items-center gap-4"
              href="#"
            >
              <div className="h-[20px] w-[20px]"></div>
              <div>More</div>
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}
export default DropdownSAved

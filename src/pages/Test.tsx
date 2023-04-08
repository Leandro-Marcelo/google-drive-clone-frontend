import { ReactNode } from "react"

const Test = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen from-sky-100 via-sky-300 to-sky-200 bg-gradient-to-br">
        <div className="mt-32 w-full">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
            <div className="mx-auto inline-flex w-full justify-center pt-4">
              <a
                className="group max-w-max relative mx-1 flex flex-col items-center justify-center rounded-full border border-gray-500 p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                href="#"
              >
                <p className="text-xs text-center">Hover Me</p>
                {/* bottom-0 mb-6 */}
                <div className="absolute right-20  rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex max-w-xs flex-col items-center">
                    <div className="rounded bg-gray-900 p-2 text-xs text-center shadow-lg">
                      Tooltip Title
                    </div>
                    {/*  <div className="-bottom h-2 w-4 bg-gray-900"></div> */}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Test

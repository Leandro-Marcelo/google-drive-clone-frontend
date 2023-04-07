import { getSvg } from "../../../../../utils/getSvg"

import googleCalendar from "../../../../../assets/imgs/googleCalendar.png"
import googleContact from "../../../../../assets/imgs/googleContact.png"
import googleKeep from "../../../../../assets/imgs/googleKeep.png"
import googleTask from "../../../../../assets/imgs/googleTask.png"
import getAddsOn from "../../../../../assets/imgs/getAddsOn.png"

const OthersApps = () => {
  return (
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
  )
}
export default OthersApps

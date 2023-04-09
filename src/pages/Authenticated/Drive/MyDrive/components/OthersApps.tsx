import { getSvg } from "../../../../../utils/getSvg"

import googleCalendar from "../../../../../assets/imgs/googleCalendar.png"
import googleContact from "../../../../../assets/imgs/googleContact.png"
import googleKeep from "../../../../../assets/imgs/googleKeep.png"
import googleTask from "../../../../../assets/imgs/googleTask.png"
import getAddsOn from "../../../../../assets/imgs/getAddsOn.png"
import Tooltip from "../../../../../components/Tooltip"

const OthersApps = () => {
  return (
    <div
      className="w-[50px]"
      onContextMenu={(e) => {
        e.preventDefault()
      }}
    >
      {/* flex w-[50px] flex-col items-center gap-8 bg-green-400 py-3 */}
      <div className="flex h-[93.5%] flex-col items-center gap-8  py-3">
        <Tooltip text="Calendar" direction="top-10 -left-6" textNoWrap={true}>
          <div>
            <img src={googleCalendar} alt="" className="h-5 w-5" />
          </div>
        </Tooltip>

        <Tooltip text="Keep" direction="top-10 -left-1" textNoWrap={true}>
          <div>
            <img src={googleKeep} alt="" className="h-5 w-5" />
          </div>
        </Tooltip>

        <Tooltip text="Tasks" direction="top-10 -left-1" textNoWrap={true}>
          <div>
            <img src={googleTask} alt="" className="h-5 w-5" />
          </div>
        </Tooltip>

        <Tooltip text="Contacts" direction="top-10 -left-6" textNoWrap={true}>
          <div>
            <img src={googleContact} alt="" className="h-5 w-5" />
          </div>
        </Tooltip>

        <Tooltip
          text="Get Adds-on"
          direction="top-10 -left-11"
          textNoWrap={true}
        >
          {/* my-8 */}
          <div className="">
            <img src={getAddsOn} alt="" className="h-5 w-5" />
          </div>
        </Tooltip>
      </div>
      <div className="flex h-[6.5%] items-center justify-center ">
        <div>{getSvg({ type: "arrowToggleSidePanel" })}</div>
      </div>
    </div>
  )
}
export default OthersApps

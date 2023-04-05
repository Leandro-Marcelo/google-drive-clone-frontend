import googleDriveIcon from "../assets/imgs/googleDrive.png";
import profilePicture from "../assets/imgs/profilePicture.jpg";
import { getSvg } from "../utils/getSvg";

const Navbar = () => {
    return (
        <div className="flex w-full lg:border-[1px] lg:border-b lg:border-[#DADCE0]">
            <div className="hidden w-[13%] items-center  gap-2 py-3 px-4 lg:flex">
                <img src={googleDriveIcon} alt="" className="h-10 w-10" />
                <p className="text-2xl text-[#5F6368]">Drive</p>
            </div>
            <div className="flex w-full items-center justify-between  px-4 pr-2 lg:w-[83%] xl:w-[84%]">
                <div className="relative flex w-full items-center shadow-md lg:w-auto lg:shadow-none">
                    <div className="absolute left-3 hidden lg:block">
                        {getSvg({ type: "searchGoogleDrive", fill: "#71757A" })}
                    </div>
                    <div className="absolute left-3 h-4 w-4 lg:hidden">
                        {getSvg({ type: "menuSquared", fill: "#000" })}
                    </div>
                    <input
                        type="text"
                        className="w-full rounded-lg py-3 px-12 outline-none lg:w-[714px] lg:bg-[#F1F3F4]"
                        placeholder="Search in Drive"
                    />
                    <div className="absolute right-3 hidden lg:block">
                        {getSvg({ type: "showSearchIcon", fill: "#71757A" })}
                    </div>
                    <div className="absolute right-3 lg:hidden">
                        <img
                            src={profilePicture}
                            alt=""
                            className="h-8 w-8 rounded-full"
                        />
                    </div>
                </div>
                <div className="hidden items-center gap-4 lg:flex">
                    {/* <div className="hidden  items-center gap-4 lg:flex"></div> */}
                    <div className="mr-4 flex items-center gap-4">
                        <div className="h-6 w-6">
                            {getSvg({ type: "support", fill: "#5F6368" })}
                        </div>
                        <div className="h-6 w-6">
                            {getSvg({ type: "settings", fill: "#5F6368" })}
                        </div>
                    </div>
                    <div className="h-6 w-6">
                        {getSvg({ type: "googleApps", fill: "#5F6368" })}
                    </div>
                </div>
            </div>
            <div className="hidden items-center pl-2 lg:flex lg:w-[4%] xl:w-[3%]">
                <img
                    src={profilePicture}
                    alt=""
                    className="h-8 w-8 rounded-full"
                />
            </div>
        </div>
    );
};
export default Navbar;

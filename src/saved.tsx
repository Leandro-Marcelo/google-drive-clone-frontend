<div className="relative flex w-full items-center shadow-md lg:w-auto lg:shadow-none">
    <div className="absolute left-3 hidden lg:block">
        {getSvg({
            type: "searchGoogleDrive",
            fill: "#71757A",
        })}
    </div>
    {/* <div className="absolute left-3 h-4 w-4 lg:hidden">
                                {getSvg({ type: "menuSquared", fill: "#000" })}
                            </div> */}
    <input
        type="text"
        /* lg:w-[714px] w-full */
        className="rounded-lg py-3 px-12 outline-none  lg:bg-[#F1F3F4] xl:w-[714px]"
        placeholder="Search in Drive"
    />
    <div className="absolute right-3 hidden lg:block">
        {getSvg({
            type: "showSearchIcon",
            fill: "#71757A",
        })}
    </div>
    {/* <div className="absolute right-3 lg:hidden">
                                <img
                                    src={profilePicture}
                                    alt=""
                                    className="h-8 w-8 rounded-full"
                                />
                            </div> */}
</div>;

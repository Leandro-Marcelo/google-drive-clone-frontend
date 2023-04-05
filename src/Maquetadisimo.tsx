import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-[300px] bg-red-500">1</div>
            <div className="w-full bg-green-500">
                {/* h-[60px] */}
                <div className="h-[7%] bg-blue-500"></div>
                <div className="flex h-[93%] bg-yellow-400">
                    <div className="w-full bg-amber-600">
                        <div className="h-[5.5%] bg-purple-500">My Drive</div>
                        <div className="flex h-[94.5%]">
                            <div className="w-full bg-black">images</div>
                            <div className="w-[428px] border-l-indigo-700">
                                visualizer
                            </div>
                        </div>
                    </div>
                    <div className="w-[50px] bg-green-400">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

{
    /* <div className="h-screen w-full bg-[#fff]">
            <Navbar />
            <Sidebar />
        </div> */
}

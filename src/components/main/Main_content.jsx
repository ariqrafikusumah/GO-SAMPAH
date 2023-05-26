import Gambar_1 from "../../assets/img/3d-station.png";

export default function Main_content() {
    return (
        <div className="flex items-center justify-center h-screen animate-fadeIn">
            <div className="py-52 sm:py-32 px-8">
                <span className="text-6xl font-bold">
                    GERAKAN OLAH <div className="text-green-500"> SAMPAH</div>
                </span>
                <div>
                    <span className="text-2xl text-justify font-bold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>
                </div>
                <div className="grid grid-cols-2 pt-5 text-center">
                    <div>
                        <button className="border-2 shadow-lg p-3 w-32 rounded-lg font-bold bg-green-500 hover:bg-green-300 text-white duration-500">Masuk</button>
                    </div>
                    <div>
                        <button className="border-2 shadow-lg p-3 w-32 rounded-lg font-bold hover:bg-green-500 hover:text-white duration-500">Daftar</button>
                    </div>
                </div>
            </div>
            <div className="hidden md:block animate-fadeIn">
                <img className="mx-auto" src={Gambar_1} alt="stations" />
            </div>
        </div>
    )
}

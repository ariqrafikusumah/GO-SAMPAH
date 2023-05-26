import Gambar_global from '../../assets/img/global-recycling.avif'
function Footer() {
    return (
        <div className="h-screen relative">
            <img className="h-screen w-screen object-cover blur-sm brightness-50" src={Gambar_global} alt="Global" />
            <div className="absolute bottom-52 left-0 p-5">
                <div className="font-bold text-2xl text-white">
                    Mari Bersihkan Kota Bandung Bersama
                </div>
                <div className=" text-xl text-white mt-2">
                    Dari Bandung Untuk Indonesia
                </div>
            </div>
        </div>

    )
}

export default Footer
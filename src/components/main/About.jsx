import { FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <div>
            <div className="h-screen flex flex-col justify-center items-center bg-green-500">
                <div className="text-2xl font-bold text-center text-white">
                    Tentang Kami
                </div>
                <div className="px-3">
                    <div className="font-bold text-2xl py-2 text-white text-center">
                        APA ITU GERAKAN OLAH SAMPAH
                    </div>
                    <p className="text-white text-justify lg:px-32 py-2 font-semibold">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                        repudiandae voluptates repellendus dolorem excepturi facilis, nulla
                        pariatur dicta voluptate impedit quod labore autem, neque explicabo
                        sequi consectetur, voluptatibus iste reprehenderit!
                    </p>
                </div>
                <div className="text-center py-2">
                    <button className="border-2 border-green-300 hover:bg-green-300 hover:text-white duration-500 rounded-lg font-bold p-3 flex items-center space-x-2 mx-auto bg-white">
                        <span>Contact Us</span>
                        <FaWhatsapp />
                    </button>
                </div>
            </div>
        </div>
    )
}

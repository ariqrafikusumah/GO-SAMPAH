export default function Layanan() {
    return (
        <div className="items-center justify-center">
            <div className="p-3">
                <div className="text-center mb-5">
                    Layanan Kami
                </div>
                <div className="text-center text-2xl font-bold text-gray-500 mb-5">
                    APA YANG BISA KAMI LAKUKAN
                </div>
                <div className="grid lg:grid-cols-2 gap-2">
                    <div>
                        <div className="border rounded-lg shadow-xl">
                            <div className="grid grid-cols-2 pl-5 pt-5">
                                <div className="w-32 h-32 mb-2 rounded-full border shadow-lg"></div>
                                <div className="text-center font-bold text-2xl flex flex-col items-center justify-center">
                                    <div className="lg:text-4xl sm:text-sm">LAPORAN</div>
                                    <div className="text-xl">HARIAN SAMPAH</div>
                                </div>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 gap-2 p-5">
                                <div className="text-4xl font-bold">2000 KG</div>
                                <div className="text-xl text-green-500 font-bold">
                                    JUMLAH SAMPAH YANG
                                    SUDAH TERKUMPUL
                                </div>
                            </div>
                            <div className="text-slate-400 p-5">Lebih dari 5.000 ton sampah yang telah kami kelola sejak 2023</div>
                        </div>
                    </div>
                    <div>
                        <div className="border rounded-lg shadow-xl">
                            <div className="grid grid-cols-2 pl-5 pt-5">
                                <div className="w-32 h-32 mb-2 rounded-full border shadow-lg"></div>
                                <div className="text-center font-bold text-2xl flex flex-col items-center justify-center">
                                    <div className="lg:text-4xl sm:text-sm">LOKASI</div>
                                    <div className="text-xl">PERMINTAAN BUBUR SAMPAH</div>
                                </div>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 gap-2 p-5">
                                <div className="text-4xl font-bold">10</div>
                                <div className="text-xl text-green-500 font-bold">
                                    TERSEBAR KE SELURUH KELURAHAN DI KOTA BANDUNG
                                </div>
                            </div>
                            <div className="text-slate-400 p-5">Permintaan Bubur Sampah disebarkan kepada masyarakat</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

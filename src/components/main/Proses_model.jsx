import Gambar_Business from '../../assets/img/Business-model.jpg';

export default function Proses_model() {
    return (
        <div className=' bg-green-500'>
            <div>
                <div className='text-center py-2 text-white'>
                    PROSES
                </div>
                <div className='text-center py-2 text-2xl font-bold text-white'>
                PENGANGKUTAN LIMBAH PABRIK
                </div>
                <div className=''>
                    <div>
                        <img className='mx-auto rounded-lg' src={Gambar_Business} alt="Model" />
                    </div>
                </div>
            </div>
        </div>
    )
}

import styles from './PoolDetail.module.css';

const PoolDetail = () => {

    const startDate = new Date().toLocaleDateString();
    const endDate = new Date().toLocaleDateString();
    const salePrice = '1 BUSD = 100 TWIN';
    const tokenTicker = 'TWIN';
    const idoHardCap = '350K';
    const participants = '340/502';


    return (
        <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto mt-20 lg:mt-80 pl-4">
            <ul className="px-5">
                <li>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-400 uppercase text-sm lg:text-base">Start Date</span>
                        <span className="text-gray-100 font-bold text-lg lg:text-xl">{startDate}</span>
                    </div>
                </li>
                <li>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-400 uppercase text-sm lg:text-base">End Date</span>
                        <span className="text-gray-100 font-bold text-lg lg:text-xl">{endDate}</span>
                    </div>
                </li>
            </ul>

            <div className={styles.startSeparator}></div>

            <ul className="px-5">
                <li>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-400 uppercase text-sm lg:text-base">Sale Price</span>
                        <span className="text-gray-100 font-bold text-lg lg:text-xl">{salePrice}</span>
                    </div>
                </li>
                <li>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-400 uppercase text-sm lg:text-base">Token Ticker</span>
                        <span className="text-gray-100 font-bold text-lg lg:text-xl">{tokenTicker}</span>
                    </div>
                </li>
                <li>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-400 uppercase text-sm lg:text-base">IDO Harcap</span>
                        <span className="text-gray-100 font-bold text-lg lg:text-xl">{idoHardCap}</span>
                    </div>
                </li>
                <li>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-400 uppercase text-sm lg:text-base">Participants</span>
                        <span className="text-gray-100 font-bold text-lg lg:text-xl">{participants}</span>
                    </div>
                </li>
            </ul>

            <div className={styles.endSeparator}></div>
        </div>
    )
}

export default PoolDetail

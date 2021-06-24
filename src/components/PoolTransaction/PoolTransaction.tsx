import styles from './PoolTransaction.module.css';

const PoolTransaction = () => {

    const amount = '1 BUSD';
    const maxContribution = '350 BUSD';
    const contribution = '50 BUSD';
    const remContribution = '10 BUSD'

    return (
        <div className="mx-3 max-w-2xl lg:mx-auto mt-20 lg:mt-80">
            <div className={`px-6 lg:px-24 py-16 ${styles.poolTxnContainer}`}>
                <div>
                    <ul >
                        <li className="mb-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-gray-400 italic uppercase text-sm lg:text-base">Your BALANCE</span>
                                <span className="text-gray-100 font-bold text-lg lg:text-xl">{amount}</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-gray-400 italic uppercase text-sm lg:text-base">Your maximum Contribution</span>
                                <span className="text-gray-100 font-bold text-lg lg:text-xl">{maxContribution}</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-gray-400 italic uppercase text-sm lg:text-base">Your Contribution</span>
                                <span className="text-gray-100 font-bold text-lg lg:text-xl">{contribution}</span>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-gray-400 italic uppercase text-sm lg:text-base">Remaining Contribution</span>
                                <span className="text-gray-100 font-bold text-lg lg:text-xl">{remContribution}</span>
                            </div>
                        </li>
                    </ul>
                    <form className="mt-10">
                        <div className="grid grid-rows-4 grid-cols-poolTxnSm grid-flow-col lg:grid-flow-row lg:grid-rows-2 lg:grid-cols-poolTxnLg">
                            <input className={`${styles.poolDetailInput} font-sm mb-3`} type="text" name="amount" id="amound" placeholder="Enter Amount in BUSD" />
                            <div className="lg:row-span-3 col-start-2 grid justify-center content-start" >
                                <button className="text-gray-100 border-2 px-6 py-1.5 border-gray-400 rounded-lg ">MAX</button>
                            </div>

                            <button className={`${styles.poolDetailButton} px-8 font-bold mb-3`}>BUY</button>
                            <input className={`${styles.poolDetailInput} font-sm mb-3`} type="text" name="amount" id="amound" placeholder="Claim Amount" />
                            <button className={`${styles.poolDetailButton} px-6 font-bold mb-3`}>CLAIM</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default PoolTransaction

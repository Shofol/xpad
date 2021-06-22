import styles from './PoolTransaction.module.css';

const PoolTransaction = () => {

    const amount = '1 BUSD';
    const maxContribution = '350 BUSD';
    const contribution = '50 BUSD';
    const remContribution = '10 BUSD'

    return (
        <div className="max-w-2xl mx-auto mt-20 lg:mt-80">
            <div className={"px-24 py-16 " + `${styles.poolTxnContainer}`}>
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
                        <div className="flex w-full justify-between mb-5">
                            <input className={`${styles.poolDetailInput} font-sm`} type="text" name="amount" id="amound" placeholder="Enter Amount in BUSD" />
                            <button className="text-gray-100 border-2 mx-4 px-5 border-gray-400 rounded-lg">MAX</button>
                            <button className={`${styles.poolDetailButton} px-8 font-bold`}>BUY</button>
                        </div>
                        <div className="flex w-full justify-between">
                            <input className={`${styles.poolDetailInput} font-sm`} type="text" name="amount" id="amound" placeholder="Claim Amount" />
                            <button className={`${styles.poolDetailButton} px-6 font-bold`}>CLAIM</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PoolTransaction

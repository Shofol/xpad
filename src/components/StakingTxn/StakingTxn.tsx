import { useState } from 'react'
import StakingTxnButton from '../StakingTxnButton/StakingTxnButton'
import styles from './StakingTxn.module.css'

const StakingTxn = () => {

    const [selectedToken, setSelectedToken] = useState('');
    const [selectedTxnMethod, setSelectedTxnMethod] = useState('deposit');
    const stakedAmount = '1 BUSD';
    const tier = '350 BUSD';
    const fee = '50 BUSD';

    return (
        <div className="max-w-sm md:max-w-md lg:max-w-3xl mx-4 md:mx-auto mt-36 lg:mt-52">
            <div className="flex text-base lg:text-3xl text-gray-100 font-bold justify-center items-center mb-12">
                <button onClick={() => { setSelectedTxnMethod('deposit') }} className={"focus:outline-none mx-5 lg:hover:border-b-8 hover:border-b-4 pb-1 rounded-md " + (selectedTxnMethod === 'deposit' ? 'lg:border-b-8 border-b-4 pb-1' : '')}>Deposit</button>
                <button onClick={() => { setSelectedTxnMethod('withdraw') }} className={"focus:outline-none mx-5 lg:hover:border-b-8 hover:border-b-4 pb-1 rounded-md " + (selectedTxnMethod === 'withdraw' ? 'lg:border-b-8 border-b-4 pb-1' : '')}>Withdraw</button>
            </div>

            <div className={`${styles.txnCard} px-5 py-10 lg:p-16`}>
                {selectedTxnMethod === 'deposit' && <div>
                    <p className="text-base lg:text-2xl text-center mb-10 text-gray-300 italic">Deposit NAUT token To <br className="lg:hidden" /> get listed</p>
                    <div className="flex">
                        <div className="flex-1">
                            <div className="py-20 flex flex-col justify-center items-center border-2 border-gray-200 rounded-xl h-full mx-2 lg:mx-8">
                                <p className="text-base lg:text-2xl text-gray-200 italic mb-5">Your Balance</p>
                                <p className="text-lg lg:text-3xl text-gray-100 font-bold underline mb-4">11 NAUT</p>
                                <p className="text-base lg:text-xl text-gray-400 italic ">4% Fee</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col px-2 lg:px-20 w-full h-full justify-between">
                                <StakingTxnButton isActive={selectedToken === 'bronze'} onSelect={(value: string) => { setSelectedToken(value) }} src="/bronze.svg" name="Bronze" />
                                <StakingTxnButton isActive={selectedToken === 'silver'} onSelect={(value: string) => { setSelectedToken(value) }} src="/silver.svg" name="Silver" />
                                <StakingTxnButton isActive={selectedToken === 'gold'} onSelect={(value: string) => { setSelectedToken(value) }} src="/gold.svg" name="Gold" />
                                <StakingTxnButton isActive={selectedToken === 'diamond'} onSelect={(value: string) => { setSelectedToken(value) }} src="/diamond.svg" name="Diamond" />
                                <StakingTxnButton isActive={selectedToken === 'platinum'} onSelect={(value: string) => { setSelectedToken(value) }} src="/platinum.svg" name="Platinum" />
                            </div>
                        </div>
                    </div>
                </div>}
                {
                    selectedTxnMethod === 'withdraw' && <div className="max-w-xs mx-auto">
                        <ul >
                            <li className="mb-2">
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-gray-400 italic uppercase text-sm lg:text-base">Total Staked Amount</span>
                                    <span className="text-gray-100 font-bold text-lg lg:text-xl">{stakedAmount}</span>
                                </div>
                            </li>
                            <li className="mb-2">
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-gray-400 italic uppercase text-sm lg:text-base">Tier</span>
                                    <span className="text-gray-100 font-bold text-lg lg:text-xl">{tier}</span>
                                </div>
                            </li>
                            <li className="mb-2">
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-gray-400 italic uppercase text-sm lg:text-base">Fee</span>
                                    <span className="text-gray-100 font-bold text-lg lg:text-xl">{fee}</span>
                                </div>
                            </li>
                        </ul>
                        <button className="txnButton text-xl font-bold px-8 mx-auto mt-10 py-1 flex justify-center items-center">Connect</button>
                    </div>
                }
            </div>

        </div>
    )
}

export default StakingTxn

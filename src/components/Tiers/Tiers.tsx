import React from 'react'
import Tier from './Tier'

const tiers: TierModel[] = [
    {
        name: 'Bronze',
        icon: './bronze.svg',
        tokenNumber: '2000',
        weightNumber: '5%'
    },
    {
        name: 'Silver',
        icon: './silver.svg',
        tokenNumber: '5000',
        weightNumber: '10%'
    },
    {
        name: 'Gold',
        icon: './gold.svg',
        tokenNumber: '15000',
        weightNumber: '15%'
    },
    {
        name: 'Diamond',
        icon: './diamond.svg',
        tokenNumber: '25000',
        weightNumber: '20%'
    },
    {
        name: 'Platinum',
        icon: './platinum.svg',
        tokenNumber: '50000',
        weightNumber: '50%'
    }
]


const Tiers = () => {
    return (
        <div className="max-w-sm sm:max-w-md lg:max-w-full mx-6 lg:mx-28 mt-20 lg:mt-80">
            <h2 className="text-base text-center text-gray-100 pl-10 mb-8 lg:text-5xl font-bold">TIERS</h2>
            <div className="pl-10 lg:flex lg:flex-wrap lg:max-w-screen-lg lg:justify-center lg:mx-auto">
                {
                    tiers.map(
                        (tier: TierModel, index: number) => {
                            return <Tier tier={tier} index={index} key={index} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export interface TierModel {
    name: string,
    icon: string,
    tokenNumber: string,
    weightNumber: string
}

export default Tiers

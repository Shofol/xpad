export const PoolsData: PoolModel[] = [
    {
        logo: './twin.png',
        name: 'TWIN',
        description: 'Twin is a DeFi protocol powered by smart contracts on the Binance Smart Chain network that enables the creation of synthetic assets called Twin Assets (T-Assets).',
        status: 'OPEN',
        conversionname: 'BUSD/TWIN',
        conversionRate: '1 BUSD = 100 TWIN',
        cap: '350K',
        access: 'PRIVATE',
        discordLink: 'https://discord.com/',
        telegramLink: 'www.discord.com',
        twitterLink: 'www.discord.com',
        websiteLink: 'www.discord.com',
        startLimit: '351K/530K',
        participants: '',
        progress: '70'
    },
    {
        logo: './twin.png',
        name: 'TWIN',
        description: 'Twin is a DeFi protocol powered by smart contracts on the Binance Smart Chain network that enables the creation of synthetic assets called Twin Assets (T-Assets).',
        status: 'CLOSED',
        conversionname: 'BUSD/TWIN',
        conversionRate: '1 BUSD = 100 TWIN',
        cap: '350K',
        access: 'PRIVATE',
        discordLink: 'https://discord.com/',
        telegramLink: 'www.discord.com',
        twitterLink: 'www.discord.com',
        websiteLink: 'www.discord.com',
        startLimit: '',
        participants: '1408',
        progress: '50'
    }
];


export interface PoolModel {
    logo: string,
    name: string,
    description: string,
    status: string,
    conversionname: string,
    conversionRate: string,
    cap: string,
    access: string,
    discordLink: string,
    telegramLink: string,
    twitterLink: string,
    websiteLink: string,
    startLimit: string,
    participants: string,
    progress: string
}
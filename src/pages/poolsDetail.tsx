import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import PoolDetail from '../components/PoolDetail/PoolDetail';
import Tiers from '../components/Tiers/Tiers';


const PoolsDetail = () => {

    let params: any = useParams();
    const poolId = params.poolId;

    const header = 'COLLATERALIZED ASSETS ON BSC';
    const description = 'Twin is a DeFi protocol powered by smart contracts on the Binance Smart Chain network that enables the creation of synthetic assets called Twin Assets (T-Assets)';
    const logo = './twin.png';

    return (
        <div>
            <p className='mt-50 text-white'>{poolId}</p>
            <Header header={header} description={description} logo={logo} />
            <PoolDetail />
            <Tiers />
        </div>
    )
}

export default PoolsDetail

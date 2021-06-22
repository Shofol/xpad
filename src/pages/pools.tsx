import { PoolModel, PoolsData } from '../data/poolsData';
import Pool from '../components/Pool/Pool'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import PoolsDetail from './poolsDetail';

const Pools = () => {
    let { path, url } = useRouteMatch();
    const pools: PoolModel[] = PoolsData;

    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <div className="max-w-sm md:max-w-xl md:mx-auto lg:max-w-full mx-6 lg:mx-28 mt-20 lg:mt-52">
                        <h1 className="text-gray-100 font-base uppercase font-bold text-center lg:text-5xl">Pools</h1>
                        <div className="flex flex-col lg:flex-row lg:mt-24 items-start justify-center">
                            {
                                pools.map(
                                    (pool: PoolModel, index) => <Link to={`${url}/${pool.name.toLowerCase()}`}> <Pool key={index} pool={pool} /></Link>
                                )
                            }
                        </div>
                    </div>
                </Route>
                <Route path={`${path}/:poolId`}>
                    <PoolsDetail />
                </Route>
            </Switch>


        </div>

    )
}

export default Pools

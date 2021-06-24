import styles from './StakingTxnButton.module.css';

const StakingTxnButton = (props: any) => {

    const { src, name, onSelect, isActive } = props;

    return (
        <button onClick={() => { onSelect(name.toLowerCase()) }} className={`txnButton text-lg lg:text-xl font-bold px-3 py-1 flex justify-center items-center ` + (isActive ? `${styles.activeButton}` : '')}>
            <img src={src} alt={name} width="16px" height="16px" className="mr-3" />
            {name}
        </button>
    )
}

export default StakingTxnButton

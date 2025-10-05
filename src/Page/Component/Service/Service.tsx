import s from './Service.module.scss';

import { PiFan } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { RiSofaLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";

const Service = () => {
    const ServiceList = [
        {icon: <PiFan size={30} />, name: 'Кондиціонер'},
        {icon: <FaWifi size={30} />, name: 'Wi-Fi'},
        {icon: <FaTv size={30} />, name: 'TV'},
        {icon: <ImManWoman size={30} />, name: 'Туалет'},
        {icon: <RiSofaLine size={30} />, name: 'Зручні сидіння'},
        {icon: <FaHandHoldingHeart size={30} />, name: 'Перевозимо тварин'},
    ]
    return (
        <div className={s.ServiceContainer}>
            <div className={s.TitleBlockService}>
                <h1 className={s.TitleService}>Сервіс</h1>
                <p className={s.PTextTitle}>Найкращі умови для вашого комфорту</p>
            </div>
            <div className={s.ServiceBlockFlex}>
                {ServiceList.map((e, i) => (
                    <div className={s.ServiceBlock} key={i}>
                        <div className={s.IconService}>{e.icon}</div>
                        <p className={s.NameService}>{e.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );}   
export default Service;
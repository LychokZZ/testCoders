import s from './TransferInfo.module.scss';

import { AiOutlineFire } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbTrain } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineLocalPhone } from "react-icons/md";

import React from 'react';

interface InfoType {
    CompanyName: string;
    TransferCount: number;
    Site: string;
    Phone: string;
    AdditionalInfo: {Icon: React.ReactNode,Title: string; Value: string | number; addition?: string}[];
}

const TransferInfo = () => {
    const Route = 'Головна / Профіль перевізника / Stripe';

    const Info:InfoType = {
        CompanyName: 'Stripe',
        TransferCount: 43,
        Site : 'https://stripe.com',
        Phone: '+380 67 123 45 67',
        AdditionalInfo: [
            {Icon: <AiOutlineFire/> ,Title: 'На ринку від', Value: '31.05.2011', addition: ''},
            {Icon: <FaPeopleGroup/> ,Title: 'Перевезених пасажирів', Value: 4000 ,addition: '+'},
            {Icon: <TbTrain/> ,Title: 'Автопарк', Value: 8 ,addition: 'бусів'},
            {Icon: <LuMapPin/> ,Title: 'Обслуговуєм', Value: 8 ,addition: 'країн'},
            {Icon: <BsBuildings/> ,Title: 'Місто ', Value: 'Львів'},
        ]
    }
    return (
        <div className={s.TransferInfoContainer}>
            <div className={s.RouteBlockContainer}>
                <p>{Route}</p>
            </div>
            <div className={s.InfoBlockContainer}>
                <div className={s.LogoCompany}>
                    <img src='./LogoCompany.png' alt='Logo' className={s.LogoCompany}/>
                </div>
                <div className={s.InfoBlock}>
                    <div className={s.CompanyNameBlock}>
                        <div className={s.LogoCompanyMobile}>
                            <img src='./LogoCompany.png' alt='Logo' className={s.LogoCompanyMobile}/>
                        </div>
                        <h1 className={s.CompanyNameStyle}>{Info.CompanyName}</h1>
                        <p className={s.CountTransferStyle}>{Info.TransferCount} Поїздок</p>
                    </div>
                    <div className={s.ContactInfo}>
                        <p className={s.InfoContactStyle}><TfiWorld size={20}  style={{margin:'5px'}}/>{Info.Site}</p>
                        <p className={s.InfoContactStyle}><MdOutlineLocalPhone size={24} style={{margin:'5px'}} />{Info.Phone}</p>
                    </div>
                    <div className={s.AdditionalInfoBlock}>
                        {Info.AdditionalInfo.map((e, i) => (
                            <div className={s.StyleCardInfo} key={i}>
                                <div className={s.IconSortStyle}>{e.Icon}</div>
                                <div className={s.TextInfoStyle}>
                                    <p className={s.TextInfoTitleStyle}>{e.Title}</p>
                                    <p>{e.Value} {e.addition}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );}   
export default TransferInfo;
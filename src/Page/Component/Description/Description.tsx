import { useState } from 'react';
import s from './Description.module.scss';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import Calendar from './Calendar';

const Description = () => {
    const Text = 'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.'
    const Socials = [
        {name: 'Facebook', link: 'facebook.com/stripe', icon: <FaFacebookF size={18}/>},
        {name: 'Twitter', link: 'twitter.com/stripe', icon: <FaTwitter size={18}/>},]

    const bookings = [
        { date: "2025-11-02", drivers: [{ id: 1, name: "Олександр", experience: 5 }] },
        { date: "2025-11-04", drivers: [{ id: 2, name: "Володимир", experience: 3 }] },
        { date: "2025-11-20", drivers: [{ id: 3, name: "Ірина", experience: 7 }] },
        { date: "2025-11-24", drivers: [
            { id: 4, name: "Михайло", experience: 4 },
            { id: 5, name: "Юлія", experience: 2 },
            ]},
        ];

    const Countries = [
            {Flag: './Flag/Франція.svg', Name: 'Франція'},
            {Flag: './Flag/Італія.svg', Name: 'Італія'},
            {Flag: './Flag/Німеччина.svg', Name: 'Німеччина'},
            {Flag: './Flag/Нідерланди.svg', Name: 'Нідерланди'},
            {Flag: './Flag/Іспанія.svg', Name: 'Іспанія'},
            {Flag: './Flag/Польша.svg', Name: 'Польша'},
            {Flag: './Flag/Чехія.svg', Name: 'Чехія'},
            {Flag: './Flag/Словаччина.svg', Name: 'Словаччина'},
        ]

    const [AllCountry ,setAllCountry] = useState(false);
    return (
        <div className={s.DescriptionContainer}>
            <div className={s.DescriptionBlockTransfer}>
                <h1 className={s.TitleStyleTransfer}>Опис перевізника</h1>
                <p className={s.DescriptionStyleTransfer}>{Text}</p>
                <div>
                    <h1 className={s.TitleStyleTransfer}>Ми у соц. мережах</h1>
                    <div className={s.SocialsBlockButton}>
                        {Socials.map((e, i) => (
                            <div key={i} className={s.SocialsButtons}>
                                <div>{e.icon}</div>
                               <p >{e.link}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.PhotoContainer}>
                    <img src='./Bus1.jpg' alt='Bus1' className={s.PhotoStyle}/>
                    <img src='./Bus3.jpg' alt='Bus3' className={s.PhotoStyle}/>
                    <img src='./Bus2.jpg' alt='Bus2' className={s.PhotoStyle2}/>
                </div>
            </div>
            <div className={s.AllCountryFlex}>
                <div>
                    <h1 className={s.TitleCountry}>Обслуговуєм країни</h1>
                    <div className={s.CountriesBlock}>
                        {Countries.splice(0,AllCountry ? 5 :8).map((e, i) => (
                            <div key={i} className={s.CountryCard}>
                                <img src={e.Flag} alt={e.Name} className={s.FlagStyle}/>
                                <p>{e.Name}</p>
                            </div>
                        ))}
                    </div>
                    {AllCountry ?
                    <h3 onClick={()=>setAllCountry(prev=>!prev)} className={s.AllCountryButton}>Усі країни <IoIosArrowDown className={s.IconAllCountry}/></h3>
                    :
                    <h3 onClick={()=>setAllCountry(prev=>!prev)} className={s.AllCountryButton}>Згорнути <IoIosArrowUp className={s.IconAllCountry}/></h3>
                    }
                    
                    <div className={s.LineBottom}></div>
                </div>
                <div>
                    <h1 className={s.TitleCountry}>Календар поїздок</h1>
                    <div className={s.CalendarBlock}>
                        <button className={s.ButtonBuy}><GoPlus  size={20}/> Купити квиток</button>
                        <Calendar bookings={bookings}/>
                    </div>
                </div>
            </div>
        </div>
    );}   
export default Description;
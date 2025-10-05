import { link } from 'fs';
import s from './Footer.module.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaBasketball } from "react-icons/fa6";


import { MdOutlinePhone } from "react-icons/md";
import { TbMail } from "react-icons/tb";
import { useEffect, useState } from 'react';

const Footer = () => {
    const FooterList = [{icon: <FaFacebookF/>, link: 'facebook.com/'},
                        {icon: <FaInstagram/>, link: 'instagram.com/'},
                        {icon: <FaLinkedinIn/>, link: 'linkedin.com/'},
                        {icon: <FaTwitter/>, link: 'twitter.com/'},
                        {icon: <FaBasketball/>, link: 'dribbble.com/'}]

    const [IsMobile , setIsMobile] = useState(false)
    useEffect(()=>{
        if (typeof window === "undefined") return;
        if(window.innerWidth <= 880){
            setIsMobile(true)
        }
    },[])

    return (
        <div className={s.FooterContainer}>
            <div className={s.FooterBlockFlex}>
                <div className={s.TransporterBlockLogo}>
                    <img src='./LogoBotoom.png' alt='Logo' className={s.LogoStyle}/>
                    <p className={s.TitleLogo}>Платформа пошуку перевізниківта бронювання поїздок</p>
                </div>
                <div className={s.MobileFooter}>
                    <div className={s.TransporterBlock}>
                        <h3>Клієнтам</h3>
                        <div className={s.ButtonBlockFlex}>
                            <button className={s.ButtonStyle}>Головна</button>
                            <button className={s.ButtonStyle}>Про нас</button>
                            <button className={s.ButtonStyle}>Ціни</button>
                            <button className={s.ButtonStyle}>FAQ</button>
                            <button className={s.ButtonStyle}>Політика приватності</button>
                        </div>
                    </div>
                    <div className={s.TransporterBlock}>
                        <h3>Перевізникам</h3>
                        <div className={s.ButtonBlockFlex}>
                            <button className={s.ButtonStyle}>Help Docs</button>
                            <button className={s.ButtonStyle}>Особистий кабінет</button>
                            <button className={s.ButtonStyle}>Оновлення</button>
                            <button className={s.ButtonStyle}>Контакти</button>
                        </div>
                    </div>
                    {!IsMobile ? 
                        <div>
                            <h3>Зворотній зв'язок</h3>
                            <p className={s.ConectTitle}>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
                            <div>
                                <input className={s.SendInput} placeholder='Email Address'/>
                                <button className={s.SendButton}>Надіслати</button>
                            </div>
                            <div>
                                <p className={s.ContactInfoStyle}><MdOutlinePhone size={20} style={{marginRight:'5px', color:'#26A4FF'}}/> +38 (099) 999-99-99</p>
                                <p className={s.ContactInfoStyle}><TbMail size={20} style={{marginRight:'5px', color:'#26A4FF'}}/>gmail@gmail.com</p>
                            </div>
                        </div>
                : <span></span> }
                    
                </div>
                {IsMobile ? 
                        <div>
                            <h3>Зворотній зв'язок</h3>
                            <p className={s.ConectTitle}>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
                            <div>
                                <input className={s.SendInput} placeholder='Email Address'/>
                                <button className={s.SendButton}>Надіслати</button>
                            </div>
                            <div>
                                <p className={s.ContactInfoStyle}><MdOutlinePhone size={20} style={{marginRight:'5px', color:'#26A4FF'}}/> +38 (099) 999-99-99</p>
                                <p className={s.ContactInfoStyle}><TbMail size={20} style={{marginRight:'5px', color:'#26A4FF'}}/>gmail@gmail.com</p>
                            </div>
                        </div>
                : <span></span> }
            </div>
            <div className={s.BottomLine}></div>
            <div className={s.FooterBottomBlock}>
                <p>2024 @ Sprinters. All rights reserved.</p>  
                <div className={s.SocialsFlex}>
                    {FooterList.map((e, i) => (
                        <div key={i} className={s.SocialsBlockButton}>
                            <div style={{marginTop:'4px'}} >{e.icon}</div>
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    );}
export default Footer;
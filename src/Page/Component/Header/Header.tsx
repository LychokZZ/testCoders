import { useState } from 'react';
import s from './Header.module.scss';

import { TbMenu2 } from "react-icons/tb";

const Header = () => {
    const [Open, setOpen] = useState(false);
    return (
        <div className={s.HeaderContainer}>
            <div>
                <img src='./LogoSite.png' alt='Logo' className={s.LogoStyle}/>
            </div>
            <div className={Open === true ? s.ButtonBlock : s.ButtonClose}>
                <button className={s.ButtonNonActive}>Головна</button>
                <button className={s.ButtonNonActive}>Перевізникам</button>
                <button className={s.ButtonNonActive}>Про нас</button>
                <button className={s.ButtonActive}>Профіль перевізника</button>
            </div>
            
            <div className={s.RegBlockContainer}>
                <button className={s.CreateProfile}>Створити профіль</button>
                <div className={s.StyleLine}></div>
                <button className={s.LoginButton}>Увійти</button>
            </div>
            <div onClick={()=>setOpen(prev=>!prev)} className={s.MenuIcon}>
                <TbMenu2 />
            </div>
            
        </div>
    );}
export default Header;
import s from './Drivers.module.scss';

import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { useEffect, useState } from 'react';

import { RiCloseLargeLine } from "react-icons/ri";

const Drivers = () => {
    
    const DriversList = [
        {icon: './Avatar.jpg', name: 'Олександр', experience: 5 , medialinks: ['linkedin.com/', 'instagram.com/']},
        {icon: './Avatar.jpg', name: 'Володимр', experience: 7 , medialinks: ['linkedin.com/', 'instagram.com/']},
        {icon: './Avatar.jpg', name: 'Ірина', experience: 1 , medialinks: ['linkedin.com/', 'instagram.com/']},
        {icon: './Avatar.jpg', name: 'Михайло', experience: 1 , medialinks: ['linkedin.com/', 'instagram.com/']},
        {icon: './People.jpg', name: 'Юлія', experience: 2 , medialinks: ['linkedin.com/', 'instagram.com/']},
        {icon: './Avatar.jpg', name: 'Микола', experience: 6 , medialinks: ['linkedin.com/', 'instagram.com/']},
        {icon: './Avatar.jpg', name: 'Данило', experience: 3 , medialinks: ['linkedin.com/', 'instagram.com/']},
    ]
    const [Modal,setModal] = useState(false)
    const [IsMobile , setIsMobile] = useState(false)
    useEffect(()=>{
        if (typeof window === "undefined") return;
        if(window.innerWidth <= 880){
            setIsMobile(true)
        }
    },[])
    
    return (
        <div className={s.DriversContainer}>
            <div className={s.MyDrivers}>
                <h1 className={s.TitleDrivers}>Наші водії</h1>
                <button onClick={()=>setModal(prev=>!prev)} className={s.ButtonAllDrivers}>Усі водії ({DriversList.length})</button>
            </div>
            <div className={s.DriversBlockFlex}>
                {DriversList.slice(0,(IsMobile ? 2:5)).map((e, i) => (
                    <div className={s.DriverBlock} key={i}>
                        <div className={s.IconContainer}><img className={s.IconContainer} src={e.icon}></img></div>
                        <p className={s.NameDrivers}>{e.name}</p>
                        <p style={{fontSize:IsMobile? '12px' : '15px' }}>Досвід роботи: {e.experience} років</p>
                        <div className={s.MediaFlex}>
                            <div><FaInstagram size={18}/></div>
                            <div><CiLinkedin size={20}/></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={s.BottomLineDrivers}>
                
            </div>
            <div className={Modal ===true ? s.backdrop : s.backdropno}>
                <div className={Modal ===true ? s.ModalWindowDrivers : s.ModalWindowDriversNo   }>
                <button className={ Modal ===true ? s.Closebutton: s.ClosebuttonNo} onClick={()=>setModal(prev=>!prev)}><RiCloseLargeLine/></button>
                <div className={s.DriversBlockFlexModal}>
                    {DriversList.map((el, k) => (
                        <div className={s.DriverBlockModal} key={k}>
                            <div className={s.IconContainer}><img className={s.IconContainer} src={el.icon}></img></div>
                            <p className={s.NameDrivers}>{el.name}</p>
                            <p style={{fontSize: '12px'}}>Досвід роботи: {el.experience} років</p>
                            <div className={s.MediaFlex}>
                                <div><FaInstagram size={18}/></div>
                                <div><CiLinkedin size={20}/></div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            
            
        </div>
    );}   
export default Drivers;
import { useEffect, useState } from 'react';
import s from './Comments.module.scss';

import { FaStar } from "react-icons/fa6";

import { CommentsArray } from '../../Add/Coments';
import {CommentsType} from '../../Add/Coments';

const Comments = () => {
    const Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

   

    const [NumberComments ,setNumberComments] = useState(0);
    const [ArrayComments ,setArrayComments] = useState(CommentsArray);

    useEffect(() => {
        
        if (NumberComments == 0){
            setArrayComments(CommentsArray.slice(0,2))
        }
        if (NumberComments == 1){
            setArrayComments(CommentsArray.slice(2,4))
        }
        if (NumberComments == 2){
            setArrayComments(CommentsArray.slice(4,6))
        }
        if (NumberComments == 3){
            setArrayComments(CommentsArray.slice(6,8))
        }else if (NumberComments == 4){
            setNumberComments(0)
        }

    }, [NumberComments])

    useEffect(() => {
        
        const interval = setInterval(() => {
            setNumberComments(prev => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [])


    const [IsMobile , setIsMobile] = useState(false)
    useEffect(()=>{
        if (typeof window === "undefined") return;
        if(window.innerWidth <= 880){
            setIsMobile(true)
        }
    },[])

    const Star = FaStar as unknown as React.FC;
    return (
        <div className={s.CommentsContainer}>
            <div className={s.FlexContainerForComments}>
                <div className={s.CommentsTitleContainer}>
                    <div className={s.TitleTitlePeople}>
                        <h1><span style={{color:'#25324B'}}>Що</span>  кажуть люди?</h1>
                    </div>
                    <p>{Text}</p>
                    <button className={s.ReqvestButton}>Залишити відгук</button>
                </div>
                <div className={s.CommentsContainerFlex}>
                    <div className={s.CommentsBlockFlex}>
                        {ArrayComments.slice(0,IsMobile ? 1 :2).map((e, i) => (
                        <div key={i} className={s.CommentContainerBlockStyle}>
                            <div className={s.FlexCommentBlock}>
                                <div className={s.IconComment}><img className={s.IconComment} src={e.Icon}></img></div>
                                <div className={s.NameCityDataComment}>
                                    <h2 className={s.NameComment}>{e.Name}</h2>
                                    <p className={s.CityComment}>{e.City}</p>
                                    <p className={s.DataComment}>{e.Data}</p>
                                </div>
                            </div>
                            <p className={s.CommentTextStyle}>{e.Text}</p>
                            <div className={s.RateBlock}>
                                {Array.from({ length: e.Rate }, (_, i) => (
                                    <li key={i} className={s.Star}><Star /></li>
                                ))}
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className={s.CircleBottomComment}>
                        {Array.from({ length: 8 }, (_, i) => (
                            <li key={i} className={s.Star}><div className={NumberComments == i ? s.Circle : s.CirclGrey }/></li>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );}   
export default Comments;
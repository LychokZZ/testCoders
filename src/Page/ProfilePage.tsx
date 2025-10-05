import Comments from './Component/Comments/Comments';
import Description from './Component/Description/Description';
import Drivers from './Component/Drivers/Drivers';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Service from './Component/Service/Service';
import TransferInfo from './Component/TransferInfo/TransferInfo';

import s from './ProfilePage.module.scss';

const ProfilePage = () => {
    return (
        <div className={s.ProfilePageContainer}>
            <Header/>
            <TransferInfo/>
            <Description/>
            <Drivers/>
            <Service/>
            <Comments/>
            <Footer/>
        </div>
    );}   
export default ProfilePage;
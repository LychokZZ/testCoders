// src/types/react-icons-overrides.d.ts

declare module 'react-icons' {
  import * as React from 'react';
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = React.ComponentType<IconBaseProps>;
  export const IconContext: React.Context<IconBaseProps>;
}

/** ===== FA6 ===== */
declare module 'react-icons/fa6' {
  import { IconType } from 'react-icons';
  export const FaStar: IconType;
  export const FaFacebookF: IconType;
  export const FaInstagram: IconType;
  export const FaLinkedinIn: IconType;
  export const FaTwitter: IconType;
  export const FaBasketball: IconType;
  export const FaPeopleGroup: IconType;
  export const FaWifi: IconType;
  export const FaTv: IconType;
  export const FaHandHoldingHeart: IconType;
}

/** ===== (опційно) FA v4/v5, якщо десь ще імпортуєш з 'react-icons/fa' ===== */
declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  export const FaWifi: IconType;
  export const FaTv: IconType;
  export const FaFacebookF: IconType;
  export const FaInstagram: IconType;
  export const FaLinkedinIn: IconType;
  export const FaTwitter: IconType;
  export const FaHandHoldingHeart: IconType;
}

/** ===== Інші набори, які ти використовуєш ===== */
declare module 'react-icons/md' {
  import { IconType } from 'react-icons';
  export const MdOutlinePhone: IconType;
  export const MdOutlineLocalPhone: IconType;
}

declare module 'react-icons/io' {
  import { IconType } from 'react-icons';
  export const IoIosArrowDown: IconType;
  export const IoIosArrowUp: IconType;
}
declare module 'react-icons/ri' {
  import { IconType } from 'react-icons';
  export const RiCloseLargeLine: IconType;
}
declare module 'react-icons/ri' {
  import { IconType } from 'react-icons';
  export const RiCloseLargeLine: IconType;
  export const RiSofaLine: IconType;
}

declare module 'react-icons/go' {
  import { IconType } from 'react-icons';
  export const GoPlus: IconType;
}

declare module 'react-icons/ci' {
  import { IconType } from 'react-icons';
  export const CiLinkedin: IconType;
}

declare module 'react-icons/ri' {
  import { IconType } from 'react-icons';
  export const RiCloseLargeLine: IconType;
}

declare module 'react-icons/tb' {
  import { IconType } from 'react-icons';
  export const TbMail: IconType;
  export const TbTrain: IconType;
  export const TbMenu2: IconType;
}

declare module 'react-icons/pi' {
  import { IconType } from 'react-icons';
  export const PiFan: IconType;
}

declare module 'react-icons/im' {
  import { IconType } from 'react-icons';
  export const ImManWoman: IconType;
}

declare module 'react-icons/lu' {
  import { IconType } from 'react-icons';
  export const LuMapPin: IconType;
}

declare module 'react-icons/bs' {
  import { IconType } from 'react-icons';
  export const BsBuildings: IconType;
}

declare module 'react-icons/tfi' {
  import { IconType } from 'react-icons';
  export const TfiWorld: IconType;
}

declare module 'react-icons/ai' {
  import { IconType } from 'react-icons';
  export const AiOutlineFire: IconType;
}

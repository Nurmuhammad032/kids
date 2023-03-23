import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

interface CustomArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
}

export function CustomLeftArrow({
  className,
  style,
  onClick,
}: CustomArrowProps) {
  return (
    <svg
      className={className}
      style={style}
      onClick={onClick}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.5"
        cx="22.8106"
        cy="22.8106"
        r="22.8106"
        transform="matrix(-1 0 0 1 45.6211 0)"
        fill="white"
      />
      <path
        d="M23.9581 30.5852L20.3909 27.018L18.2017 24.8399C17.2793 23.9175 17.2793 22.4173 18.2017 21.4949L23.9581 15.7385C24.7138 14.9828 26.0029 15.5273 26.0029 16.583L26.0029 22.8173L26.0029 29.7406C26.0029 30.8075 24.7138 31.3409 23.9581 30.5852Z"
        fill="white"
      />
    </svg>
  );
}

export function CustomRightArrow({
  className,
  style,
  onClick,
}: CustomArrowProps) {
  return (
    <svg
      className={className}
      style={style}
      onClick={onClick}
      width="47"
      height="46"
      viewBox="0 0 47 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23.4317" cy="22.8106" r="22.8106" fill="white" />
      <path
        d="M22.2841 30.5852L25.8513 27.018L28.0405 24.8399C28.9629 23.9175 28.9629 22.4173 28.0405 21.4949L22.2841 15.7385C21.5284 14.9828 20.2393 15.5273 20.2393 16.583L20.2393 22.8173L20.2393 29.7406C20.2393 30.8075 21.5284 31.3409 22.2841 30.5852Z"
        fill="url(#paint0_linear_97_21)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_97_21"
          x1="29.474"
          y1="41.613"
          x2="18.9454"
          y2="41.1296"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A35FF" />
          <stop offset="1" stopColor="#9772FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CustomLeftArrow2({
  className,
  style,
  onClick,
}: CustomArrowProps) {
  return (
    <svg
      className={className}
      style={style}
      onClick={onClick}
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32.5" cy="32.5" r="32.5" fill="white" />
      <path
        d="M33.135 22.4232L28.0525 27.5057L24.9333 30.609C23.6192 31.9232 23.6192 34.0607 24.9333 35.3748L33.135 43.5765C34.2116 44.6532 36.0483 43.8773 36.0483 42.3732V33.4907V23.6265C36.0483 22.1065 34.2116 21.3465 33.135 22.4232Z"
        fill="url(#paint0_linear_97_60)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_97_60"
          x1="22.8909"
          y1="6.71101"
          x2="37.8918"
          y2="7.39971"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A35FF" />
          <stop offset="1" stopColor="#9772FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CustomRightArrow2({
  className,
  style,
  onClick,
}: CustomArrowProps) {
  return (
    <svg
      className={className}
      style={style}
      onClick={onClick}
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32.5" cy="32.5" r="32.5" fill="white" />
      <path
        d="M30.865 43.5768L35.9475 38.4943L39.0667 35.391C40.3808 34.0768 40.3808 31.9393 39.0667 30.6252L30.865 22.4235C29.7884 21.3468 27.9517 22.1227 27.9517 23.6268L27.9517 32.5093L27.9517 42.3735C27.9517 43.8935 29.7884 44.6535 30.865 43.5768Z"
        fill="url(#paint0_linear_97_53)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_97_53"
          x1="41.1091"
          y1="59.289"
          x2="26.1082"
          y2="58.6003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A35FF" />
          <stop offset="1" stopColor="#9772FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CustomLeftArrow3({
  className,
  style,
  onClick,
}: CustomArrowProps) {
  return (
    <svg
      className={className}
      style={style}
      onClick={onClick}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_97_89)" />
      <path
        d="M32.1854 40.0702L24.3071 32.1918C23.3767 31.2614 23.3767 29.7389 24.3071 28.8085L32.1854 20.9302"
        stroke="white"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_97_89"
          x1="-5.24017"
          y1="-41.1765"
          x2="68.7745"
          y2="-34.9537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A35FF" />
          <stop offset="1" stopColor="#9772FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CustomRightArrow3({
  className,
  style,
  onClick,
}: CustomArrowProps) {
  return (
    <svg
      className={className}
      style={style}
      onClick={onClick}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_97_92)" />
      <path
        d="M25.8146 40.0702L33.6929 32.1918C34.6234 31.2614 34.6234 29.7389 33.6929 28.8085L25.8146 20.9302"
        stroke="white"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_97_92"
          x1="-5.24017"
          y1="-41.1765"
          x2="68.7745"
          y2="-34.9537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A35FF" />
          <stop offset="1" stopColor="#9772FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

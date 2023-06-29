type IconProps = {
  size?: number;
  color?: keyof typeof COLORS;
  fill?: boolean;
};

const COLORS = {
  primary: '#223E3F',
  secondary: '#CF8420',
  'light-gray': '#7B7B7B',
  black: '#000000',
  white: '#ffffff',
};

export const BurgerMenuIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2.14282H20M2 9.28568H20M2 16.4285H20"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CartIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 24.1904C5.45 24.1904 4.979 23.9571 4.587 23.4904C4.195 23.0237 3.99933 22.4634 4 21.8094C4 21.1547 4.196 20.594 4.588 20.1273C4.98 19.6606 5.45067 19.4277 6 19.4285C6.55 19.4285 7.021 19.6618 7.413 20.1285C7.805 20.5951 8.00067 21.1555 8 21.8094C8 22.4642 7.804 23.0249 7.412 23.4916C7.02 23.9582 6.54933 24.1912 6 24.1904ZM16 24.1904C15.45 24.1904 14.979 23.9571 14.587 23.4904C14.195 23.0237 13.9993 22.4634 14 21.8094C14 21.1547 14.196 20.594 14.588 20.1273C14.98 19.6606 15.4507 19.4277 16 19.4285C16.55 19.4285 17.021 19.6618 17.413 20.1285C17.805 20.5951 18.0007 21.1555 18 21.8094C18 22.4642 17.804 23.0249 17.412 23.4916C17.02 23.9582 16.5493 24.1912 16 24.1904ZM5.15 5.14276L7.55 11.0951H14.55L17.3 5.14276H5.15ZM4.2 2.76181H18.95C19.3333 2.76181 19.625 2.96538 19.825 3.37253C20.025 3.77967 20.0333 4.19118 19.85 4.60705L16.3 12.2261C16.1167 12.6229 15.8707 12.9305 15.562 13.1487C15.2533 13.367 14.916 13.4761 14.55 13.4761H7.1L6 15.857H18V18.238H6C5.25 18.238 4.68333 17.8459 4.3 17.0618C3.91667 16.2777 3.9 15.4991 4.25 14.7261L5.6 11.8094L2 2.76181H0V0.380859H3.25L4.2 2.76181Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const SearchIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const TruckIcon = ({ size = 20 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512">
    <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
  </svg>
);

export const CreditCardIcon = ({ size = 20 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 576 512">
    <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
  </svg>
);

export const WhatsAppIcon = ({ size = 20 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export const CloseIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 384 512"
    fill={COLORS[color]}
  >
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

export const UserIcon = ({ size = 20 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512">
    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
  </svg>
);

export const AtIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.96067 11.3413C9.6591 11.3413 10.2541 11.0826 10.78 10.5739C11.2888 10.0479 11.5475 9.45292 11.5475 8.75449C11.5475 8.05606 11.2888 7.46109 10.78 6.93511C10.2541 6.42637 9.6591 6.16769 8.96067 6.16769C8.26223 6.16769 7.66727 6.42637 7.14129 6.93511C6.63255 7.46109 6.37387 8.05606 6.37387 8.75449C6.37387 9.45292 6.63255 10.0479 7.14129 10.5739C7.66727 11.0826 8.26223 11.3413 8.96067 11.3413ZM8.96067 0.131836C11.3319 0.131836 13.3582 0.994101 15.0396 2.67552C16.7211 4.35694 17.5833 6.38326 17.5833 8.75449V10.0048C17.5833 10.867 17.2815 11.6 16.7211 12.2036C16.1175 12.7813 15.4277 13.0658 14.5654 13.0658C13.5307 13.0658 12.677 12.6347 12.0303 11.7724C11.1681 12.6347 10.1506 13.0658 8.96067 13.0658C7.77936 13.0658 6.76189 12.6347 5.90825 11.8069C5.08047 10.9533 4.64934 9.94442 4.64934 8.75449C4.64934 7.57319 5.08047 6.55571 5.90825 5.70207C6.76189 4.8743 7.77936 4.44316 8.96067 4.44316C10.1506 4.44316 11.1594 4.8743 12.0131 5.70207C12.8409 6.55571 13.272 7.57319 13.272 8.75449V10.0048C13.272 10.3583 13.41 10.6687 13.6686 10.936C13.9273 11.2033 14.2291 11.3413 14.5654 11.3413C14.9275 11.3413 15.2293 11.2033 15.488 10.936C15.7467 10.6687 15.8588 10.3583 15.8588 10.0048V8.75449C15.8588 6.86613 15.1948 5.24507 13.8325 3.88269C12.4701 2.52031 10.849 1.85637 8.96067 1.85637C7.07231 1.85637 5.45125 2.52031 4.08887 3.88269C2.72649 5.24507 2.06254 6.86613 2.06254 8.75449C2.06254 10.6429 2.72649 12.2639 4.08887 13.6263C5.45125 14.9887 7.07231 15.6526 8.96067 15.6526H13.272V17.3771H8.96067C6.58944 17.3771 4.56311 16.5149 2.8817 14.8335C1.20028 13.152 0.338013 11.1257 0.338013 8.75449C0.338013 6.38326 1.20028 4.35694 2.8817 2.67552C4.56311 0.994101 6.58944 0.131836 8.96067 0.131836Z"
      fill="black"
    />
  </svg>
);

export const LockIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.30223 19.4784C1.81316 19.4784 1.39434 19.3041 1.04577 18.9555C0.697201 18.6069 0.523212 18.1884 0.523805 17.6999V8.80783C0.523805 8.31877 0.69809 7.89995 1.04666 7.55138C1.39523 7.20281 1.81375 7.02882 2.30223 7.02941H3.19144V5.25099C3.19144 4.02091 3.62508 2.97224 4.49235 2.10496C5.35963 1.23768 6.40801 0.804339 7.63749 0.804932C8.86757 0.804932 9.91625 1.23857 10.7835 2.10585C11.6508 2.97313 12.0841 4.0215 12.0835 5.25099V7.02941H12.9728C13.4618 7.02941 13.8806 7.2037 14.2292 7.55227C14.5778 7.90084 14.7518 8.31936 14.7512 8.80783V17.6999C14.7512 18.189 14.5769 18.6078 14.2283 18.9564C13.8798 19.305 13.4612 19.479 12.9728 19.4784H2.30223ZM2.30223 17.6999H12.9728V8.80783H2.30223V17.6999ZM7.63749 15.0323C8.12656 15.0323 8.54538 14.858 8.89395 14.5095C9.24252 14.1609 9.41651 13.7424 9.41592 13.2539C9.41592 12.7648 9.24163 12.346 8.89306 11.9974C8.54449 11.6489 8.12597 11.4749 7.63749 11.4755C7.14843 11.4755 6.72961 11.6498 6.38104 11.9983C6.03247 12.3469 5.85848 12.7654 5.85907 13.2539C5.85907 13.743 6.03336 14.1618 6.38193 14.5103C6.7305 14.8589 7.14902 15.0329 7.63749 15.0323ZM4.96986 7.02941H10.3051V5.25099C10.3051 4.50998 10.0458 3.88012 9.52707 3.36141C9.00836 2.84271 8.3785 2.58335 7.63749 2.58335C6.89649 2.58335 6.26663 2.84271 5.74792 3.36141C5.22921 3.88012 4.96986 4.50998 4.96986 5.25099V7.02941Z"
      fill="black"
    />
  </svg>
);

export const ErrorIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="#DC2626"
    viewBox="0 0 512 512"
  >
    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
  </svg>
);

export const CheckIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="#fff"
    viewBox="0 0 448 512"
  >
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);

export const FilterIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.7 0.266602C4.96999 0.266453 4.26234 0.518531 3.69683 0.980174C3.13131 1.44182 2.74267 2.08467 2.59667 2.79993H0V4.0666H2.59667C2.74203 4.78245 3.1304 5.42604 3.69597 5.88831C4.26154 6.35058 4.96954 6.60311 5.7 6.60311C6.43046 6.60311 7.13846 6.35058 7.70403 5.88831C8.2696 5.42604 8.65797 4.78245 8.80333 4.0666H19V2.79993H8.80333C8.65733 2.08467 8.26868 1.44182 7.70317 0.980174C7.13766 0.518531 6.43001 0.266453 5.7 0.266602ZM13.3 10.3999C12.57 10.3998 11.8623 10.6519 11.2968 11.1135C10.7313 11.5752 10.3427 12.218 10.1967 12.9333H0V14.1999H10.1967C10.342 14.9158 10.7304 15.5594 11.296 16.0216C11.8615 16.4839 12.5695 16.7364 13.3 16.7364C14.0305 16.7364 14.7385 16.4839 15.304 16.0216C15.8696 15.5594 16.258 14.9158 16.4033 14.1999H19V12.9333H16.4033C16.2573 12.218 15.8687 11.5752 15.3032 11.1135C14.7377 10.6519 14.03 10.3998 13.3 10.3999Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const ArrowDownIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.418219 0.458879C0.686086 0.165059 1.04934 0 1.42811 0C1.80687 0 2.17013 0.165059 2.43799 0.458879L9.50862 8.21692L16.5793 0.458879C16.8487 0.173386 17.2095 0.0154122 17.584 0.0189831C17.9585 0.022554 18.3168 0.187384 18.5816 0.47797C18.8465 0.768557 18.9967 1.16165 18.9999 1.57259C19.0032 1.98352 18.8592 2.37942 18.599 2.67501L10.5185 11.5411C10.2506 11.8349 9.88739 12 9.50862 12C9.12986 12 8.7666 11.8349 8.49874 11.5411L0.418219 2.67501C0.150434 2.3811 0 1.98253 0 1.56695C0 1.15136 0.150434 0.752787 0.418219 0.458879Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const HeartIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const PlusIcon = ({ size = 20, color = 'white' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width={size}
    height={size}
    fill={COLORS[color]}
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

export const LeftArrowIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3499 0.594312C16.7662 0.974964 17 1.49117 17 2.02941C17 2.56766 16.7662 3.08386 16.3499 3.46451L5.35936 13.5123L16.3499 23.56C16.7544 23.9428 16.9782 24.4556 16.9731 24.9878C16.968 25.52 16.7345 26.0291 16.3229 26.4055C15.9112 26.7818 15.3543 26.9953 14.7722 26.9999C14.19 27.0045 13.6292 26.7999 13.2104 26.4302L0.650078 14.9474C0.233833 14.5667 0 14.0505 0 13.5123C0 12.974 0.233833 12.4578 0.650078 12.0772L13.2104 0.594312C13.6268 0.213774 14.1914 0 14.7802 0C15.3689 0 15.9336 0.213774 16.3499 0.594312Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const LinkIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1375 13.3625L4.775 3H11.75C12.0815 3 12.3995 2.8683 12.6339 2.63388C12.8683 2.39946 13 2.08152 13 1.75C13 1.41848 12.8683 1.10054 12.6339 0.866117C12.3995 0.631696 12.0815 0.5 11.75 0.5H1.8125C1.48098 0.5 1.16304 0.631696 0.928616 0.866117C0.694196 1.10054 0.5625 1.41848 0.5625 1.75V11.75C0.5625 12.0815 0.694196 12.3995 0.928616 12.6339C1.16304 12.8683 1.48098 13 1.8125 13H1.75C2.08152 13 2.39946 12.8683 2.63388 12.6339C2.8683 12.3995 3 12.0815 3 11.75V4.8125L13.325 15.1375C13.4412 15.2547 13.5795 15.3477 13.7318 15.4111C13.8841 15.4746 14.0475 15.5072 14.2125 15.5072C14.3775 15.5072 14.5409 15.4746 14.6932 15.4111C14.8455 15.3477 14.9838 15.2547 15.1 15.1375C15.2196 15.0238 15.3156 14.8875 15.3823 14.7365C15.449 14.5855 15.4851 14.4228 15.4886 14.2578C15.4921 14.0928 15.4629 13.9287 15.4026 13.775C15.3423 13.6214 15.2522 13.4812 15.1375 13.3625Z"
      fill={COLORS[color]}
    />
  </svg>
);

export const StarIcon = ({ size = 20, color = 'black', fill = false }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0011 17.8586L12.5176 18.171L18.051 21.5177L18.0512 21.5178C18.3037 21.6706 18.613 21.4492 18.5462 21.1603L12.0011 17.8586ZM12.0011 17.8586L11.4841 18.1701L5.95075 21.5034L5.94896 21.5045C5.69652 21.6573 5.38719 21.4359 5.454 21.147C5.45401 21.1469 5.45401 21.1469 5.45402 21.1469C5.45405 21.1468 5.45408 21.1466 5.4541 21.1465L6.92067 14.8536L7.05761 14.266L6.60162 13.8709L1.70828 9.63091L1.70793 9.63061C1.48113 9.43428 1.60957 9.07271 1.89273 9.05019L1.89273 9.0502L1.89801 9.04975L8.33801 8.50309L8.93833 8.45213L9.17385 7.89759L11.6939 1.96426L11.6939 1.96426L11.6955 1.96038C11.7495 1.83183 11.8575 1.76334 12.0001 1.76334C12.1427 1.76334 12.2507 1.83183 12.3047 1.96038L12.306 1.96351L14.826 7.91018L15.0613 8.46542L15.6622 8.51642L22.1022 9.06309L22.1075 9.06352C22.3906 9.08605 22.5191 9.44761 22.2923 9.64394L22.2919 9.64425L17.3986 13.8842L16.9426 14.2794L17.0795 14.867L18.5461 21.1599L12.0011 17.8586ZM18.0534 14.64L22.9468 10.4L18.0534 14.64Z"
      fill={fill ? COLORS[color] : ''}
      stroke={COLORS[color]}
      strokeWidth="2"
    />
  </svg>
);

export const LockOpenIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={COLORS[color]}
      d="M6 8h9V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6H7q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8Zm0 12h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-6 3V10v10Z"
    />
  </svg>
);

export const BagIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
    <path
      fill="none"
      stroke={COLORS[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="52"
      d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
    />
  </svg>
);

export const ShutdownIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 26 26">
    <path
      fill={COLORS[color]}
      d="M13 0a2 2 0 0 0-2 2v10a2 2 0 0 0 4 0V2a2 2 0 0 0-2-2zM5.844 2.594a1.5 1.5 0 0 0-.782.344A12.796 12.796 0 0 0 .188 13C.188 20.058 5.94 25.813 13 25.813S25.813 20.058 25.813 13c0-4.073-1.902-7.717-4.875-10.063a1.5 1.5 0 1 0-1.875 2.344A9.804 9.804 0 0 1 22.813 13A9.789 9.789 0 0 1 13 22.813A9.789 9.789 0 0 1 3.187 13a9.808 9.808 0 0 1 3.75-7.719a1.5 1.5 0 0 0-1.093-2.687z"
    />
  </svg>
);

export const EditIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 512 512" fill={COLORS[color]}>
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
  </svg>
);

export const TrashIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
    <path
      fill={COLORS[color]}
      d="M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24ZM100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0Zm48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0Z"
    />
  </svg>
);

export const OpenEyeIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width={size}
    height={size}
    fill={COLORS[color]}
  >
    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
  </svg>
);
export const CloseEyeIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    width={size}
    height={size}
    fill={COLORS[color]}
  >
    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
  </svg>
);

export const WarnIcon = ({ size = 20, color = 'black' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffd500"
    height={size}
    width={size}
    viewBox="0 0 512 512"
  >
    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
  </svg>
);

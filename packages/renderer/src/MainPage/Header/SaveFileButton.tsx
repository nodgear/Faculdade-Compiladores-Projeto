import { BaseButton } from '@/BaseButton';

export function SaveFileButton() {
    return (
        <BaseButton
            onClick={() => console.log('save file button')}
            Icon={
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    x='0'
                    y='0'
                    enableBackground='new 0 0 47 47'
                    version='1.1'
                    viewBox='0 0 47 47'
                    xmlSpace='preserve'
                >
                    <path
                        fill='#424A60'
                        d='M46.5 8L46.5 47 0.5 47 0.5 0 38.5 0z'
                    ></path>
                    <path fill='#E7ECED' d='M7.5 26H38.5V47H7.5z'></path>
                    <path fill='#EBBA16' d='M7.5 26H38.5V38.037H7.5z'></path>
                    <path fill='#C7CAC7' d='M9.5 0H35.5V16H9.5z'></path>
                    <g fill='#FFF'>
                        <path d='M12.5 31h7a1 1 0 100-2h-7a1 1 0 100 2zM22.5 33h-10a1 1 0 100 2h10a1 1 0 100-2zM26.21 33.29c-.37-.37-1.04-.37-1.41 0a.996.996 0 00-.3.71c0 .27.109.52.29.71.189.18.439.29.71.29.27 0 .52-.11.71-.29.18-.19.29-.45.29-.71s-.11-.521-.29-.71z'></path>
                    </g>
                    <path
                        fill='none'
                        stroke='#424A60'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='2'
                        d='M27.5 4H31.5V12H27.5z'
                    ></path>
                    <path
                        fill='#E7ECED'
                        d='M24.5 16L9.5 16 9.5 0 16.5 0z'
                    ></path>
                </svg>
            }
        />
    );
}

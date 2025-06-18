'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import startBtn from '@/../public/0.start/startBtn.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='flex justify-center items-center flex-col gap-[60px]'>
          <Image className=' absolute top-0 -translate-y-1/2 ' src={circle1Img} alt='circle1Img' />
          <Image src={titleImg} alt='title' />
          <div className='text-[#B95F0F] font-[500] text-center text-[14px]
           leading-loose tracking-wide '>
            大學生測驗介紹<br/>
            大學生測驗介紹<br/>
            大學生測驗介紹
            大學生測驗介紹
            大學生測驗介紹
          </div>
          <Image onClick={nextStep} className='w-[160px]' src={startBtn} alt='startBtn' />
          <Image className=' absolute bottom-0 translate-y-1/2 pointer-events-none ' src={circle1Img} alt='circle1Img' />
        </div>
      </MobileFrame>
    </>
  );
}

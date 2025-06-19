'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.png';
import startBtn from '@/../public/0.start/startBtn.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className="flex flex-col justify-center items-center h-full overflow-y-auto py-6">

          <Image className='w-[600px]' src={titleImg} alt='title' />
          <div className='text-[#004aad] font-[500] text-center text-[14px]
           leading-loose tracking-wide '>
            大學生測驗介紹<br/>
            大學生測驗介紹<br/>
          </div>
          <Image onClick={nextStep} className='w-[260px]' src={startBtn} alt='startBtn' />
         
        </div>
      </MobileFrame>
    </>
  );
}

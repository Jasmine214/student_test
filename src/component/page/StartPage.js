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
          <div className='text-[#004aad] font-[500] text-center text-medium
           leading-loose tracking-wide '>
                   這是一款簡單的心理測驗，透過簡單的校園生活問題分析你的性格，對應到不同的文具，總共有十六種文具等你解鎖，還可以跟朋友一起玩，看看你們是不是對方的靈魂伴侶：D <br/>
          </div>
          <Image onClick={nextStep} className='w-[260px]' src={startBtn} alt='startBtn' />
         
        </div>
      </MobileFrame>
    </>
  );
}

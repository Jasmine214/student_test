'use client';

import MobileFrame from '@/component/layout/MobileFrame'

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div>
        <div className="flex flex-col justify-center items-center h-full overflow-y-auto py-6">

            <div className='text-bold text-[#004AAD] my-[30px]'> 你的屬性已經被看穿⋯⋯ 接招吧！ </div>
            <div 
              className={` bg-[#004AAD] w-[200px] text-white 
                py-[16px] text-xl flex justify-center items-center font-medium 
                cursor-pointer hover:translate-y-0.5 transition`}
              onClick={nextStep}
            > 查看結果 </div>
        </div>
      
        </div>
      </MobileFrame>
    </>
  );
}

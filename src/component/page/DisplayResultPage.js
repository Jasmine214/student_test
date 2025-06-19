'use client';

import MobileFrame from '@/component/layout/MobileFrame'

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div>
        <div className="flex flex-col justify-between h-full overflow-y-auto py-6">

            <div 
              className={` bg-[#89BCFF] w-full rounded-full text-white 
                py-[16px] text-sm flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={nextStep}
            > 查看結果 </div>
        </div>
      
        </div>
      </MobileFrame>
    </>
  );
}

'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import {
  usePsyStore,
  getMBTIResult,
} from '@/app/store/store';

// 匯入所有 MBTI 類型圖片（從 assets）
import Infp from '@/assets/4.result/infp.png';
import Infj from '@/assets/4.result/infj.png';
import Isfp from '@/assets/4.result/isfp.png';
import Isfj from '@/assets/4.result/isfj.png';
import Enfp from '@/assets/4.result/enfp.png';
import Enfj from '@/assets/4.result/enfj.png';
import Esfp from '@/assets/4.result/esfp.png';
import Esfj from '@/assets/4.result/esfj.png';
import Intp from '@/assets/4.result/intp.png';
import Intj from '@/assets/4.result/intj.png';
import Istp from '@/assets/4.result/istp.png';
import Istj from '@/assets/4.result/istj.png';
import Entp from '@/assets/4.result/entp.png';
import Entj from '@/assets/4.result/entj.png';
import Estp from '@/assets/4.result/estp.png';
import Estj from '@/assets/4.result/estj.png';

// 建立 MBTI 圖片對照表
const mbtiImages = {
  INFP: Infp,
  INFJ: Infj,
  ISFP: Isfp,
  ISFJ: Isfj,
  ENFP: Enfp,
  ENFJ: Enfj,
  ESFP: Esfp,
  ESFJ: Esfj,
  INTP: Intp,
  INTJ: Intj,
  ISTP: Istp,
  ISTJ: Istj,
  ENTP: Entp,
  ENTJ: Entj,
  ESTP: Estp,
  ESTJ: Estj,
};

export default function ResultPage() {
  const mbti = usePsyStore((s) => s.mbti);
  const mbtiCode = getMBTIResult(mbti); // 例如 "INFP"
  const resultImage = mbtiImages[mbtiCode];

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <MobileFrame>
        <div className="flex flex-col justify-center items-center h-full overflow-hidden py-6">
        {/* 顯示固定標題 */}

        <h2 className="text-xl font-semibold text-[#004AAD]"> 你是⋯⋯ </h2>

        {/* 顯示對應圖片 */}
        {resultImage && (
          <div className="w-[250px] h-auto mt-4 relative">
            <Image
              src={resultImage}
              alt={mbtiCode}
              width={260}
              height={300}
              className="rounded-lg"
            />
          </div>
        )}

        {/* 再玩一次 */}
        <div 
              className={`mt-6 bg-[#004AAD] w-[200px] text-white 
                py-[16px] text-l flex justify-center items-center font-medium 
                cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 再玩一次 </div>
      </div>
    </MobileFrame>
  );
}

'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import titleImg from '@/../public/0.start/title.png'
import startBtn from '@/../public/0.start/startBtn.png'

export default function Home() {
  const router = useRouter()

  const goToTest = () => {
    router.push('/croissant') // 導向心理測驗 start 頁面
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E6F0FF] text-center px-6">
      {/* 標題圖片 */}
      <Image className="w-[260px] mb-4" src={titleImg} alt="title" />

      {/* 按鈕（導向 croissant） */}
      <Image
        src={startBtn}
        alt="Start Test"
        className="w-[200px] cursor-pointer hover:opacity-90 transition"
        onClick={goToTest}
      />
    </div>
  )
}

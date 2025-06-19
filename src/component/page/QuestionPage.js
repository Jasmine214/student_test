'use client'

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image'
import q1Up from '@/../public/1.question/q1-up.png'
import q1Down from '@/../public/1.question/q1-down.png'
import circle2Img from '@/../public/1.question/blur-circle-2.png'
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state)
  const psyData = usePsyStore((state) => state)

  const question = questionData.questions[(questionIndex + 1).toString()]

  const clickAnswer = function (option) {
    if (questionIndex <= 3) {
      // Q1 ~ Q4 → 更新 MBTI 維度
      psyData.updateMBTI(option.value)
      psyData.updateQuestionState(psyData.questionState + 1)
      nextStep()
    } else if (questionIndex === 4) {
      // Q5 → 記錄趣味題 + 進入結果頁
      psyData.setExtraChoice(option.value)
      psyData.updateState(3)
    }
  }

  const getColorStyle = () => {
    switch (questionIndex) {
      case 0:
        return {
          bg: '#004AAD',
        }
      case 1:
        return {
          bg: '#004AAD',
        }
      case 2:
        return {
          bg: '#004AAD',
        }
      case 3:
        return {
          bg: '#004AAD',

        }
      case 4:
          return {
            bg: '#004AAD',
          }
      default:
        return {
          bg: '#CCCCCC',
        }
    }
  }

  const { bg, shadow } = getColorStyle()

  return (
    <MobileFrame>

      <div className="flex flex-col items-center gap-[26px]">
        {/* <Image src={q1Up} className="w-[88px]" alt="q1Up" /> */}

        <div
          className={`text-white border-2 rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl mt-5`}
          style={{ borderColor: shadow, backgroundColor: bg }}
        >
          Q{questionIndex + 1}
        </div>

        <div
          className={`text-center font-bold text-xl my-[30px]`}
          style={{ color: bg }}
        >
          {question.title}
        </div>

        {question.options.map((option, index) => (
          <div
            key={`q${questionIndex}-opt${index}`}
            className="w-full text-white py-[16px] text-sm 
              flex justify-center items-center font-medium 
              cursor-pointer hover:translate-y-0.5 transition"
            style={{
              backgroundColor: bg,
              boxShadow: `0px 4px 0px 0px ${shadow}`,
            }}
            onClick={() => clickAnswer(option)}
          >
            {option.title}
          </div>
        ))}

        {/* <Image src={q1Down} className="w-[88px]" alt="q1Down" /> */}
      </div>

    </MobileFrame>
  )
}

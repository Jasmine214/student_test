import { create } from 'zustand'

// 建立心理測驗流程 store
const usePsyStore = create((set) => ({
  // 測驗階段狀態控制
  state: 0, // 0:start, 1:question, 2:displayResult, 3:result
  questionState: 0,
  totalQuestions: 4, // 前 4 題才影響 MBTI
  score: 0,

  // MBTI 維度狀態
  mbti: {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  },

  // 額外選項（第 5 題）
  extraChoice: null,

  // Actions
  updateState: (newState) => set(() => ({ state: newState })),
  updateQuestionState: (newState) => set(() => ({ questionState: newState })),
  updateTotalQuestions: (newState) => set(() => ({ totalQuestions: newState })),
  updateScore: (newState) => set(() => ({ score: newState })),

  // 新增：更新 MBTI 維度分數
  updateMBTI: (dimension) =>
    set((state) => ({
      mbti: {
        ...state.mbti,
        [dimension]: state.mbti[dimension] + 1
      }
    })),

  // 新增：記錄第 5 題選擇
  setExtraChoice: (val) => set(() => ({ extraChoice: val }))
}))

// 建立題目 store
const useQuestionStore = create((set) => ({
  questions: {
    "1": {
      title: "如果你突然有一個空閒下午，你會...",
      options: [
        { title: "打給朋友揪咖啡、散步或電影", value: "E" },
        { title: "終於可以自己慢慢看喜歡的書或影集", value: "I" },
        { title: "去社團晃一圈順便和大家聊天", value: "E" },
        { title: "躲進熟悉的小角落沉澱一下", value: "I" }
      ]
    },
    "2": {
      title: "遇到報告題目，你會怎麼開始？",
      options: [
        { title: "馬上查資料，整理具體架構再動手", value: "S" },
        { title: "腦中浮現一個靈感或畫面，就想往那邊發展", value: "N" },
        { title: "參考過往的案例、學長姐的作品先保底", value: "S" },
        { title: "先想看看這個題目可以怎麼結合最近的靈感", value: "N" }
      ]
    },
    "3": {
      title: "當你和朋友有不同想法時，你通常...",
      options: [
        { title: "客觀分析彼此的想法，再一起找合理方案", value: "T" },
        { title: "先聽對方說完再表達自己，怕傷了感情", value: "F" },
        { title: "先說重點再慢慢解釋立場，讓對方理解自己", value: "T" },
        { title: "在意氣氛，不想因為意見不同影響關係", value: "F" }
      ]
    },
    "4": {
      title: "期中考將近，你是...",
      options: [
        { title: "按照讀書計畫一點一滴完成", value: "J" },
        { title: "靈感來了就爆唸，壓力才是我的燃料", value: "P" },
        { title: "喜歡提早複習，才能慢慢調整心情", value: "J" },
        { title: "等朋友組讀書會再開始比較有動力", value: "P" }
      ]
    },
  }
}))

// 取得 MBTI 四碼結果
function getMBTIResult(mbti) {
  return (
    (mbti.E >= mbti.I ? 'E' : 'I') +
    (mbti.S >= mbti.N ? 'S' : 'N') +
    (mbti.T >= mbti.F ? 'T' : 'F') +
    (mbti.J >= mbti.P ? 'J' : 'P')
  )
}

// MBTI 描述資料
const mbtiProfiles = {
  INFP: {
    name: "溫柔系文藝青年 🌿",
    description: "在筆記本與咖啡香中，寫著屬於自己的小故事，總能從日常找到詩意與光。"
  },
  INFJ: {
    name: "靜靜系觀察者 🌌",
    description: "你像是一面溫柔的鏡子，默默理解每個人，也在尋找內在意義的大學生旅程。"
  },
  ISFP: {
    name: "悠遊系感受派 🎨",
    description: "最懂享受生活質感的你，喜歡安靜散步、拍照、創作，溫和卻不平凡。"
  },
  ISFJ: {
    name: "默默系守護者 🧸",
    description: "你總在別人沒注意時，默默做好所有事，是班上最值得依靠的小太陽。"
  }
  // 其他類型可持續補上
}

// 根據 MBTI 四碼取得完整描述
function getMBTIProfile(mbtiCode) {
  return mbtiProfiles[mbtiCode] || {
    name: "未知類型 🤔",
    description: "這個人格還在發掘中，或許你正創造屬於自己的新類型！"
  }
}

export {
  usePsyStore,
  useQuestionStore,
  getMBTIResult,
  getMBTIProfile,
  mbtiProfiles
}

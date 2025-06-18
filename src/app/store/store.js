import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "如果你突然有一個空閒下午，你會...",
      options: [
        {title: "打給朋友揪咖啡、散步或電影", value: 2},
        {title: "終於可以自己慢慢看喜歡的書或影集", value: 3},
        {title: "去社團晃一圈順便和大家聊天", value: 1},
        {title: "躲進熟悉的小角落沉澱一下", value: 1}
      ]
    },
    "2":{
      title: "遇到報告題目，你會怎麼開始？",
      options: [
        {title: "馬上查資料，整理具體架構再動手", value: 2},
        {title: "腦中浮現一個靈感或畫面，就想往那邊發展", value: 3},
        {title: "參考過往的案例、學長姐的作品先保底", value: 1},
        {title: "先想看看這個題目可以怎麼結合最近的靈感", value: 1}
      ]
    },
    "3":{
      title: "當你和朋友有不同想法時，你通常...",
      options: [
        {title: "客觀分析彼此的想法，再一起找合理方案", value: 2},
        {title: "先聽對方說完再表達自己，怕傷了感情", value: 3},
        {title: "先說重點再慢慢解釋立場，讓對方理解自己", value: 1},
        {title: "在意氣氛，不想因為意見不同影響關係", value: 1}
      ]
    },
    "4":{
      title: "期中考將近，你是...",
      options: [
        {title: "按照讀書計畫一點一滴完成", value: 2},
        {title: "靈感來了就爆唸，壓力才是我的燃料", value: 3},
        {title: "喜歡提早複習，才能慢慢調整心情", value: 1},
        {title: "等朋友組讀書會再開始比較有動力", value: 1}
      ]
    },
    "5":{
      title: "如果大學是一場旅程，你希望自己...",
      options: [
        {title: "把握每個機會，體驗豐富又精采的故事", value: 2},
        {title: "穩穩走好每一步，學會踏實與堅定", value: 3},
        {title: "遇見很多人，從關係中理解自己", value: 1},
        {title: "有一段屬於自己的時間和空間", value: 1}
      ]
    },
  },
}))



export { usePsyStore, useQuestionStore }
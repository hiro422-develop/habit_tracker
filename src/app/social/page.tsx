'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'

const routines = [
  {
    title: "Elon Muskの1日ルーティン",
    tags: ["生産性", "集中力", "健康"],
    description: "イーロン・マスクの高集中なワークフローを再現したルーティンです。",
  },
  {
    title: "朝活ブースト",
    tags: ["エネルギー", "健康", "モチベーション"],
    description: "朝を充実させるための短時間ルーチン。活動前の準備にも最適。",
  },
  {
    title: "夜ふかしルーティン",
    tags: ["リラックス", "睡眠", "健康"],
    description: "夜型生活に合った落ち着きのあるループです。",
  },
  {
    title: "クリエイティブタイム",
    tags: ["創造性", "集中", "アート"],
    description: "創作やアイデア出しに最適な集中時間をサポートします。",
  },
]

export default function SocialPage() {
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null)
  const [modalIndex, setModalIndex] = useState<number | null>(null)

  const selectedRoutine = modalIndex !== null ? routines[modalIndex] : null

  return (
    <div className="min-h-screen bg-white p-4 pb-28">
      <div className="text-center text-xl font-bold mb-6">ライブラリ</div>
      <div className="text-lg font-semibold mb-4">テンプレート・ループ</div>

      <div className="grid grid-cols-2 gap-4">
        {routines.map((routine, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-2xl p-4 relative"
            onClick={() => setModalIndex(idx)}
          >
            {/* ラジオボタン（カードとは独立） */}
            <div
              onClick={(e) => {
                e.stopPropagation()
                setSelectedRadio(idx)
              }}
              className="absolute top-3 left-3 w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center cursor-pointer"
            >
              {selectedRadio === idx && (
                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
              )}
            </div>

            <div className="pl-8 font-bold text-sm">{routine.title}</div>
            <div className="pl-8 text-xs text-gray-500 mt-1">
              {routine.tags.join("、")}
            </div>
          </div>
        ))}
      </div>

      {/* ラジオボタン選択時のみ表示 */}
      {selectedRadio !== null && modalIndex === null && (
        <button className="fixed bottom-20 left-4 right-4 bg-purple-500 text-white font-semibold py-4 rounded-full text-center shadow-md">
          ＋自分のループに追加
        </button>
      )}

      <Modal show={modalIndex !== null} onClose={() => setModalIndex(null)}>
        {selectedRoutine && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold mb-1">{selectedRoutine.title}</h2>
              <p className="text-sm text-gray-700 mb-1">{selectedRoutine.description}</p>
              <div className="text-xs text-gray-500">
                タグ：{selectedRoutine.tags.join("、")}
              </div>
            </div>

            {/* モーダル下部にも固定ボタン */}
            <button className="w-full mt-4 bg-purple-500 text-white font-semibold py-3 rounded-full shadow">
              ＋自分のループに追加
            </button>
          </div>
        )}
      </Modal>
    </div>
  )
}

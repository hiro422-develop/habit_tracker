'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import clsx from 'clsx'

export default function CalendarPage() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() // 0-indexed
  const todayDate = today.getDate()

  const [selected, setSelected] = useState(todayDate)

  // カレンダー生成
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = Array.from({ length: firstDay }, (_, i) => ({
    day: new Date(year, month, -firstDay + i + 1).getDate(),
    outside: true,
  }))
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    outside: false,
  }))
  const totalDays = [...prevMonthDays, ...currentMonthDays]
  while (totalDays.length % 7 !== 0) {
    const nextDate = totalDays.length - daysInMonth - prevMonthDays.length + 1
    totalDays.push({ day: nextDate, outside: true })
  }

  // 仮のデータ（習慣登録日と習慣一覧）
  const habitDays = [9, 23, 27]
  const habitsData: Record<number, { title: string; time: string }[]> = {
    9: [
      { title: 'Morning Run', time: '6:00 AM - 7:00 AM' },
      { title: 'Meditation', time: '8:00 AM - 8:30 AM' },
      { title: 'Read a Book', time: '9:00 PM - 10:00 PM' },
    ],
    23: [{ title: 'Yoga', time: '7:00 AM - 8:00 AM' }],
    27: [{ title: 'Drink Water', time: 'Anytime' }],
  }
  const habits = habitsData[selected] ?? []

  return (
    <div className="min-h-screen bg-[#f8f7fa] p-4 pb-28">
      <div className="text-center mb-4">
        <div className="text-xs text-gray-500">{`${year}年`}</div>
        <h1 className="text-xl font-bold">{month + 1}月</h1>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm mb-6">
        {totalDays.map(({ day, outside }, idx) => {
          const isToday = day === todayDate && !outside
          const isSelected = day === selected && !outside
          const hasHabit = habitDays.includes(day) && !outside

          return (
            <button
              key={idx}
              onClick={() => !outside && setSelected(day)}
              className={clsx(
                'w-10 h-10 flex items-center justify-center rounded-xl',
                outside ? 'text-gray-400' : 'text-black bg-gray-100',
                isToday && 'rounded-full bg-purple-500 text-white',
                isSelected && !isToday && 'rounded-full border-2 border-purple-500',
                hasHabit && !isToday && !isSelected && 'rounded-full border border-purple-300'
              )}
            >
              {day}
            </button>
          )
        })}
      </div>

      <h2 className="text-md font-semibold mb-2">{selected}日の習慣</h2>
      <ul className="space-y-2">
        {habits.length === 0 ? (
          <li className="text-gray-400 text-sm">習慣がありません</li>
        ) : (
          habits.map((habit, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center border rounded-lg px-4 py-2 shadow-sm bg-white"
            >
              <span className="font-medium">{habit.title}</span>
              <span className="text-sm text-gray-500">{habit.time}</span>
            </li>
          ))
        )}
      </ul>

      <button className="fixed bottom-20 right-6 bg-purple-500 text-white px-5 py-3 rounded-full shadow-md flex items-center space-x-2">
        <Plus size={20} />
        <span className="text-sm font-semibold">Add Habit</span>
      </button>
    </div>
  )
}

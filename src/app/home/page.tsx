'use client'

import { useState } from 'react'
import {
  Droplet,
  BookOpen,
  Brain,
  Flame,
} from 'lucide-react' // Lucideのアイコン

type Habit = {
  id: number
  name: string
  description: string
  completed: boolean
  icon: JSX.Element
}

type HabitGroup = {
  title: string
  habits: Habit[]
}

export default function HomePage() {
  const today = new Date()
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`

  const [habitGroups, setHabitGroups] = useState<HabitGroup[]>([
    {
      title: '朝の習慣',
      habits: [
        {
          id: 1,
          name: '水を飲む',
          description: 'description',
          completed: false,
          icon: <Droplet size={20} className="text-blue-500" />,
        },
        {
          id: 2,
          name: '読書',
          description: '30分',
          completed: false,
          icon: <BookOpen size={20} className="text-orange-500" />,
        },
        {
          id: 3,
          name: '瞑想する',
          description: '20分',
          completed: false,
          icon: <Brain size={20} className="text-purple-500" />,
        },
      ],
    },
    {
      title: '夜の習慣',
      habits: [
        {
          id: 4,
          name: 'ジョギング',
          description: '5km',
          completed: false,
          icon: <Flame size={20} className="text-green-500" />,
        },
      ],
    },
  ])

  const toggleHabit = (groupIndex: number, habitId: number) => {
    setHabitGroups((prevGroups) =>
      prevGroups.map((group, gIdx) => {
        if (gIdx !== groupIndex) return group
        return {
          ...group,
          habits: group.habits.map((h) =>
            h.id === habitId ? { ...h, completed: !h.completed } : h
          ),
        }
      })
    )
  }

  return (
    <div className="p-4 space-y-6">
      <div className="text-center font-bold text-lg">{formattedDate}</div>

      {habitGroups.map((group, groupIndex) => (
        <div key={group.title}>
          <h2 className="text-md font-bold mb-2">{group.title}</h2>
          <ul className="space-y-3">
            {group.habits.map((habit) => (
              <li
                key={habit.id}
                className="flex items-center justify-between border rounded px-3 py-2"
              >
                {/* 左：アイコン */}
                <div className="mr-2">{habit.icon}</div>

                {/* 中央：タイトル・説明 */}
                <div className="flex-1">
                  <div className="font-medium">{habit.name}</div>
                  <div className="text-sm text-gray-500">{habit.description}</div>
                </div>

                {/* 右：チェックボックス */}
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(groupIndex, habit.id)}
                  className="h-5 w-5"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import { monster, monsters } from './data/monsters'
import { getMultipliedExp } from './utils/multipliers'


export default function Home() {
  const [actualLevel, setActualLevel] = useState(0)
  const [filter, setFilter] = useState('')
  const [serverExp, setServerExp] = useState(100)

  const normalMonster = monsters.filter(monster.isNormal)
  .filter(monster => monster.href)
  .filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase()))
  .sort((monsterA, monsterB) => (monsterA.level || 0) - (monsterB.level || 0))
  const augmentedMonsterData = normalMonster.map(mmm => ({
    ...mmm,
    receivedBaseExp: ((mmm.baseExp || 0) * getMultipliedExp({ monster: mmm, playerLevel: actualLevel })),
    receivedJobExp: ((mmm.jobExp || 0) * getMultipliedExp({ monster: mmm, playerLevel: actualLevel })),
    expMultiplier: getMultipliedExp({ monster: mmm, playerLevel: actualLevel }) * 100,
  }))

  return (
    <div className="flex flex-col justify-center items-center w-full p-[50px]  h-[100vh] bg-gray-200">

      <div className="flex flex-col justify-between items-center w-fit gap-[25px]  bg-stone-50 p-[10px] h-full overflow-hidden rounded-t-[8px]">

        <header className='flex flex-row gap-[15px] py-[10px]'>
          <div className='flex flex-col gap-[2px]'>
            <label className='text-rose-600 font-bold'>Filtro</label>
            <input
              className='bg-gray-300 border text-black'
              type="search" value={filter} onChange={event => setFilter(event.target.value)} />
          </div>
          <div className='flex flex-col gap-[2px]'>
            <label className='text-rose-600 font-bold'>Server rate</label>
            <input
              className='bg-gray-300 border text-black'
              type="number" min={0} max={99999999} value={serverExp} onChange={event => setServerExp(Number(event.target.value))} />
          </div>
          <div className='flex flex-col gap-[2px]'>
            <label className='text-rose-600 font-bold'>Level</label>
            <input
              className='bg-gray-300 border text-black'
              type="number" min={0} max={175} value={actualLevel} onChange={event => setActualLevel(Number(event.target.value))} />
          </div>
        </header>

        <div className='flex flex-col items-center w-full rounded-[8px] h-full overflow-auto bg-gray-300'>
          <div className='w-fit flex flex-row bg-yellow-50 text-black border rounded-t-[8px]' >
            <span className='w-[50px] border-r px-[6px] pt-[6px] pb-[3px] border-r text-center'>mult.</span>
            <span className='w-[250px] px-[6px] pt-[6px] pb-[3px] border-r text-center'>monster</span>
            <span className='w-[50px] px-[6px] pt-[6px] pb-[3px] border-r text-center'>level</span>
            <span className='w-[100px] px-[6px] pt-[6px] pb-[3px] border-r text-center'>hp</span>
            <span className='w-[85px] px-[6px] pt-[6px] pb-[3px] border-r text-center'>base exp</span>
            <span className='w-[85px] px-[6px] pt-[6px] pb-[3px] text-center'>job exp</span>
          </div>
          <div className='w-full overflow-auto'>
            {augmentedMonsterData.map(monster =>
              <div className='w-fit flex flex-row bg-stone-50 text-black border ' key={monster.name + monster.id} >
                <span
                  className={`w-[50px] border-r px-[6px] pt-[6px] pb-[3px] text-center 
                      xp${monster.expMultiplier.toFixed(0)}
                    `}
                >
                  {`${monster.expMultiplier.toFixed(0)}%`}
                </span>
                <a className='w-[250px] border-r px-[6px] pt-[6px] pb-[3px]' href={`https://db.irowiki.org/${monster.href}`} target="_blank" rel="noopener noreferrer">{monster.name}</a>
                <span className='w-[50px] border-r px-[6px] pt-[6px] pb-[3px]'>{monster.level}</span>
                <span className='w-[100px] border-r px-[6px] pt-[6px] pb-[3px]'>{monster.hp}</span>
                <span className='w-[85px] border-r px-[6px] pt-[6px] pb-[3px]'>{monster.receivedBaseExp.toFixed(0)}</span>
                <span className='w-[85px] px-[6px] pt-[6px] pb-[3px]'>{monster.receivedJobExp.toFixed(0)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Game from './components/game/game'

export default function Home() {
  return (
    <main className={styles.main}>
      <Game/>
    </main>
  )
}

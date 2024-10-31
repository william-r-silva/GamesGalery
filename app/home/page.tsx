import Link from "next/link";
import styles from "./page.module.css";
import Game from "@/src/types/game.type";
import GameCard from "@/src/components/GameCard";

export default function Home() {
  const games: Game[] = [{
    link: 'Game',
    name: 'Pong',
    description: 'Teste'
  },
  {
    link: 'Game',
    name: 'Pong',
    description: 'Teste'
  },
  {
    link: 'Game',
    name: 'Pong',
    description: 'Teste'
  }]

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <nav className={styles.navPages}>
          <Link className={styles.navLink} href={'/home'}>Home</Link>
          <Link className={styles.navLink} href={'/sobre'}>Sobre</Link>
        </nav>
      </header>
      <main className={styles.gamesGrid}>
        {games.map((game: Game) => {
          return <GameCard game={game} />
        })}
      </main>
    </div>
  );
}

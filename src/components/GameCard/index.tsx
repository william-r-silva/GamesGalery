import Link from 'next/link';
import Image from 'next/image';

import Game from '@/src/types/game.type';
import style from './style.module.css';

import defaultImage from '../../../public/images/dummy-image-square.jpg'

export default function GameCard({ game, ...props } : { game: Game, props?: unknown } ) {
    return (
        <div className={style.card}>
            <Link href={game.link}>
                { <Image className={style.cardImage} alt={`Imagem do jogo ${game.name}`} src={game.imageUrl ?? defaultImage}></Image> }
                <h2>{game.name}</h2>
                <p>{game.description}</p>
            </Link>
        </div>
    );
}
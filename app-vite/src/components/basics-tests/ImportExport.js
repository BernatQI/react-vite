import heros, { owner } from '../data/heroes';

// console.log(heroes);

export const getHeroesById = id => heros.find(hero => hero.id === id);

export const getHeroesByOwner = owner => heros.filter(hero => hero.owner === owner);

console.log(getHeroesById(1));

console.log(getHeroesByOwner('DC'));

export default function ImportExport({ title }) {

  return <article>
    <h2>{title}</h2>
  </article>
}
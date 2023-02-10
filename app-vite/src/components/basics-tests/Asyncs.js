import { getHeroesById } from "./ImportExport";

export default function Asyncs({ title }) {

  const getHeroesByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const hero = getHeroesById(id);
        // console.log(hero);
        if (hero) {
          resolve(hero);
        } else {
          reject('Hero not found in Asyncs');
        }
      }, 2000);
    });
  };

  getHeroesByIdAsync(4).then(hero => console.log('Herooo', hero)).catch(err => console.warn(err));

  return <article>
    <h2>{title}</h2>
  </article>
}
import { getHeroesById } from "./ImportExport";

export default function Promises({ title }) {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroesById(2);
      // console.log(hero);
      resolve(hero);
      // reject('Hero not found');
    }, 2000);
  });

  promise.then((hero) => {
    console.log('then after promise... ', hero);
  }).catch(err => console.warn(err));

  return <article>
    <h2>{title}</h2>
  </article>
}
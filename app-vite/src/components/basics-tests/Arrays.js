export default function Arrays({ title }) {

  const arrayTest = [1, 2, 3, 4];
  let arrayTest2 = [...arrayTest, 5];



  const arrayTest3 = arrayTest2.map(number => `${(number * 2)} `);

  console.log(arrayTest);
  console.log(arrayTest2);
  console.log(arrayTest3);

  return <article>
    <h2>{title}</h2>
    <p>Array 1: {arrayTest}</p>
    <p>Array 2: {arrayTest2}</p>
    <p>Array 2: {arrayTest3}</p>
  </article>
}
export default function ObjectDestructing({ title }) {

  const person = {
    name: 'BernatQi',
    age: 38,
    key: 'DevSEO'
  };

  const { name, age, key } = person;

  const personFunction = ({ name, age, key }) => {
    console.log(name);
  };

  return <article>
    <h2>{title}</h2>
    <p>{name}</p>
    <p>{age}</p>
    <p>{key}</p>
    <p>{personFunction(person)}</p>
  </article>
}
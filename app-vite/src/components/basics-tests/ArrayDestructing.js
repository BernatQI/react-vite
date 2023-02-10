export default function ArrayDestructing({ title }) {

  const figures = ['Goku', 'Vegeta', 'Gohan'];

  const [, , p3] = figures;

  const getArray = () => {
    return ['ABC', 123];
  }

  const [charss, numberss] = getArray();

  const useState = (value) => {
    return [value, () => 'Hello World'];
  }

  const [name, setname] = useState('Goku');

  return <article>
    <h2>{title}</h2>
    <p>{p3}</p>
    <p>{`${charss}, ${numberss}`}</p>
    <p>{name}</p>
    <p>{setname()}</p>
  </article>
}
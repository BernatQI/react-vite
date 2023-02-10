export default function Functions({ title }) {

  const hiBye = name => `Hi, ${name}`;

  return <article>
    <h2>{title}</h2>
    <p>{hiBye('BernatQi')}</p>
  </article>
}
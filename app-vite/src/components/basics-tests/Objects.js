export default function Objects({ title }) {

  const person = {
    name: 'BernatQi',
    role: 'Dev & SEO'
  }

  console.log({ person });

  return <article>
    <h2>{title}</h2>
    <p>{person.name}</p>
  </article>
}
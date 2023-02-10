export default function Ternarys({ title }) {

  const active = true;

  const msg = active ? 'Active' : 'Inactive';
  console.log("🚀 ~ file: Ternarys.js:6 ~ Ternarys ~ msg", msg)

  const msg2 = active && 'Active';
  console.log("🚀 ~ file: Ternarys.js:9 ~ Ternarys ~ msg2", msg2)

  return <article>
    <h2>{title}</h2>
  </article>
}
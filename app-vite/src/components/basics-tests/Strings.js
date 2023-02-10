export default function Strings({ title }) {
  const name = 'BernatQi';
  const role = 'Dev & SEO';

  const getMsg = ({ name, role }) => {
    return `${name}: ${role}`;
  };

  console.log(getMsg);

  return (
    <article>
      <h2>{title}</h2>
      <p>{getMsg}</p>
    </article>
  );
}
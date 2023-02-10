export default function Fetchs({ title }) {

  const apiKeyGiphy = '9HUn3UjP2jW75aBkPk9QreJ77lBwbiUR';

  const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);

  request
    .then(resp => resp.json())
    .then(({ data }) => {
      const { url } = data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.getElementById('fetch-giphy-container').append(img);
    })
    .catch(console.warn);


  return <article>
    <h2>{title}</h2>
  </article>
}

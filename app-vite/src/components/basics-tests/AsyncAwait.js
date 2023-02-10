export default function AsyncAwait({ title }) {

  const getImage = async () => {

    try {
      const apiKeyGiphy = '9HUn3UjP2jW75aBkPk9QreJ77lBwbiUR';
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);
      const { data } = await resp.json();

      const { url } = await data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.getElementById('async-giphy-container').append(img);
    } catch (error) {
      console.log("🚀 ~ file: AsyncAwait.js:17 ~ getImage ~ error", error)
    }
  }

  getImage();

  return <article>
    <h2>{title}</h2>
  </article>
}

import unirest from 'unirest';
import cheerio from 'cheerio';

const delay = ms => new Promise(r => setTimeout(r, ms));

async function parsePost(url, sites) {
  await unirest.get(url).end(({ body }) => {

    const $ = cheerio.load(body);

    const domain = url.match(/\/\/(.*?)\//)[1];
    const title = $(sites.title).text().trim();
    let image = $(sites.image).attr('src');
    image = image.indexOf('http') >= 0 ? image : `http://${domain}${image}`;
    const text = $(sites.text).text().trim();
    const views = $(sites.views).text().trim().split(" ")[0];

    const post = {
      title: title,
      image: image,
      text: text,
      views: views
    };

    console.log(post);

  });
  await delay(3000);
}

export default parsePost;
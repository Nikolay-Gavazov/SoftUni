import { Article } from "./app.module";

const data = [{
    title: 'Aticle 1',
    description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc',
 author: 'Author 1',
 imageUrl:
'http://ichef.bbci.co.uk/news/976/cpsprodpb/10434/production/_90121666_agreementcartoon.jpg'
},
{
    title: 'Article 2',
    description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc',
    author: 'Author 2',
    imageUrl: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
   },
   {
    title: 'Article 3',
    description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc',
    author: 'Author 3',
    imageUrl: 'http://i.dailymail.co.uk/i/pix/2010/04/17/article-1266852-092DE58A000005DC112_634x411.jpg'
   },
   {
    title: 'Article 4',
    description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc',
    author: 'Author 4',
    imageUrl: 'https://www.seoclerk.com/pics/518476-1iDFBR1489198900.png'
   },
   {
    title: 'Article 5',
    description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc',
    author: 'Author 5',
    imageUrl: 'http://www.stat.columbia.edu/~gelman/teaching/literacy/images/IV.gif'
   }]
   export { data };

  export class ArticleData{
    getData() : Article[] {
        let articles : Article[] = [];
    
        for(let i = 0; i < data.length; i++){
          articles[i] = new Article(data[i].title, data[i].description, data[i].author, data[i].imageUrl);
        }
    
        return articles;
  }
}
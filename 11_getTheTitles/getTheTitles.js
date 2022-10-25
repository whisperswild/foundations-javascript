const getTheTitles = function(bookArray) {
    const bookList = Array.from(bookArray);
    const titles = new Array();

    for (const book of bookList){
        titles.push(book.title);
    }

    return titles;
};

/*
const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]
*/

// Do not edit below this line
module.exports = getTheTitles;

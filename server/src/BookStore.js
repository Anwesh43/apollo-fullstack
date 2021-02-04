const books = [
    {
        title: 'Jungle Book',
        author: 'Rudyard Kipling',
        price: 100
    },
    {
        title: 'Start with why',
        author: 'Simon Sinek',
        price: 200
    },
    {
        title: "Tale of two cities",
        author: 'Charles Dickens',
        price: 100
    }
]
class BookStore {

    getBooks() {
        return books 
    }

}


const bookStore = new BookStore()

module.exports =  bookStore


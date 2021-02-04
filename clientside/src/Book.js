import React from 'react'
import {
    useQuery, 
    gql
} from '@apollo/client'

const Book = ({title, author, price}) => {
    return (
        <div>
            <span>{title}</span>
            <span>{author}</span>
            <span>{price}</span>
        </div>
    )
    
}

const GQL_QUERY = gql `
    query GetBooks {
        books {
            author, 
            title, 
            price
        }
    }
`
const Books = ({props}) => {
    const {loading, error, data} = useQuery(GQL_QUERY)
    console.log("Data", data);
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    if (error) {
        return <div>
            Error
        </div>
    }
    
    return (
        <React.Fragment>
            {data.books.map((book) => (<Book {...book}/>))}
        </React.Fragment>
    )
}

export default Books 
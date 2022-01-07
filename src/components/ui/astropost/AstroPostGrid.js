import React from 'react'

const AstroPostGrid = ({ items, isLoading }) => {
    return isLoading ?  <h1>Loading...</h1>  : <section className="cards">
        {/* {items.map(item => (
            <h1>{item.title}</h1>
        ))} */}

    </section>
}

export default AstroPostGrid

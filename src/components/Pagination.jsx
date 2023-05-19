import React from 'react'

export const Pagination = ({productsPerPage,totalProducts,currentPage,setCurrentPage}) => {

  const pageNumbers=[]

//for (let i=1;i)

  return (
    <nav className="pagination is-centeredb mb-6" role="navigation" aria-label="pagination">
  <a className="pagination-previous">Previous</a>
  <a className="pagination-next">Next page</a>
  <ul className="pagination-list">
    <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
   
  </ul>
</nav>
  )
}

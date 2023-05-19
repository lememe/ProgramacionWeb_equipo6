import React from 'react'

export const Pagination = ({productsPerPage,totalProducts,currentPage,setCurrentPage}) => {

  const pageNumbers=[]

<<<<<<< HEAD
  console.log();
  for (let i=1;
    i <= Math.ceil(totalProducts/productsPerPage);
    i++
    ) {
     
    pageNumbers.push(i)
  }

  const onPreviusPage = () => 
  {
    setCurrentPage(currentPage -1)
  }
  
  const onNextPage = () => 
  {
    setCurrentPage(currentPage +1)
  }

  const onSpecificPage = (n) => 
  {
    setCurrentPage(n)
  }

  return (
    <nav 
      className="pagination is-centered mb-6" 
      role="navigation" 
      aria-label="pagination"
    >
      <a className={`pagination-previous ${currentPage===1 ? 'is-disabled': ''}`} onClick={onPreviusPage}>Atras</a>
      <a className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled':''}`} onClick={onNextPage}>Siguiente</a>
      <ul className='pagination-list'>
        
        { pageNumbers.map(noPage=>(
            <li key={noPage}>
              <a 
                className={`pagination-link ${noPage === currentPage ? 'is-current': ''
              }`}
                onClick={()=> onSpecificPage(noPage)}

              > 
                {noPage} 
              </a>
            </li>  
          ))
        }   
    </ul>
  </nav>
  );
};
=======
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
>>>>>>> d10f7feec0ac1944338aee72189b7790452465df

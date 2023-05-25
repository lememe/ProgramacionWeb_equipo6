import React from "react";
import '../App.css';

export const Pagination = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {
    const pageNumbers = []

    console.log();
    for (let i = 1;
        i <= Math.ceil(totalProducts / productsPerPage);
        i++
    ) {

        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <nav
            className="pagination is-centered mb-6"
            role="navigation"
            aria-label="pagination"
        >
            
            <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Atras</button>
            <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</button>
          
            
          
            <ul className='pagination-list'>

                {pageNumbers.map(noPage => (
                    <li key={noPage}>
                        <a
                            className={`pagination-link ${noPage === currentPage ? 'is-current' : ''
                                }`}
                            onClick={() => onSpecificPage(noPage)}

                        >
                            {noPage}
                        </a>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}

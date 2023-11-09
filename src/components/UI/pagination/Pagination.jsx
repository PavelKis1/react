import React from 'react'
import { getPagesArray } from '../../../utils/pages';

function Pagination({ totalPages, page, changePage }) {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className='page__wrapper'>
            {pagesArray.map(el =>
                <span
                    onClick={() => changePage(el)}
                    className={page === el ? 'page page--active' : 'page'}
                    key={el}
                >
                    {el}</span>
            )}
        </div>
    )
}

export default Pagination
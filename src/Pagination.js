import React from 'react';

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoPrevPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}   
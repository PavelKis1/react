import React from 'react'
import FormInput from './UI/input/FormInput'
import SortSelect from './UI/select/SortSelect'

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <FormInput
                value={filter.query}
                onChange={e => {
                    setFilter({...filter,query: e.target.value})
                }}
                placeholder='Search'
            />
            <SortSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Sort by'}
                options={[
                    { value: 'title', name: 'Title' },
                    { value: 'body', name: 'Descr' }
                ]}
            />
        </div>)
}

export default PostFilter
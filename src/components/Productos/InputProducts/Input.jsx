import React, { useState } from 'react'
import { ButtonSearch, InputSearch, InputSyled } from './inputStyled'
import { Search } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import * as categoriesActions from '../../../redux/categories/categories-actions'

const Input = () => {

    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const listOfCategories = useSelector(
        state => state.categories.categories
        ).map(category => category.category)

    const handlerSubmit = (e, value) => {
      e.preventDefault();

      const newCategory = value.trim().toLowerCase().split(" ").join("")

      const selectedCategory = listOfCategories.find(
        category => category.toLowerCase() === newCategory
      )

      if (selectedCategory) {
        dispatch(categoriesActions.selectCategory(selectedCategory))
      } else {
        alert("Categoria no encontrada")
      }

      setValue("")
    }

  return (
        
        <InputSearch onClick={e => e.preventDefault()}>
            <InputSyled
                placeholder='¿Qué estás buscando?'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <ButtonSearch 
              className='btnSearch'
              onClick={e => handlerSubmit(e, value)}
              >
                <Search />
            </ButtonSearch>
        </InputSearch>

  )
}

export default Input
import React from 'react'
import categories from './categories'
import { useDispatch } from 'react-redux'
import * as categoriesActions from '../../redux/categories/categories-actions'
import { BoxCategory, ContainerCategories } from './optionsStyled'

const OptionsCategories = () => {

    const dispatch = useDispatch()

  return (
    <ContainerCategories>
        { categories.map((category) => {
                    return (
                      <BoxCategory
                      key={category.id}
                      onClick={() => dispatch(categoriesActions.selectCategory(category.category))}
                      {...category}
                      >{category.title}</BoxCategory>
                      )
                  })
                  }
    </ContainerCategories>
  )
}

export default OptionsCategories
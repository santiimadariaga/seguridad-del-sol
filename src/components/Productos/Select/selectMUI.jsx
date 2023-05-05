import * as React from 'react';
import { ContainerSelect, FormControlStyled, NativeSelectStyled } from './selectMuiStyled';
import InputLabel from "@mui/material/InputLabel";
import categories from './categories';
import { useDispatch } from 'react-redux';
import * as categoriesActions from '../../../redux/categories/categories-actions'

const SelectMUI = () => {

    const [name, setName] = React.useState("");
    const handleChange = (e) => {
      setName(e.target.value);
    };

    const dispatch = useDispatch();

    return (
      
        <ContainerSelect>
            <FormControlStyled variant="standard">
                <InputLabel
                style={{fontSize: "clamp(13px, 2.5vw, 18px)", zIndex: "1", padding: "0 10px"}} 
                htmlFor="demo-customized-select-native"
                >Seleccione</InputLabel>
                <NativeSelectStyled
                  id="demo-customized-select-native"
                  value={name}
                  onChange={handleChange}
                >
                  <option
                    aria-label="None"
                    value=""
                    style={{backgroundColor: "rgb(255, 166, 166)"}}
                    ></option>
                  { categories.map((category) => {
                    return (
                      <option
                      style={{backgroundColor: "rgb(255, 166, 166)"}}
                      key={category.id}
                      onClick={() => dispatch(categoriesActions.selectCategory(category.category))}
                      {...category}
                      >{category.title}</option>
                      )
                  })
                  }
                    </NativeSelectStyled>
              </FormControlStyled>
        </ContainerSelect>
    )
  }

export default SelectMUI
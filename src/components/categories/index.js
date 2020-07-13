import React from 'react';
import { connect } from 'react-redux';
import { triggerActive } from '../../store/reducer';
import { Button, ButtonGroup } from '@material-ui/core';

const Categories = (props) => {
  return (
    <>
      <h3>Categories</h3>
      <div className='categories'>
        <ButtonGroup variant="contained" color="primary" aria-label="outlined secondary button group">

          {props.categoryReducer.categories.map(category => {
            return (
              // console.log(props),
              <Button key={category.name} onClick={() => props.triggerActive(category.name)}>
                {category.name}
              </Button>
            );
          })}

        </ButtonGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryReducer: state.categoryReducer,
    productsReducer: state.productsReducer,
  };
};

const mapDispatchToProps = { triggerActive };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
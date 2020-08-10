import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { triggerActive } from '../../store/reducer';
import { Button, ButtonGroup } from '@material-ui/core';
import{ getRemoteData, putRemoteData } from '../../store/actions';

const Categories = (props) => {
  // console.log('cat',props.categoryReducer);
  const fetchData = (x) => {
    props.get(x);
  };
  useEffect(() => {
    //superagent.get()
    fetchData('categories');
  }, []);
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

const mapDispatchToProps = dispatch => ({
  get:(hi) => dispatch(getRemoteData(hi)),
  put: (id, data) => dispatch(putRemoteData(id, data, 'categories')),
  triggerActive : (name)=>dispatch(triggerActive(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
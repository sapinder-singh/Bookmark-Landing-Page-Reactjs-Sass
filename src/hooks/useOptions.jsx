import { useReducer } from 'react';

function useOptions(props) {
  const optionsArray = Array(props.numberOfOptions);

  for (let i = 0; i < props.numberOfOptions; i++) {
    optionsArray[i] = i === props.initialActiveIndex ? 'active' : 'inactive';
  }

  const [optionsState, selectOption] = useReducer(
    changeOptionsState,
    optionsArray
  );

  function changeOptionsState(state, action) {
    return state.reduce((accumulator, elem, index) => {
      return [
        ...accumulator,
        // eslint-disable-next-line eqeqeq
        index == action.indexToSelect ? 'active' : 'inactive',
      ];
    }, []);
  }

  return [optionsState, selectOption];
}

export default useOptions;

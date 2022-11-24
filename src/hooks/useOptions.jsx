import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';

function useOptions({
  numberOfOptions,
  initialActiveIndex,
  activeClassName = 'active',
  inactiveClassName = 'inactive',
}) {
  const initialState = useMemo(() => {
    const array = Array(numberOfOptions);

    for (let i = 0; i < numberOfOptions; i++) {
      array[i] = i === initialActiveIndex ? 'active' : 'inactive';
    }
    return array;
  }, [initialActiveIndex, numberOfOptions]);

  /** Returns an Array of custom classnames for options depending on their state  */
  const reduceStateToClassNames = useCallback(
    state =>
      state.reduce(
        (accum, state) => [
          ...accum,
          state === 'active' ? activeClassName : inactiveClassName,
        ],
        []
      ),
    [activeClassName, inactiveClassName]
  );

  const [optionsState, setOptionsState] = useReducer(
    changeOptionsState,
    initialState
  );
  const [reducedClassNames, setReducedClassNames] = useState(
    reduceStateToClassNames(optionsState)
  );

  function changeOptionsState(state, action) {
    return state.reduce((accumulator, _elem, index) => {
      return [
        ...accumulator,
        // eslint-disable-next-line eqeqeq
        index == action.indexToSelect ? 'active' : 'inactive',
      ];
    }, []);
  }

  useEffect(() => {
    setReducedClassNames(reduceStateToClassNames(optionsState));
  }, [optionsState, reduceStateToClassNames]);

  return { optionsState, setOptionsState, reducedClassNames };
}

export default useOptions;

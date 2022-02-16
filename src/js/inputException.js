const exceptionTodoInput = (input) => {
  if (input === '') {
    return false;
  } else {
    return true;
  }
};

const exceptionTimeInput = (input) => {
  if (input.length !== 5) {
    return true;
  } else {
    return false;
  }
};

export { exceptionTodoInput, exceptionTimeInput };

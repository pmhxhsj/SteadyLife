const exceptionCategoryInput = (input) => {
  if (input === '') {
    return true;
  } else {
    false;
  }
};

const exceptionTodoInput = (input) => {
  if (input === '') {
    return true;
  } else {
    return false;
  }
};

const exceptionTimeInput = (input) => {
  if (input.length !== 5) {
    return true;
  } else {
    return false;
  }
};

export { exceptionTodoInput, exceptionTimeInput, exceptionCategoryInput };

const TodoList = require('../models/list');

// Controller - 서비스 로직

// 첫 페이지
exports.get = function (req, res) {
  console.log('------------!!Todo!!------------');
  TodoList.find({}, null, (err, list) => {
    res.render('main', { todoLists: list });
  });
};

// 작성
exports.write = async function (req, res) {
  try {
    const todoList = new TodoList({
      category: req.body.category,
      title: req.body.title,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });
    await todoList.save();
    console.log('==== Success!! Save New TodoList ====');
    console.table([
      {
        category: todoList.category,
        title: todoList.title,
        startTime: todoList.startTime,
        endTime: todoList.endTime,
      },
    ]);
    res.redirect('/main');
  } catch (err) {
    console.err('==== Fail!! Save TodoTask ====');
    res.redirect('/main');
  }
};

// 편집
exports.edit = function (req, res) {
  const id = req.params.id;
  TodoList.find({}, null, (err, list) => {
    res.render('todo-edit', { todoLists: list, idList: id });
  });
};

// 수정
exports.update = function (req, res) {
  const id = req.params.id;
  TodoList.findByIdAndUpdate(id, { content: req.body.title }, (err) => {
    if (err) {
      console.log('==== Fail!! Update TodoTask ====');
      console.error(err);
    }
    console.log('==== Success!! Update TodoTask ====');
    console.log('id: ' + id + '\nchanged content: ' + req.body.title);
    res.redirect('/main');
  });
};

//삭제
exports.remove = function (req, res) {
  const id = req.params.id;
  TodoList.findByIdAndRemove(id, (err) => {
    if (err) {
      console.log('==== Fail!! Remove TodoTask ====');
      console.error(err);
    }
    console.log('==== Success!! Remove TodoTask ====');
    console.log('id: ' + id);
    res.redirect('/main');
  });
};

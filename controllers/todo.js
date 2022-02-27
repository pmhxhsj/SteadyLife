// Model
const TodoTask = require('../models/todoTask');
// KST Setting
var moment = require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

// Controller - 서비스 로직

// 첫 페이지
exports.get = function (req, res) {
  console.log('Todo');
  console.log(req.query.date);
  TodoTask.find({ date: moment().format('YYYY-MM-DD') }, null, (err, tasks) => {
    res.render('todo', {
      todoTasks: tasks,
      user: req.user,
      currentDate: moment().format('YYYY-MM-DD'),
    });
  });
};

exports.getDate = function (req, res) {
  console.log('Todo');
  TodoTask.find({ date: req.query.date }, null, (err, tasks) => {
    res.render('todo', {
      todoTasks: tasks,
      user: req.user,
      currentDate: req.query.date,
    });
  });
};

const calculateTime = (time) => {
  return time.split(':').reduce((acc, cur, idx) => {
    if (idx === 0) return acc + Number(cur * 60);
    else return acc + Number(cur);
  }, 0);
};

const convertMinutesToHours = (min) => {
  const hour =
    String(Math.floor(min / 60)).length === 1
      ? '0' + String(Math.floor(min / 60))
      : String(Math.floor(min / 60));
  const minutes =
    String(min % 60).length === 1 ? '0' + String(min % 60) : String(min % 60);

  return hour + ':' + minutes;
};

// 작성
exports.write = async function (req, res) {
  try {
    const todoTask = new TodoTask({
      category: req.body.category,
      title: req.body.title,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      remainingTime: '',
      date: moment().format('YYYY-MM-DD'),
    });

    if (calculateTime(todoTask.startTime) < calculateTime(todoTask.endTime)) {
      todoTask.remainingTime = convertMinutesToHours(
        calculateTime(todoTask.endTime) - calculateTime(todoTask.startTime)
      );
    } else {
      todoTask.remainingTime = convertMinutesToHours(
        1440 -
          (calculateTime(todoTask.startTime) - calculateTime(todoTask.endTime))
      );
    }

    const validations = [
      todoTask.category.length > 0,
      todoTask.title.length > 0,
      todoTask.startTime.length === 5,
      todoTask.endTime.length === 5,
      todoTask.startTime !== todoTask.endTime,
    ];

    if (validations.every((validations) => validations)) {
      await todoTask.save();
      console.log('Success write!');

      res.redirect('/todo');
    } else {
      res.send(
        "<script>alert('항목을 제대로 입력해주세요🥲');location.href='/todo';</script>"
      );
    }
  } catch (err) {
    console.err('Fail!');
    res.redirect('/todo');
  }
};

// 편집
exports.edit = function (req, res) {
  const id = req.params.id;
  TodoTask.find({}, null, { sort: { date: -1 } }, (err, tasks) => {
    res.render('todo-edit', { todoTasks: tasks, idTask: id });
  });
};

// 수정
exports.update = function (req, res) {
  const id = req.params.id;
  let remainingTime;

  if (calculateTime(req.body.startTime) < calculateTime(req.body.endTime)) {
    remainingTime = convertMinutesToHours(
      calculateTime(req.body.endTime) - calculateTime(req.body.startTime)
    );
  } else {
    remainingTime = convertMinutesToHours(
      1440 -
        (calculateTime(req.body.startTime) - calculateTime(req.body.endTime))
    );
  }

  TodoTask.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      remainingTime: remainingTime,
    },
    (err) => {
      if (err) {
        console.log('Fail Update!');
        console.error(err);
      }
      console.log('Success Update!');
      res.redirect('/todo');
    }
  );
};

//삭제
exports.remove = function (req, res) {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) {
      console.log('Fail Remove!');
      console.error(err);
    }
    console.log('Success Remove!');
    res.redirect('/todo');
  });
};

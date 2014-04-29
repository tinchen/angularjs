var angular = angular || {};

// COLLECTION and MODEL
var TodoList = [];

// 資料從 localStorage 載入，實際上可 AJAX 從 DB 載入
TodoList.load = function () {
  if (localStorage.TodoList) {
    JSON.parse(localStorage.TodoList).forEach(function (todo) {
      TodoList.push(new Todo(todo.title, todo.order, todo.done));
    });
  }
  return TodoList;
};

// 資料存到 localStorage，實際上可 AJAX 存到 DB
TodoList.save = function () {
  localStorage.TodoList = JSON.stringify(TodoList);
};

// 刪除指定的待辦事項
TodoList.destroy = function (index) {
  TodoList.splice(index, 1);
};
  
var Todo = function (title, order, done) {
  this.title = title;
  this.order = order || TodoList.length + 1;
  this.done = done || false;
  this.editing = false;

  this.cssClass = function () {
    return this.editing ? 'editing' : (this.done ? 'done' : '');
  };

  this.toggle = function () {
    this.done = !this.done;
  };

  this.toggleEditing = function () {
    this.editing = !this.editing;
  };
};

// 定義一個 Todos Module 與 TodoCtrl CONTROLLER
var todosModule = angular.module('Todos', []);

todosModule.controller('TodoCtrl', function ($scope) {
  $scope.todoList = TodoList.load();
  // 當 $scope.todoList 內的資料有任何變更就儲存
  $scope.$watch('todoList', function () {
    TodoList.save();
  }, true);

  // 計算尚未完成的事項數目
  $scope.remaining = function () {
    var count = 0;
    TodoList.forEach(function (todo) {
      count += (!todo.done) ? 1 : 0;
    });
    return count;
  };

  // 計算已經完成的事項數目
  $scope.completed = function () {
    var count = 0;
    TodoList.forEach(function (todo) {
      count += (todo.done) ? 1 : 0;
    });
    return count;
  };

  // 加入一個新的待辦事項
  $scope.add = function ($event) {
    if ($event.keyCode != 13) return;
    TodoList.push(new Todo($scope.newTodoTitle));
    $scope.newTodoTitle = '';
  };

  // 刪除指定的待辦事項
  $scope.destroy = function (index) {
    TodoList.splice(index, 1);
  };

  // 刪除已經完成的待辦事項
  $scope.clearCompleted = function () {
    var index = TodoList.length;
    while (index--) {
      if (TodoList[index].done) {
        TodoList.splice(index, 1);
      }
    }
  };

  // 將所有的事項標為已經完成
  $scope.toggleAll = function () {
    TodoList.forEach(function (todo) {
      todo.done = $scope.allToggled;
    });
  };
});
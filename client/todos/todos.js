/*global angular */

var ENTER_KEY = 13;

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

// 加入一個新的待辦事項
TodoList.add = function ($event) {
  if ($event.keyCode != ENTER_KEY) return; // 非 Enter keypress 不處理
  TodoList.push(new Todo(TodoList.newTodo));
  TodoList.newTodo = '';
};

// 將所有的事項標為已經完成或未完成
TodoList.toggle = function () {
  TodoList.forEach(function (todo) {
    todo.done = TodoList.allToggled;
  });
};

// 刪除指定的待辦事項或所有已經完成的待辦事項
TodoList.destroy = function (index) {
  if (index !== undefined) {
    return TodoList.splice(index, 1);
  }
  
  index = TodoList.length;
  while (index--) {
    if (TodoList[index].done) {
      TodoList.splice(index, 1);
    }
  }
};

// 計算尚未完成的事項數目
TodoList.remaining = function () {
  return TodoList.$filter('filter')(TodoList, { done: false }).length;
};

// 計算已經完成的事項數目
TodoList.completed = function () {
  return TodoList.$filter('filter')(TodoList, { done: true }).length;
};

////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////

// 定義一個 Todos Module 與 TodoCtrl CONTROLLER
var todosModule = angular.module('Todos', []);

todosModule.controller('TodoCtrl', function ($scope, $filter) {
  TodoList.$filter = $filter;
  $scope.todoList = TodoList.load();
  
  // 當 $scope.todoList 內的資料有任何變更就儲存
  $scope.$watch('todoList', function () {
    TodoList.save();
  }, true);
});
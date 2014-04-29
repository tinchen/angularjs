var angular = angular || {};

// MODEL
var TodoList = [];
TodoList.save = function() {
    localStorage.TodoList = JSON.stringify(TodoList);
}
TodoList.init = function() {
    if (localStorage.TodoList) {
        JSON.parse(localStorage.TodoList).forEach(function(todo){
            TodoList.push(new Todo(todo.title, todo.order, todo.done));
        });
    }
    return TodoList;
}

var Todo = function(title, order, done){
   this.title = title;
   this.order = order || TodoList.length + 1;
   this.done = done || false;
   this.editing = false;
   
   this.cssClass = function() {
       return this.editing ? 'editing' : (this.done ? 'done' : '');
   };
   
   this.toggle = function() {
       this.done = !this.done;
   };
   
   this.toggleEditing = function() {
       this.editing = !this.editing;
   };
};

var todosModule = angular.module('Todos', []);

todosModule.controller('TodoCtrl', function($scope){
    $scope.todoList = TodoList.init();
    $scope.$watch('todoList', function() {
        TodoList.save();
    }, true);
    
    $scope.remaining = function(){
        var count = 0;
        TodoList.forEach(function(todo){
            count += (!todo.done) ? 1 : 0;
        });
        return count;
    };
    
    $scope.completed = function(){
        var count = 0;
        TodoList.forEach(function(todo){
            count += (todo.done) ? 1 : 0;
        });
        return count;
    };
    
    $scope.add = function($event){
        if ($event.keyCode != 13) return;
        TodoList.push(new Todo($scope.title));
        $scope.title = '';
    };

    $scope.destroy = function(index){
        TodoList.splice(index, 1);
    };
    
    $scope.clearCompleted = function(){
        var index = TodoList.length;
        while (index--) {
            if (TodoList[index].done) {
                TodoList.splice(index, 1);
            }
        }
    };
    
    $scope.toggleAll = function(){
        TodoList.forEach(function(todo){
            todo.done = $scope.allToggled;
        });
    };
});
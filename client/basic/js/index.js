var IndexCtrl = function($scope){
	$scope.examples = [
    { name: 'Home', href: '/' },
    { name: '基本的雙向綁定：ng-mode', href: 'hello.html' },
    { name: '基本的 Directives 語法：ng-init, ng-checked, ng-disabled 及 ng-readonly', href: 'init-ect.html' },
    { name: '基本的 MVC 雙向綁定：ng-controller', href: 'controller.html' },
    { name: '有條件顯示或隱藏內容：ng-show，ng-true-value，ng-false-value', href: 'show-hide.html' },
    { name: '顯示陣列的內容：ng-repeat (一)', href: 'repeat-1.html' },
    { name: '顯示陣列的內容：ng-repeat (二)', href: 'repeat-2.html' },
    { name: '顯示陣列的內容：ng-repeat (三)', href: 'repeat-3.html' },
    { name: '點擊的事件綁定：ng-click 與 ng-dblclick（一）', href: 'click-dblclick-1.html' },
    { name: '點擊的事件綁定：ng-click 與 ng-dblclick（二）', href: 'click-dblclick-2.html' },
    { name: '資料變更的事件綁定：ng-change', href: 'change.html' },
    { name: '焦點的事件綁定：ng-focus 與 ngBlur', href: 'focus-blur.html' },
    { name: '送出表單的事件綁定：ng-submit', href: 'submit.html' },
    { name: 'Filters（一）', href: 'filters-1.html' },
    { name: 'Filters（二）', href: 'filters-2.html' },
    { name: 'Filters（三）', href: 'filters-3.html' },
    { name: '顯示下拉選單：ng-options（一）', href: 'options-1.html' },
    { name: '顯示下拉選單：ng-options（二）', href: 'options-2.html' },
    { name: '顯示下拉選單：ng-options（三）', href: 'options-3.html' },
    { name: '取代 HTML 標籤裡的屬性：ng-href 與 ng-src', href: 'href-src.html' },
    { name: '取代 HTML 標籤裡的文字：ng-bind', href: 'bind.html' },
    { name: '模組化（Module）', href: 'module.html' },
    { name: 'Dependency Injection', href: 'inject.html' },
    { name: 'Route 與 ng-view', href: 'route.html' },
    { name: '移除或插入 View 區塊：ng-if', href: 'if.html' },
    { name: '設定 CSS Class（一）：ng-calss', href: 'calss.html' },
    { name: '設定 CSS Class（二）：ng-class-even 與 ng-class-odd', href: 'class-even-odd.html' },
    { name: '設定 CSS Style：ng-style', href: 'style.html' },
    { name: '以字元區隔的輸入方式：ng-list', href: 'list.html' },
    { name: '自訂過濾器', href: 'custom-filter.html' },
    { name: '自訂表達式（模板）符號', href: 'custom-interpolation.html' },
  ];
};

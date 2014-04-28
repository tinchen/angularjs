var FilterCtrl = function($scope, $filter){
  $scope.num = 1234.56789;
  console.log($filter('number')($scope.num, 5));
  $scope.birth = $filter('date')(new Date(), 'yyyy-MM-dd');
  $scope.obj = {
    name: 'abgne.tw', 
    age: 18, 
    skills: [ 'jQuery', 'JavaScript']
  };
  $scope.text = 'auto LOWER OR upper case';
};

var TableFilterCtrl = function($scope, $filter){
	var friends = [{
		name: '男丁格爾', 
		age: 18,
		skills: [ 'jQuery', 'JavaScript', 'Angular.js' ]
	}, {
		name: 'jelly', 
		age: 16,
		skills: [ 'Photoshop', 'Flash' ]
	}, {
		name: '梅干桑', 
		age: 30,
		skills: [ 'Photoshop', 'Camera', 'Wordpress' ]
	}, {
		name: '莫希爾', 
		age: 31,
		skills: [ 'Php', 'Android', 'UX' ]
	}, {
		name: '漩渦鳴人', 
		age: 17,
		skills: [ '色誘術', '後宮術', '螺旋丸', '尾獸玉' ]
	}, {
		name: '蒙其·D·魯夫', 
		age: 19,
		skills: [ '橡膠槍', '橡膠火箭砲', '換檔', '霸氣' ]
	}, {
		name: '羅羅亞·索隆', 
		age: 21,
		skills: [ '無刀流', '煩惱鳳', '阿修羅', '霸氣' ]
	}, {
		name: '娜美', 
		age: 20,
		skills: [ '天候棒', '魔法天候棒', '棍術' ]
	}, {
		name: '騙人布', 
		age: 19,
		skills: [ '鐵鎚', '超巨大火鳥星', '必殺‧鐵人彗星' ]
	}, {
		name: '香吉士', 
		age: 21,
		skills: [ '肩肉 SHOOT', '惡魔風腳', '六式', '霸氣' ]
	}, {
		name: '多尼多尼·喬巴', 
		age: 17,
		skills: [ '腳力強化', '頭腦強化', '彈力強化', '毛皮強化', '腕力強化' ]
	}, {
		name: '妮可·羅賓', 
		age: 30,
		skills: [ '眼花繚亂', '六十輪花', '百花繚亂', '萬紫千紅' ]
	}, {
		name: '佛朗基', 
		age: 36,
		skills: [ '佛朗基火球', '風來噴射', '鋼鐵海賊', '佛朗基將軍', '將軍砲' ]
	}, {
		name: '布魯克', 
		age: 90,
		skills: [ '催眠曲·輪舞', '鼻唄三丁·矢筈斬', '冰凍劍', '哼歌·吹雪斬' ]
	}];

	// filter
	// $scope.search = { name: '布' };
	// $filter('filter')($scope.friends, $scope.search, true);
	
	$scope.limitTo = 5;

	var expression = 'age';
	var reverse = false;
	$scope.filter = function(field) {
        if (field) {
            reverse = (expression != field) ? false : !reverse;
            expression = field;
        }
        $scope.friends = $filter('orderBy')(friends, expression, reverse);
        $scope.friends = $filter('limitTo')($scope.friends, $scope.limitTo);
	}
	
	$scope.filter();
};
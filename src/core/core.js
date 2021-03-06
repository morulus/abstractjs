define(['./../common/extend.js','./var/nativeClasses.js'], function(extend, nativeClasses) {
	
	var Abstract = function(Subject, forceType){
		return Abstract.scope(Subject, forceType);
	};
	/*
	Функция расширения самого себя
	*/
	Abstract.extend = function(data) {

		extend(Abstract, data);
		
		return Abstract;
	}
	/*
	Классы
	*/
	Abstract.classes = {};
	/*
	Таблица присваиваний классов. По умолчанию заполнена системными классами с пустыми связями.
	*/
	
	Abstract.classesAssignmentsMap = {};
	for (var i = 0;i<nativeClasses.length;i++) {
		Abstract.classesAssignmentsMap[nativeClasses[i]] = [];
	}

	return Abstract;
});
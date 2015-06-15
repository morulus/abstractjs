define(['./../core.js','./../var/classCreator.js'], function(core, classCreator) {
	/*
	Регистрирует в системе новый класс на основе шаблона дефолтного абстрактного класса
	*/
	core.extend({
		class: function(className) {
			/*
			Получаем класс
			*/
			if ("function"===typeof core.classes[className]) {
				return core.classes[className];
			} else {
				return null;
			}
		}

	});
});
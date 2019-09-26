AOS.init();

TweenMax.from(
	'.intro__img', 
	3, 
	{
		opacity: 0, 
		scale: 0.4, 
		ease:Power3.easeOut, 
		y: -500, 
		delay: 0.35
	}
);

TweenMax.from(
	'.intro__info', 
	3, 
	{
		opacity: 0,  
		ease:SlowMo.easeOut,
		y: 70, 
		delay: 1.5,
	}
);

TweenMax.from(
	'.navbar__logo', 
	2.5, 
	{
		opacity: 0, 
		scale: 0.01, 
		ease:Elastic.easeOut, 
		x: -300, 
	}
);

TweenMax.from(
	'.navbar__items', 
	2.5, 
	{
		opacity: 0, 
		scale: 0.01, 
		ease:Expo.easeOut, 
		x: 300, 
	}
);

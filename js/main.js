TweenMax.from(
	'.intro__img', 
	3, 
	{
		opacity: 0, 
		scale: 0.4, 
		ease:Power3.easeOut, 
		y: -500, 
		delay: 0.8
	}
);

TweenMax.from(
	'.intro__info', 
	3, 
	{
		opacity: 0, 
		scale: 0.1, 
		ease:Power3.easeOut, 
		y: 500, 
		delay: 0.7,
		rotation: 200
	}
);

TweenMax.from(
	'.navbar__logo', 
	2, 
	{
		opacity: 0, 
		scale: 0.01, 
		ease:Bounce.easeOut, 
		x: -300, 
	}
);

TweenMax.from(
	'.navbar__items', 
	2, 
	{
		opacity: 0, 
		scale: 0.01, 
		ease:Expo.easeOut, 
		x: 300, 
	}
);

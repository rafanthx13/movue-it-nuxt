// Funçâo apra tocar o áudio. Audio é default do vue
export const playAudio = (path: string) => new Audio(path).play();

// Criar a notificação. Audio é default do vue
export const sendNotification = (title: string, options: object) => new Notification(title, options);

// pad-size ranforma '0' em '00'
export const splitValue = (value: number | string, padSize: number = 2) => `${value}`.padStart(padSize, '0').split('');

export const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export const scrollToElement = (selector: string) => {
	// Aqui é JS puro
	// Vou selecionar o elemento #challenge
	const card: HTMLElement | null = document.querySelector(selector);
	// Faz Media Query até 639px
	const mq = window.matchMedia('(max-width: 639px)');
	// Se tudo ai der certo
	if (card && mq.matches) {
		// Ele vai rolar até o card de forma suave em tela de até 639px
		card.scrollIntoView({ block: 'start', behavior: 'smooth' });
	}
};

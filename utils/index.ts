// Funçâo apra tocar o áudio. Audio é default do vue
export const playAudio = (path: string) => new Audio(path).play();

// Criar a notificação. Audio é default do vue
export const sendNotification = (title: string, options: object) => new Notification(title, options);

// pad-size ranforma '0' em '00'
export const splitValue = (value: number | string, padSize: number = 2) => `${value}`.padStart(padSize, '0').split('');

export const scrollToElement = (selector: string) => {
	const card: HTMLElement | null = document.querySelector(selector);
	const mq = window.matchMedia('(max-width: 639px)');

	if (card && mq.matches) {
		card.scrollIntoView({ block: 'start', behavior: 'smooth' });
	}
};

export const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min);
};

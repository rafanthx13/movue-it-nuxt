# Como funciona Nuxt

### /pages

Cada page é uma rota da nossa aplicação

### /layout

Define o conteduo fora de '/pages' ou seja, coisas com header e footer que é compatilhand entre várias páginas


### Alterar meta tags do header do html

O head abaixo altera o titulo

````
interface Head {
	title: string;
}


export default Vue.extend({
	head (): Head {
		return {
			title: 'Home | movue.it',
		};
	},
````

Para ver outras tags que possa acesar, acesse  ``vue-metatag

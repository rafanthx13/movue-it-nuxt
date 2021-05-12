# Como funciona Nuxt

### /pages

Cada page é uma rota da nossa aplicação

### /layout

Define o conteudo fora de '/pages' ou seja, coisas com header e footer que é compatilhand entre várias páginas


### Alterar meta tags do header do html

O head abaixo altera o titulo

````javascript
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

Para ver outras tags que possa acesar, acesse  `vue-metatag`

## ARQUIVOS ESTÁTICOS

ficam na pasta `/static` e devem ser configurados em  `nuxt.config.js`.

Se configurado corretamente, toda referÊncia a algo static será feita sem utilizar todo  o path.

Ex: ``playAudio('/notification.mp3');``

## path com `~`

~: Representa a razi do nosso projeto

##

v-on ==> @
v-binda ==> :

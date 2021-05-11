# Start Nuxt TS  

````
create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in movue-it-nuxt
? Project name: movue-it-nuxt
? Programming language: TypeScript
? Package manager: Npm
? UI framework: Tailwind CSS
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: (Use arrow keys)
> Git
````

## CONFIGURANDO PROJETO

+ deletar components/Logo.vue
+ layout/default.vue
  + ````
  + <template>
  <div>
    <Nuxt />
  </div>
</template>
  ````
  + page/index.vue
  + ````
<template>
  <div />
</template>

````
+ na pasta static: coloca as imagens
+ Deltar a pasta de test (pois testse vai haver a cada pasta
+ 
Em packege.js)
mudar de
````
"lint:js": "eslint --ext \".js,.vue\" --ignore-path .gitignore .",
````
para

````
// lint no typescript
"lint": "eslint --ext \".ts,.js,.vue\" --ignore-path .gitignore .",
		"test": "jest", // executar text
		"test:watch": "jest --watchAll", // ficar vigiando (auto reload)
		"test:coverage": "jest --collectCoverage" //coletar cobertura
````

em jest.config.js por:
````
collectCoverage: false
````
para coletar somente uqndo agente executar aquele comando

Instalar pacotes

# Cookies no Nuxt || tipos par ao jest || 
npm install --save cookie-universal-nuxt @types/jest


e tambem (manual) (NA PARTE DE DEV DEPENDENCIS)
"autoprefixer": "^9",
"postcss": "^7",
		"tailwindcss": "npm:@tailwindcss/postcss7-compat",

CONFIGURAR ESLINT
+ COPIA DELE

jest.config
+ pegar o dele (vai incluir mas coisa apra serem vigiadas pelo jest, e tambem, vai excluir types.ts
+ 

types/vue-shim.d.ts
+ Serve para o VSCODe reconhecr melhor os arquivos vue com TS
+ The first file helps your IDE to understand what a file ending in .vue is

Configurar NUXT
+ na parte de 'link' por 3 linhas: novo favicon e 2 linhas para instaalr fontes do google
+ css global da nossa aplicaçâo
  + criar os srquivos css vaizos
+ modules:
  + colcoar o cooki-universal com um alias para fazer this.cookiz ao invez do nome grande completo dele

Copy tailwind do repo dele o arquivo tailwind.config

configurar ts.config
+ adicionar @types/jest

em gitignore
+ adicionar 'coverage'






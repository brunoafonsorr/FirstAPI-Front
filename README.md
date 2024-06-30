# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# [DevClub | Programação](https://www.youtube.com/@canaldevclub)
Neste vídeo, você aprenderá a construir uma aplicação web do zero usando React. 

Começaremos com os conceitos básicos, passando pela criação de componentes e gerenciamento de estado, até chegar à integração com um back-end e o consumo de APIs. 

Este vídeo é perfeito tanto para iniciantes quanto para aqueles que desejam reforçar seus conhecimentos em React. 

Vou guiá-lo passo a passo na criação de uma aplicação completa, conectando o front-end ao back-end, para que você possa entender e aplicar essas habilidades em seus próprios projetos.
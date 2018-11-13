# Basic front-end development package

This is a basic starter template to be used in small front-end web application development. It consists of the following components:

1.  [ParcelJS - Blazing fast, zero configuration web application bundler](https://parceljs.org)
1.  [Bulma - a modern CSS framework based on Flexbox](https://bulma.io)
1.  [Vue.js - The progressive JavaScript Framework](https://vuejs.org)

## Installation

Just clone the files from git repo and run `npm install`.

```bash
#Clone the repository

git clone https://github.com/mfk-smart/parceljs-vue-bulma.git

#Change to folder
cd parceljs-vue-bulma

#Install using npm
npm install

#Start development server
npm run dev

#Build for production
npm run build
```

## Scripts Usage

You can generate pages and components quickly by using the following commands:

```
# Generate page with route and store files
# Route and store import strings are also added to main route and store.

npm run page-create -- -n SamplePage -r -s

# Just generate page with route and store files
# This one will not add import strings to main route or store.

npm run page-create -- -n SamplePage
```

Similar approach is used for component generation. There's no route option.

```
# Generate component with store file
# Store import string is also added to main store.

npm run subcomponent-create -- -n SampleComponent -s

# Just generate page and store file
# This one will not add import strings to main store.

npm run subcomponent-create -- -n SampleComponent
```

## Linting and Formatting

I'm using `ESLint` and `Prettier` for code linting and formatting. Following is the lines from my `.vimrc` configuration to  use ALE, ESLint and Prettier together:

```vim

"... Install ALE and vim-prettier
Plug 'w0rp/ale'
Plug 'prettier/vim-prettier', { 'do': 'npm install' }

"... Select linter and fixer
let g:ale_linters              = { 'javascript': ['eslint'] }
let g:ale_fixers               = { 'javascript': ['prettier'] }

```

## File Structure

```
Root
├── .git                    (git folder)
├── .cache                  (cache folder, created by parcel after build, git ignored)
├── dist                    (distribution folder, created by parcel after build, git ignored)
├── node_modules            (git ignored)
├── scripts                 (bash scripts to create create page and subcomponents)
├── src
│   ├── app.js
│   ├── components
│   │   ├── pages
│   │   └── subcomponents
│   ├── css
│   │   └── customs.scss
│   ├── images
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   └── index.html          (entry point)
├── templates               (template files to be used for pages and subcomponents
├── .eslintrc.js            (ESLint configuration)
├── .gitignore
├── .prettierrc.js          (Prettier configuration)
├── README.md               (this file)
├── package-lock.json
└── package.json
```

## Licence

This project is licensed under MIT

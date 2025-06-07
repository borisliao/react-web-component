# React + TypeScript + Vite through Web Components

This template provides a starting point to create a web component compiler setup via Vite for a React application.

Note: This template compiles a `.udm.js` to generate a web component that runs React. It isn't a React app that contains web components.

See it in action here: [https://borisliao.github.io/react-web-component](https://borisliao.github.io/react-web-component)

Bundle size: about 197.32 kB │ gzip: 63.63 kB

# Should you distribute React apps like this?

No. But if you have no other way distribute your application in your host app, using web components can provide a compatability layer for legacy applications to React. It beats iframes any day.

# Getting Started

1. `npm i`
   Then, do any of the following:
1. `npm run dev` to develop your react web component
1. `npm run build` & `npm run preview` to see your web component how a consumer would see it

# Usage

Modify your react component in `App.tsx`

Modify web component props in `src/main-web-component.tsx` and `App.tsx`

Modify the name of the web component by renaming `package.json name`

Enable web component shadow-dom in `src/main-web-component.tsx`

See how consumers use your web component in `public/index.html`

# Caveats

Enabling the shadow dom will totally isolate your web component from the host application. However, when you do this, you will need to

- reconfigure how you import your css styles in `src/main-web-component.tsx`
- modify how you find the ref for React.createPortal() (or tell consumers to add another line to import this component)

# 📦 Punjucks

Sorry about the terrible name. I love [ParcelJS](https://parceljs.org) but got sad that it doesn’t support HTML templating languages other than Pug. This project uses the [nunjucks-to-html](https://github.com/AlexisPuga/nunjucks-to-html) package to convert Nunjucks files to HTML during development with Parcel. It also includes [Tailwind CSS](https://tailwindcss.com/) and an SVG sprite generator, because I often need those things. Happy days 😎

## To start

```
npm start
```

## To build

```
npm run build
```

## SVG sprite

Add SVG icons to _src/icons_ directory and run `npm run build:svg`.

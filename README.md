# Audeas Headless Website

Sitio institucional de AUDEAS (Asociación Universitaria de Educación Agropecuaria Superior), desarrollado con enfoque headless utilizando Next.js como frontend y WordPress como CMS.

🔗 [Sitio en producción](https://www.audeas.com.ar)

## Tecnologías principales

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ShadCN/UI
- WordPress REST API
- PhotoSwipe (galería de imágenes)
- React Hook Form (formularios)

## 🚀 Instalación local

``` bash

git clone https://github.com/imanolortega/audeas-headless-website.git
cd audeas-headless-website
npm install

```

Crear un archivo .env.local con las siguientes variables:

```bash
WORDPRESS_URL="https://wordpress.com"
WORDPRESS_HOSTNAME="wordpress.com"
```

Luego iniciar el entorno de desarrollo:

``` bash

npm run dev

```


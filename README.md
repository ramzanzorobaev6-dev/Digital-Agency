# Digital Agency

A responsive multi-page website for a modern digital product agency.

## 📖 About the Project

**Digital Agency** is a multi-page frontend project created to showcase the services, portfolio, workflow, company information, careers, and contact options of a fictional digital product agency.

The project was built with a focus on responsive design, semantic HTML, reusable styles, structured SCSS architecture, accessibility, and lightweight JavaScript interactions.

## 🌐 Pages

* **Home** — agency introduction, services, trusted companies, testimonials, and project interests.
* **Services** — digital services offered by the agency.
* **Work** — portfolio and featured projects.
* **Process** — overview of the agency's workflow.
* **About** — company information and history.
* **Careers** — career opportunities and available positions.
* **Contact** — contact information, feedback form, budget range slider, and FAQ.

## 🛠️ Technologies

* **HTML5** — semantic and accessible markup
* **SCSS / Sass** — modular and maintainable styling
* **JavaScript** — interactive functionality
* **SVG Sprite** — reusable interface icons
* **BEM** — CSS class naming methodology
* **Responsive Web Design** — adaptation for different screen sizes

## ✨ Features

* Responsive multi-page layout
* Mobile burger navigation
* Custom budget range slider
* Interactive FAQ using native HTML elements
* SVG Sprite with reusable icons
* `currentColor` for flexible SVG icon styling
* Modular JavaScript
* BEM methodology
* Modular SCSS architecture
* Semantic HTML
* Accessible form controls
* Meaningful image `alt` attributes
* Lazy loading for appropriate images

## 📂 Project Structure

```text
Digital-Agency/
│
├── global/
│   ├── images/
│   │   └── icons/
│   │       ├── logo/
│   │       ├── source/
│   │       └── sprite.svg
│   └── ...
│
├── pages/
│   ├── home-page/
│   ├── services-page/
│   ├── works-page/
│   ├── process-page/
│   ├── about-page/
│   ├── careers-page/
│   └── contact-page/
│
├── script/
│   ├── main.js
│   └── range-slider.js
│
├── index.html
├── services.html
├── works.html
├── process.html
├── about.html
├── careers.html
├── contact.html
│
├── style.scss
└── style.css
```

## ⚙️ JavaScript

JavaScript functionality is divided into reusable modules.

### `main.js`

Contains functionality shared across the website, including the mobile burger menu.

### `range-slider.js`

Contains the custom budget range slider used on the **Home** and **Contact** pages.

Separating the functionality this way keeps the code organized and avoids unnecessary duplication.

## 🎨 SVG Sprite

The project uses an SVG Sprite to store and reuse interface icons throughout the website.

Icons are included using the `<svg>` and `<use>` elements:

```html
<svg class="social__icon">
    <use href="./global/images/icons/sprite.svg#facebook"></use>
</svg>
```

The original SVG files are stored in the `global/images/icons/source/` directory and are used to generate the sprite.

SVG icons use `currentColor`, allowing their colors to be controlled directly through CSS.

## 📱 Responsive Design

The website is designed to work across different screen sizes:

* Desktop
* Tablet
* Mobile

The navigation transforms into a burger menu on smaller screens, while the page layouts adapt to the available viewport width.

## ♿ Accessibility

Accessibility was considered throughout the project.

Implemented practices include:

* semantic HTML elements;
* meaningful `alt` attributes for informative images;
* empty `alt=""` attributes for decorative images;
* properly associated form labels and inputs;
* accessible labels for icon-only buttons;
* native interactive HTML elements where appropriate.

## 🚀 Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Open the project in your code editor and run it using a local development server.

For example, you can use the **Live Server** extension in Visual Studio Code.

## 🔗 Live Demo

[View Live Demo](live-demo-url)

## 📸 Preview

*Add screenshots of the project here.*

## 👤 Author

**Ramzan**

Frontend development project created as part of my web development learning journey.

# Personal Portfolio

A responsive personal portfolio website by **Ernesto Gagate Jr**, built as part of the MST Connect PH Full-Stack Web Development Bootcamp. The site introduces me as an aspiring full-stack web developer and showcases my current skills, projects, contact information, and professional links.

## Live Demo

> Add your GitHub Pages link here after deployment.

[View Portfolio](https://eagagate02.github.io/portfolio-website/) _(not live yet: create and publish the repository first)_

## Screenshot

> Add a homepage screenshot to your `images/` folder, then update the path below.

![Portfolio Homepage](images/portfolio-homepage.png)

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3.3
- JavaScript (plain browser JavaScript, no libraries)
- Git
- GitHub
- GitHub Pages

## Main Features

- Responsive Bootstrap navigation with a collapsible mobile menu
- Light and dark colour modes using Bootstrap 5.3 `data-bs-theme`, remembered per visitor
- Scrollspy navigation that highlights the section currently in view
- Skip link so keyboard users can jump straight to the main content
- Client-side contact form validation with inline error messages
- Hero section with name, developer title, profile photo, and call-to-action buttons
- About section describing current learning goals
- Skills section using responsive Bootstrap cards
- Projects section with responsive project cards
- Technology badges for project tools
- Project cards for private repositories, described without dead links
- Contact section with a Bootstrap-styled form
- GitHub and LinkedIn links
- Mobile-first custom media queries
- Responsive image handling
- Accessible labels, alt text, heading structure, and focus states
- GitHub Pages-ready project structure

## Portfolio Sections

### Home / Hero

Introduces **Ernesto Gagate Jr** as an aspiring full-stack web developer and includes buttons for viewing projects and visiting GitHub.

### About

Provides a short introduction about current learning goals, front-end development skills, and plans to continue growing the portfolio.

### Skills

Highlights the technologies and tools currently being learned:

- HTML
- CSS
- Bootstrap
- Git & GitHub

### Projects

A responsive project-card layout showing four projects. The first three are
built on private repositories, so the cards describe the work instead of
linking to code.

**RR Garage Management System**  
An operations system for an auto repair shop. Job orders track the parts and
labour on each vehicle, payments can be split into installments, stock
movements are kept as an auditable history, and the owner gets dashboard and
sales reporting. Laravel 12 REST API with a service-layer architecture.

**Metacom CRM**  
A recruitment CRM that carries applicants from sourcing through screening,
endorsement and placement. Adds branch and client management, commission
tracking, ad spend, a rules-based automation engine, and full audit logging.

**VBG Point-of-Sale**  
A point-of-sale and inventory system for a retail business. Covers products,
categories and suppliers, records deliveries and stock levels, generates
barcodes and receipt numbers, and keeps an audit trail of every user action.
Built on CodeIgniter 3.

**Personal Portfolio**  
This site. Semantic HTML, Bootstrap and custom CSS, with a light and dark
colour mode and a mobile-first layout.

### Contact

Includes a contact form with fields for:

- Name
- Email address
- Message

The current form is for front-end demonstration only and does not send messages until it is connected to a backend or form service.

## Responsive Design

The portfolio follows a mobile-first approach: the base styles target the
smallest screens and each `min-width` media query layers on refinements.

Custom media queries are used at:

- `576px` — large phones
- `768px` — tablets
- `992px` — small laptops
- `1200px` — large desktops

Bootstrap responsive classes are also used so layouts can stack on small screens and expand into multiple columns on larger screens.

## Project Structure

```text
personal-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── profile.jpg
└── README.md
```

## Setup / Viewing Instructions

### Option 1: Open Locally

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Make sure `index.html`, `css/style.css`, `js/main.js`, and the `images/` folder are present.
4. Open `index.html` in your browser.

Because Bootstrap is loaded through a CDN, an internet connection is needed for Bootstrap styling and the collapsible navigation JavaScript.

### Option 2: Clone with Git

```bash
git clone https://github.com/eagagate02/portfolio-website.git
cd portfolio-website
```

Then open `index.html` in your browser.

## Deployment

This project is designed to be deployed using GitHub Pages.

Basic deployment steps:

1. Push the project to a public GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch.
7. Select `/(root)`.
8. Save and wait for GitHub Pages to publish the website.
9. Add the live website URL to this README.

## Before Final Submission

Replace the following placeholders:

- Create the public repository you intend to deploy from. `portfolio-website`
  does not exist yet, and the `portfolio` repository is currently private.
- Update the Live Demo link at the top of this README once GitHub Pages is live
- Add a desktop or mobile screenshot of the homepage
- Delete `index.html.bak` and `css/style.css.bak`

## Author

**Ernesto Gagate Jr**  
Aspiring Full-Stack Web Developer

### Professional Links

- GitHub: https://github.com/eagagate02
- LinkedIn: https://www.linkedin.com/in/YOUR-USERNAME

---

Built while learning responsive web development, Bootstrap, Git, GitHub, and front-end deployment.

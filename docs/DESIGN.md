D:.
│   index.html
│   .env                    (For storing sensitive keys or configuration)
│   README.md               (Project description and setup instructions)
│
├───assets
│   ├───css
│   │   ├── global.css      (General resets and base styles)
│   │   ├── components.css  (Navbar, footer, buttons)
│   │   ├── pages           (Specific page styles)
│   │   │       blog.css
│   │   │       health.css
│   │   │       ...
│   │   └── theme.css       (Shared theme variables)
│   │
│   ├───img
│   │   ├───logo
│   │   └───social
│   │
│   └───js
│       ├───components      (Reusable JS for components like navbar/footer)
│       ├───core            (Shared utilities and initialization scripts)
│       │       common.js
│       │       form.js
│       │       routes.js
│       │
│       ├───pages           (Page-specific scripts)
│       │       index.js
│       │       blog.js
│       │
│       └───plugins         (Third-party or modular add-ons)
│               chatbot.js
│
├───components
│   ├───shared              (Reusable components: navbar, footer)
│   │       navbar.html
│   │       footer.html
│   │
│   └───static              (Standalone static components)
│           contact.html
│           privacy.html
│           terms_of_service.html
│
├───data
│       sample-data.json    (Placeholder for structured data)
│
├───docs                    (Project documentation)
│       README.md
│       DESIGN.md
│       API.md
│
└───pages
    ├───auth                (Authentication pages)
    │       sign_in.html
    │       sign_up.html
    │
    ├───blog
    │       post1.html      (For individual blog posts)
    │       post2.html
    │
    └───sections            (Main feature pages)
            agriculture.html
            finance.html
            health.html
            music.html
            others.html

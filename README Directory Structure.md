
# Project Directory Structure

This is the structure for the **Sri Someshwara Shivagnana Peetham Website Project**.

## Directory Structure with Naming Conventions

```
my-app/
│
├── public/                        # Public assets (static files accessible from the browser)
│   ├── assets/                    # All static assets (images, audio, video, fonts)
│   │   ├── images/                # Image files
│   │   │   ├── logo.svg           # Logo image (SVG for scalability)
│   │   │   ├── temple-photo.jpg   # Example image for the temple
│   │   │   └── events/             # Folder for event-related images
│   │   ├── audio/                 # Audio files (e.g., devotional chants, poojas)
│   │   ├── video/                 # Video files (e.g., temple rituals, events)
│   │   └── fonts/                 # Font files
│   ├── favicon.ico                # Favicon for the website
│   └── index.html                 # Root HTML file for public access
│
├── src/                           # Core source files for React app
│   ├── components/                # Reusable UI components
│   │   ├── header/                # Header component related files
│   │   │   ├── header.js          # Main header component
│   │   │   └── logo.js            # Logo component (if reusable)
│   │   ├── footer/                # Footer component related files
│   │   │   └── footer.js          # Main footer component
│   │   ├── event-card/            # Event card component for displaying events
│   │   │   └── event-card.js      # Event card component
│   │   └── donation-form/         # Donation form component
│   │       └── donation-form.js   # Donation form component
│   ├── pages/                     # Page-level components (represents entire pages)
│   │   ├── home/                  # Home page related files
│   │   │   └── home-page.js       # Home page component
│   │   ├── about/                 # About Us page related files
│   │   │   └── about-page.js      # About Us page component
│   │   ├── services/              # Services page related files
│   │   │   └── services-page.js   # Services page component
│   │   ├── events/                # Events page related files
│   │   │   └── events-page.js     # Events page component
│   │   ├── store/                 # Online Store page related files
│   │   │   └── store-page.js      # Online store page component
│   │   ├── blog/                  # Blog page related files
│   │   │   └── blog-page.js       # Blog page component
│   │   └── contact/               # Contact Us page related files
│   │       └── contact-page.js    # Contact Us page component
│   ├── context/                   # Context API for global state management
│   ├── hooks/                     # Custom React hooks (for reusable logic)
│   ├── services/                  # Functions handling external API calls
│   │   ├── donation-service.js    # Donation-related API functions
│   │   ├── events-service.js      # Event-related API functions
│   │   └── notification-service.js # Notification sending functions
│   ├── utils/                     # Utility functions (e.g., date formatting, validations)
│   ├── styles/                    # Global styles (CSS/SCSS or styled-components)
│   ├── App.js                     # Main React component (root app file)
│   └── index.js                   # Entry point for React application
│
├── config/                        # Configurations for external services
│   ├── firebase.js                # Firebase or backend configuration
│   ├── payment-gateway.js         # Configuration for payment gateway integration
│   └── notification-config.js     # Configuration for notification services (email/SMS)
│
├── blog/                          # Blog-related files
│   ├── posts/                     # Blog content in markdown or JSON
│   │   ├── post1.md               # Example of a blog post
│   │   └── post2.md               # Another blog post
│   └── admin/                     # Admin interface for blog management
│       └── create-post.js         # Form for creating new blog posts
│
├── store/                         # E-commerce/Online Store functionality
│   ├── products/                  # Product files (e.g., names, descriptions, prices)
│   ├── cart/                      # Cart-related components or services
│   ├── checkout/                  # Checkout-related components or services
│   ├── orders/                    # Order management files
│   └── store-service.js           # Services related to online store (API calls)
│
├── notifications/                 # Notifications system for Peetham members
│   ├── message-service.js         # Service for sending notifications (SMS/email)
│   └── user-notifications.js      # Logic for managing user notifications
│
├── .gitignore                     # Git ignore file (for version control)
├── package.json                   # Project metadata and dependencies
├── README.md                      # Project documentation and setup instructions
└── yarn.lock                      # Yarn lock file (if using yarn)
```

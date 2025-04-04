# Wonderla

This project is a component of the website [Wonderla](https://www.wonderla.com/).

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/Himanshu12102004/wonderla
```

### Install Dependencies & Start the Project
```bash
cd wonderla
npm install
npm run dev
```

### View the Website
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

The project follows this structure:

```
.
└── src/
    └── app/
        ├── components/          # Contains individual components
        │   └── componentName/
        │       └── subComponents/ # Sub-components for the component
        ├── data/                 # Holds JSON data
        ├── ride-selection/       # Main component to be developed
        └── rides/                # Routing for dummy links
```

### Folder Details
- **`components/`** → Houses all UI components, each inside its own folder.
- **`data/`** → Stores JSON data used across the website.
- **`ride-selection/`** → Contains the main component to be developed.
- **`rides/`** → Used for routing dummy links.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes & commit them.
4. Raise a Pull Request (PR) for review.


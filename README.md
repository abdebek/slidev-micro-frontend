# Microfrontend Demo

This project demonstrates a microfrontend architecture using Vue.js for the landing page and Slidev for presentations.

## Project Structure

- `landing/` - Vue.js based landing page (port 3000)
- `slides/` - Slidev based presentation (port 3001)

## Getting Started

### Prerequisites

- Node.js 16+
- npm 7+

### Installation

```bash
# Install dependencies for the root project and all microfrontends
npm install
```

### Development

```bash
# Run both microfrontends in development mode
npm run dev

# Run only the landing page
npm run dev:landing

# Run only the slides
npm run dev:slides
```

### Building for Production

```bash
# Build all microfrontends
npm run build

# Build only the landing page
npm run build:landing

# Build only the slides
npm run build:slides
```

### Preview Production Build

```bash
# Preview all microfrontends
npm run preview

# Preview only the landing page
npm run preview:landing

# Preview only the slides
npm run preview:slides
```

## Technologies Used

- Vue.js 3 with TypeScript
- Slidev for presentations
- Tailwind CSS for styling
- Vite for bundling

## License

MIT
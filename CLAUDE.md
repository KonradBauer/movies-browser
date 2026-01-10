# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Movies Browser is a React application for searching and browsing movies and people using The Movie Database (TMDB) API. Built with Redux Toolkit for state management and Redux Saga for side effects.

## Development Commands

### Running the Application
```bash
npm start           # Start development server at http://localhost:3000
npm run build       # Build for production
npm test            # Run tests in watch mode
```

### Deployment
```bash
npm run deploy      # Deploy to GitHub Pages (runs predeploy build automatically)
```

## Environment Setup

The application requires a TMDB API key:

1. Create a `.env` file in the root directory
2. Add `REACT_APP_API_KEY=your_api_key_here`
3. The `.env` file is gitignored - never commit API keys

API key is accessed via `process.env.REACT_APP_API_KEY` in `src/features/getAPI.js`

## Architecture

### State Management

The app uses Redux Toolkit with Redux Saga middleware for async operations.

**Store Structure** (`src/store.js`):
- `configuration` - TMDB API configuration (image sizes, URLs)
- `genres` - Movie genres list
- `movies` - Popular movies list and pagination
- `movieDetailsAndCredits` - Individual movie details with cast/crew
- `people` - Popular people list and pagination
- `peopleDetails` - Individual person details with filmography
- `searchMovies` - Search results for movies
- `searchPeople` - Search results for people

**Saga Pattern**:
All sagas are registered in `src/rootSaga.js` using `all()`. Each feature has:
- A slice file (reducers and actions) named `*Slice.js`
- A saga file (side effects) named `*Saga.js`

Example flow:
1. Component dispatches action (e.g., `fetchMovies()`)
2. Saga listens with `takeLatest()` and dispatches loading action
3. Saga calls API via `src/features/getAPI.js`
4. Saga dispatches success/error action with payload
5. Slice updates state

**Delay Pattern**: Sagas use `yield delay(1_000)` for artificial 1-second loading states.

### Routing

Uses HashRouter (for GitHub Pages compatibility) with React Router v5.

**Main Routes** (`src/App.js`):
- `/` - Redirects to `/popular-movies`
- `/popular-movies` - Popular movies list
- `/popular-people` - Popular people list
- `/popular-movies/:movieID` - Movie details page
- `/popular-people/:personID` - Person details page
- `*/search` - Search results (movies or people based on context)
- `*` - Error page (404)

### Data Fetching

All API calls are centralized in `src/features/getAPI.js`:
- Base URL: `https://api.themoviedb.org/3`
- Image URL: `https://image.tmdb.org/t/p`
- Uses axios for HTTP requests
- All endpoints include language parameter (`&language=en-US`)

### Query Parameters

`src/features/queryParameters.js` provides custom hooks:
- `useQueryParameter(name)` - Read query param
- `useReplaceQueryParameter()` - Update query params without navigation

Search functionality uses query params to store search text and page numbers.

### Local Storage

`src/features/localStorage.js` provides:
- `setLocalStorage(key, value)` - Stores JSON stringified value
- `getLocalStorage(key)` - Returns parsed value or empty array

Used to persist selected movie/person IDs across sessions.

### Project Structure

```
src/
├── features/           # Redux slices, sagas, and shared utilities
│   ├── movies/        # Movie-related state (popular, details, search)
│   ├── peoples/       # People-related state (popular, details, search)
│   └── *.js          # Shared utilities (API, localStorage, query params)
├── layouts/           # Page-level components and composite UI
│   ├── Contents/     # List views (movies, people)
│   ├── MoviesDetails/
│   ├── PersonDetails/
│   ├── Search/
│   ├── Tile/         # Reusable tile components for movies/people
│   ├── Header/
│   ├── Pagination/
│   ├── Loading/
│   ├── Error/
│   └── NoResult/
├── common/            # Global styles and theme
└── App.js            # Main router and app structure
```

### Styling

Uses `styled-components` for all styling. Each layout folder typically has:
- `index.js` - Component logic
- `styled.js` - Styled component definitions

Global theme is defined in `src/common/Theme/theme.js` and provided via `ThemeProvider`.

## Important Notes

- The app uses React Router v5 (not v6) - use `<Route>` with component children, not `element` prop
- Pagination is limited to 500 pages (TMDB API limit)
- Movie/person IDs are stored in Redux state and localStorage for routing
- All async operations go through Redux Saga - don't add direct API calls in components
- The configuration saga fetches TMDB API config on app load for dynamic image sizing

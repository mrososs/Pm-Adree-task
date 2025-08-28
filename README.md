# PM App - Project Management Application

A responsive Angular web application for managing project tasks with a modern UI, built with Angular 19, PrimeNG, and TailwindCSS.

## Features

### 🧾 CRUD Operations

- **Create**: Add new tasks with comprehensive form validation
- **Read**: View tasks in a responsive table with search and filtering
- **Update**: Edit existing tasks with pre-populated forms
- **Delete**: Remove tasks with confirmation dialogs

### 📊 Dashboard

- **Statistics Cards**: Total tasks, active tasks, new tasks, and overdue tasks
- **Interactive Charts**: Pie chart for task status distribution and bar chart for category distribution
- **Recent Tasks**: Quick overview of the latest tasks
- **Overdue Tasks**: Highlighted list of tasks past their due date

### 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between light and dark modes
- **Modern UI**: Clean, professional interface using PrimeNG components
- **Accessibility**: ARIA roles, keyboard navigation, and focus management
- **Real-time Updates**: Live statistics and data updates

### 🔧 Technical Features

- **Angular 19**: Latest stable version with standalone components
- **PrimeNG**: Rich UI component library
- **TailwindCSS**: Utility-first CSS framework
- **RxJS**: Reactive programming with signals
- **TypeScript**: Type-safe development
- **Mock API**: In-memory web API for development

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   ├── dashboard/          # Dashboard feature
│   │   │   └── pages/
│   │   │       └── dashboard/
│   │   └── tasks/              # Tasks feature
│   │       ├── data-access/    # API services
│   │       ├── pages/          # Task pages
│   │       │   ├── tasks-list/ # Tasks list component
│   │       │   └── task-form/  # Task form component
│   │       └── ui/             # Shared UI components
│   ├── shared/                 # Shared modules and components
│   └── core/                   # Core services and utilities
├── assets/
│   ├── mock-api/              # Mock data and API service
│   └── themes/                # TailwindCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pm-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## Usage

### Navigation

- **Dashboard**: Overview with statistics and charts
- **Tasks**: Full CRUD operations for task management

### Task Management

1. **View Tasks**: Navigate to the Tasks page to see all tasks
2. **Create Task**: Click "Create Task" button to add a new task
3. **Edit Task**: Click the edit icon on any task row
4. **Delete Task**: Click the delete icon and confirm the action
5. **Filter Tasks**: Use the search bar and dropdown filters

### Dashboard Features

- **Statistics Cards**: View key metrics at a glance
- **Charts**: Interactive visualizations of task data
- **Recent Tasks**: Quick access to latest tasks
- **Overdue Tasks**: Monitor tasks that need attention

## Technology Stack

- **Framework**: Angular 19
- **UI Library**: PrimeNG 19
- **Styling**: TailwindCSS 4
- **Charts**: Chart.js with PrimeNG Chart
- **State Management**: Angular Signals
- **HTTP Client**: Angular HttpClient
- **Mock API**: Angular In-Memory Web API
- **Icons**: PrimeIcons

## Architecture Decisions

### Component Architecture

- **Standalone Components**: Modern Angular approach for better tree-shaking
- **Feature-based Structure**: Organized by business domains
- **Lazy Loading**: Routes are lazy-loaded for better performance

### State Management

- **Angular Signals**: Reactive state management with signals
- **Service Layer**: Centralized data access through services
- **Computed Values**: Derived state using computed signals

### UI/UX Design

- **Responsive Grid**: CSS Grid and Flexbox for responsive layouts
- **Dark Mode**: CSS custom properties for theme switching
- **Accessibility**: Semantic HTML and ARIA attributes
- **Performance**: OnPush change detection strategy

### Data Handling

- **Mock API**: In-memory web API for development
- **Type Safety**: Full TypeScript interfaces for data models
- **Error Handling**: Comprehensive error handling with user feedback
- **Loading States**: Loading indicators for better UX

## Customization

### Adding New Task Categories

1. Update the `TaskCategory` type in `mock.db.ts`
2. Add the new category to the categories array in components
3. Update the category class mapping functions

### Adding New Task Statuses

1. Update the `TaskStatus` type in `mock.db.ts`
2. Add the new status to the statuses array in components
3. Update the status class mapping functions

### Styling Customization

- **TailwindCSS**: Modify `tailwind.config.js` for custom design tokens
- **PrimeNG**: Override component styles using `::ng-deep`
- **Dark Mode**: Update CSS custom properties in component styles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Screenshots

_Add screenshots of the application here_

## Demo

_Add a link to a live demo if available_

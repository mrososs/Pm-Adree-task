# 📋 PM App - Project Management Application

<div align="center">

![Angular](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-19-blue?style=for-the-badge&logo=primeng)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Jest](https://img.shields.io/badge/Jest-29-C21325?style=for-the-badge&logo=jest)

**A modern, responsive Angular web application for comprehensive project task management**

[🚀 Live Demo](#demo) • [📖 Documentation](#documentation) • [🛠️ Installation](#getting-started) • [🧪 Testing](#testing)

</div>

---

## 🌟 Features Overview

### 🧾 **Complete CRUD Operations**

- ✅ **Create**: Add new tasks with comprehensive form validation
- ✅ **Read**: View tasks in responsive tables with advanced search and filtering
- ✅ **Update**: Edit existing tasks with pre-populated forms and real-time validation
- ✅ **Delete**: Remove tasks with confirmation dialogs and undo functionality

### 📊 **Interactive Dashboard**

- 📈 **Statistics Cards**: Real-time metrics for total, active, new, and overdue tasks
- 🎯 **Interactive Charts**: Pie chart for task status distribution and bar chart for category analysis
- 📋 **Recent Tasks**: Quick overview of latest tasks with status indicators
- ⚠️ **Overdue Tasks**: Highlighted list of tasks past their due date with priority levels

### 🎨 **Modern UI/UX Features**

- 📱 **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- 🌓 **Dark/Light Theme**: Toggle between themes with persistent user preferences
- 🎯 **Modern Design**: Clean, professional interface using PrimeNG components
- ♿ **Accessibility**: ARIA roles, keyboard navigation, and focus management
- ⚡ **Real-time Updates**: Live statistics and data updates without page refresh

### 🔧 **Advanced Technical Features**

- 🚀 **Angular 19**: Latest stable version with standalone components and signals
- 🎨 **PrimeNG 19**: Rich UI component library with modern design system
- 🎯 **TailwindCSS 4**: Utility-first CSS framework for rapid styling
- ⚡ **RxJS & Signals**: Reactive programming with Angular signals for state management
- 🔒 **TypeScript**: Full type safety throughout the application
- 🗄️ **Mock API**: In-memory web API for development and testing

---

## 🏗️ Project Architecture

### 📁 **Directory Structure**

```
src/
├── app/
│   ├── features/                    # Feature-based modules
│   │   ├── dashboard/              # Dashboard feature
│   │   │   ├── data-access/        # Dashboard API services
│   │   │   ├── pages/
│   │   │   │   └── dashboard/      # Main dashboard component
│   │   │   └── ui/                 # Dashboard-specific UI components
│   │   │       ├── stats-overview/ # Statistics cards
│   │   │       ├── task-charts/    # Chart components
│   │   │       └── task-lists/     # Task list components
│   │   └── tasks/                  # Tasks feature
│   │       ├── data-access/        # Task API services
│   │       ├── pages/              # Task pages
│   │       │   ├── tasks-list/     # Tasks list component
│   │       │   └── task-form/      # Task form component
│   │       └── ui/                 # Task-specific UI components
│   │           ├── task-filters/   # Filter components
│   │           └── task-table/     # Table components
│   ├── shared/                     # Shared modules and components
│   │   ├── constants/              # Application constants
│   │   ├── directives/             # Custom directives
│   │   ├── pipes/                  # Custom pipes
│   │   └── ui/                     # Shared UI components
│   │       ├── components/         # Reusable components
│   │       │   ├── navbar/         # Navigation bar
│   │       │   ├── sidebar/        # Sidebar navigation
│   │       │   ├── stats-card/     # Statistics card
│   │       │   └── task-card/      # Task card component
│   │       └── prime-ng.module.ts  # PrimeNG module configuration
│   └── core/                       # Core services and utilities
│       ├── config/                 # Application configuration
│       ├── guards/                 # Route guards
│       ├── interceptors/           # HTTP interceptors
│       ├── services/               # Core services
│       └── utils/                  # Utility functions
├── assets/
│   ├── mock-api/                   # Mock data and API service
│   │   ├── in-memory-api.service.ts
│   │   └── mock.db.ts
│   ├── i18n/                       # Internationalization
│   └── themes/                     # TailwindCSS configuration
└── environments/                   # Environment configurations
```

### 🏛️ **Architecture Decisions**

#### **Component Architecture**

- **Standalone Components**: Modern Angular approach for better tree-shaking and performance
- **Feature-based Structure**: Organized by business domains for better maintainability
- **Lazy Loading**: Routes are lazy-loaded for optimal performance and code splitting

#### **State Management**

- **Angular Signals**: Reactive state management with signals for better performance
- **Service Layer**: Centralized data access through injectable services
- **Computed Values**: Derived state using computed signals for automatic updates

#### **UI/UX Design Principles**

- **Responsive Grid**: CSS Grid and Flexbox for adaptive layouts
- **Dark Mode**: CSS custom properties for seamless theme switching
- **Accessibility First**: Semantic HTML and comprehensive ARIA attributes
- **Performance Optimized**: OnPush change detection strategy

#### **Data Handling Strategy**

- **Mock API**: In-memory web API for development and testing
- **Type Safety**: Full TypeScript interfaces for all data models
- **Error Handling**: Comprehensive error handling with user-friendly feedback
- **Loading States**: Loading indicators and skeleton screens for better UX

---

## 🚀 Getting Started

### 📋 **Prerequisites**

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher (or yarn)
- **Git**: For version control

### ⚡ **Quick Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/pm-app.git
   cd pm-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### 🛠️ **Development Commands**

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📖 Usage Guide

### 🧭 **Navigation**

- **🏠 Dashboard**: Overview with statistics, charts, and recent tasks
- **📋 Tasks**: Full CRUD operations for comprehensive task management

### 📝 **Task Management Workflow**

#### **1. View Tasks**

- Navigate to the Tasks page to see all tasks in a responsive table
- Use search functionality to find specific tasks
- Apply filters by status, category, or assigned user
- Sort tasks by any column for better organization

#### **2. Create New Task**

- Click the "Create Task" button to open the task form
- Fill in required fields (title, category, status)
- Add optional details (description, assigned user, due date, estimated hours)
- Submit the form to create the task

#### **3. Edit Existing Task**

- Click the edit icon on any task row
- Modify task details in the pre-populated form
- Save changes to update the task

#### **4. Delete Task**

- Click the delete icon on any task row
- Confirm the deletion in the confirmation dialog
- Task will be permanently removed from the system

### 📊 **Dashboard Features**

#### **Statistics Overview**

- **Total Tasks**: Complete count of all tasks in the system
- **Active Tasks**: Number of tasks currently in progress
- **New Tasks**: Count of tasks with "New" status
- **Overdue Tasks**: Number of tasks past their due date

#### **Interactive Charts**

- **Status Distribution**: Pie chart showing task status breakdown
- **Category Analysis**: Bar chart displaying task categories
- **Real-time Updates**: Charts update automatically when data changes

#### **Quick Actions**

- **Recent Tasks**: Quick access to latest tasks with status indicators
- **Overdue Tasks**: Highlighted list of tasks requiring immediate attention
- **Quick Filters**: One-click filtering for common task views

---

## 🧪 Testing

### **Test Coverage**

The application includes comprehensive testing with:

- **Unit Tests**: Component and service testing with Jest
- **Integration Tests**: API integration testing
- **E2E Tests**: End-to-end testing (planned)

### **Running Tests**

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run specific test file
npm test -- --testPathPattern=task-form.component.spec.ts
```

### **Test Structure**

```
src/
├── app/
│   ├── features/
│   │   ├── dashboard/
│   │   │   └── pages/
│   │   │       └── dashboard/
│   │   │           └── dashboard.component.spec.ts
│   │   └── tasks/
│   │       ├── data-access/
│   │       │   └── task-api.service.spec.ts
│   │       └── pages/
│   │           ├── tasks-list/
│   │           │   └── tasks-list.component.spec.ts
│   │           └── task-form/
│   │               └── task-form.component.spec.ts
│   └── shared/
│       └── ui/
│           └── components/
│               └── stats-card/
│                   └── stats-card.component.spec.ts
```

---

## 🛠️ Technology Stack

### **Frontend Framework**

- **Angular 19**: Latest stable version with standalone components
- **TypeScript 5.0**: Full type safety and modern JavaScript features
- **RxJS**: Reactive programming library for async operations

### **UI Libraries**

- **PrimeNG 19**: Comprehensive UI component library
- **PrimeIcons**: Icon library for consistent design
- **Chart.js**: Charting library for data visualization

### **Styling & Design**

- **TailwindCSS 4**: Utility-first CSS framework
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Dynamic theming support

### **Development Tools**

- **Angular CLI**: Command-line interface for Angular development
- **Jest**: Testing framework for unit and integration tests
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting

### **Build & Deployment**

- **Webpack**: Module bundler (configured by Angular CLI)
- **Angular In-Memory Web API**: Mock API for development
- **Angular Signals**: State management solution

---

## 🎨 Customization Guide

### **Adding New Task Categories**

1. **Update Type Definitions**

   ```typescript
   // src/assets/mock-api/mock.db.ts
   export type TaskCategory = "Dev" | "Test" | "UI" | "Db" | "NewCategory";
   ```

2. **Update Component Options**

   ```typescript
   // In relevant components
   categoryOptions = [
     { label: "Development", value: "Dev" },
     { label: "Testing", value: "Test" },
     { label: "UI/UX", value: "UI" },
     { label: "Database", value: "Db" },
     { label: "New Category", value: "NewCategory" },
   ];
   ```

3. **Update Styling Classes**
   ```typescript
   getCategoryClass(category: TaskCategory): string {
     const classes = {
       'Dev': 'bg-blue-100 text-blue-800',
       'Test': 'bg-green-100 text-green-800',
       'UI': 'bg-purple-100 text-purple-800',
       'Db': 'bg-orange-100 text-orange-800',
       'NewCategory': 'bg-gray-100 text-gray-800'
     };
     return classes[category] || classes['Dev'];
   }
   ```

### **Adding New Task Statuses**

1. **Update Type Definitions**

   ```typescript
   // src/assets/mock-api/mock.db.ts
   export type TaskStatus = "New" | "Active" | "Closed" | "NewStatus";
   ```

2. **Update Component Options**
   ```typescript
   // In relevant components
   statusOptions = [
     { label: "New", value: "New" },
     { label: "Active", value: "Active" },
     { label: "Closed", value: "Closed" },
     { label: "New Status", value: "NewStatus" },
   ];
   ```

### **Styling Customization**

#### **TailwindCSS Configuration**

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
      },
    },
  },
};
```

#### **PrimeNG Component Styling**

```scss
// Component styles
::ng-deep .p-card {
  &.custom-card {
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}
```

#### **Dark Mode Customization**

```scss
// Dark mode variables
:root {
  --primary-color: #3b82f6;
  --background-color: #ffffff;
  --text-color: #1f2937;
}

[data-theme="dark"] {
  --primary-color: #60a5fa;
  --background-color: #1f2937;
  --text-color: #f9fafb;
}
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### **Development Workflow**

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/pm-app.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

4. **Commit your changes**

   ```bash
   git commit -m 'feat: add amazing new feature'
   ```

5. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Include screenshots if UI changes
   - Ensure all tests pass

### **Code Style Guidelines**

- **TypeScript**: Use strict mode and proper typing
- **Angular**: Follow Angular style guide
- **Testing**: Maintain >80% test coverage
- **Documentation**: Update README for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📸 Screenshots

### **Dashboard View**

![Dashboard](screenshots/dashboard.png)

### **Tasks List**

![Tasks List](screenshots/tasks-list.png)

### **Task Form**

![Task Form](screenshots/task-form.png)

### **Dark Mode**

![Dark Mode](screenshots/dark-mode.png)

---

## 🌐 Demo

**Live Demo**: [https://pm-app-demo.vercel.app](https://pm-adree-task.vercel.app)

**Features Demonstrated**:

- ✅ Complete CRUD operations
- ✅ Real-time dashboard updates
- ✅ Responsive design
- ✅ Dark/light theme toggle
- ✅ Advanced filtering and search
- ✅ Interactive charts and statistics

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/pm-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/pm-app/discussions)
- **Email**: support@pm-app.com

---

## 🙏 Acknowledgments

- **Angular Team**: For the amazing framework
- **PrimeNG Team**: For the comprehensive UI library
- **TailwindCSS Team**: For the utility-first CSS framework
- **Open Source Community**: For inspiration and contributions

---

<div align="center">

**Made with ❤️ using Angular 19, PrimeNG, and TailwindCSS**

[⬆️ Back to Top](#-pm-app---project-management-application)

</div>

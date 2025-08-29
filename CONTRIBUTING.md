# 🤝 Contributing to PM App

Thank you for your interest in contributing to PM App! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include details about your configuration and environment**

### Suggesting Enhancements

If you have a suggestion for a new feature or enhancement, please:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**

### Pull Requests

- Fork the repo and create your branch from `main`
- If you've added code that should be tested, add tests
- If you've changed APIs, update the documentation
- Ensure the test suite passes
- Make sure your code lints
- Issue that pull request!

## 🛠️ Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Local Development

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/yourusername/pm-app.git
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

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

## 📝 Coding Standards

### TypeScript

- Use **strict mode** in `tsconfig.json`
- Prefer **interfaces** over types for object shapes
- Use **enums** for constants
- Always provide **type annotations** for function parameters and return types
- Use **generic types** when appropriate

### Angular

- Follow the **Angular Style Guide**
- Use **standalone components** when possible
- Implement **OnPush** change detection strategy
- Use **Angular Signals** for state management
- Follow **dependency injection** best practices

### Code Style

- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Use **semicolons** at the end of statements
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and interfaces
- Use **kebab-case** for file names

### File Naming

```
Component files: component-name.component.ts
Service files: service-name.service.ts
Interface files: interface-name.interface.ts
Enum files: enum-name.enum.ts
```

### Component Structure

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component-name",
  templateUrl: "./component-name.component.html",
  styleUrls: ["./component-name.component.scss"],
  standalone: true,
  imports: [
    /* imports */
  ],
})
export class ComponentNameComponent implements OnInit {
  // Properties
  public propertyName: string = "";

  // Lifecycle hooks
  ngOnInit(): void {
    // Initialization logic
  }

  // Public methods
  public methodName(): void {
    // Method implementation
  }

  // Private methods
  private privateMethod(): void {
    // Private method implementation
  }
}
```

## 🧪 Testing Guidelines

### Test Structure

- **Unit Tests**: Test individual components and services
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows (planned)

### Testing Standards

- Maintain **>80% test coverage**
- Write **descriptive test names**
- Use **AAA pattern** (Arrange, Act, Assert)
- Mock **external dependencies**
- Test **error scenarios**

### Example Test

```typescript
describe("ComponentNameComponent", () => {
  let component: ComponentNameComponent;
  let fixture: ComponentFixture<ComponentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentNameComponent],
      providers: [
        /* providers */
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentNameComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should perform expected action when method is called", () => {
    // Arrange
    const expectedValue = "expected";

    // Act
    const result = component.methodName();

    // Assert
    expect(result).toBe(expectedValue);
  });
});
```

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure your code follows the coding standards**
2. **Add tests for new functionality**
3. **Update documentation if needed**
4. **Run the test suite and ensure all tests pass**
5. **Check that your code lints without errors**

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### Review Process

1. **Automated checks** must pass (tests, linting, etc.)
2. **Code review** by maintainers
3. **Approval** from at least one maintainer
4. **Merge** to main branch

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
## Bug Description

Clear and concise description of the bug

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

What you expected to happen

## Actual Behavior

What actually happened

## Environment

- OS: [e.g. Windows 10, macOS, Ubuntu]
- Browser: [e.g. Chrome, Firefox, Safari]
- Version: [e.g. 22]
- Angular Version: [e.g. 19.2.0]

## Additional Context

Add any other context about the problem here
```

## 💡 Feature Requests

### Feature Request Template

```markdown
## Feature Description

Clear and concise description of the feature

## Problem Statement

What problem does this feature solve?

## Proposed Solution

How would you like this feature to work?

## Alternative Solutions

Any alternative solutions you've considered?

## Additional Context

Add any other context or screenshots about the feature request
```

## 📞 Getting Help

If you need help with contributing:

- **Issues**: [GitHub Issues](https://github.com/yourusername/pm-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/pm-app/discussions)
- **Email**: support@pm-app.com

## 🙏 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **GitHub** contributors page
- **Release notes** for significant contributions

Thank you for contributing to PM App! 🚀

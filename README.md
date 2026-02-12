# Myapp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Troubleshooting

### 🚨 Repository Not Showing on GitHub? (e.g., "realmoffice")

If you have a folder/repository that appears in VS Code but isn't visible on GitHub, we've created tools to help you fix it!

**📋 Step 1: Diagnose the Issue**
```bash
# Run the diagnostic script
./diagnose-repo-issue.sh realmoffice
```

**🔧 Step 2: Apply the Fix**
The most common issue is a **nested Git repository** (folder has its own `.git` directory).

**Quick Fix:**
```bash
cd realmoffice
rm -rf .git
cd ..
git add realmoffice
git commit -m "Add realmoffice directory"
git push
```

**📚 Resources:**
- **Quick Guide:** [HOW_TO_FIX_REALMOFFICE.md](./HOW_TO_FIX_REALMOFFICE.md) - Step-by-step instructions
- **Full Troubleshooting:** [TROUBLESHOOTING_REALMOFFICE.md](./TROUBLESHOOTING_REALMOFFICE.md) - All possible causes and solutions
- **Diagnostic Script:** [diagnose-repo-issue.sh](./diagnose-repo-issue.sh) - Automated problem detection

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

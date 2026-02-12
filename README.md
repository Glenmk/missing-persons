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

If you have a repository in VS Code with commits but it's not on GitHub, **you probably just need to publish it!**

#### Most Common Cause: Never Published to GitHub

**Quick Fix (3 Steps):**

1. **Create repo on GitHub:** Go to [https://github.com/new](https://github.com/new) and create "realmoffice"
2. **Add remote:** 
   ```bash
   cd realmoffice
   git remote add origin https://github.com/YOUR_USERNAME/realmoffice.git
   ```
3. **Push:** 
   ```bash
   git push -u origin main
   ```

**✅ Done!** Your repo is now on GitHub!

📖 **Detailed Guide:** [PUBLISH_TO_GITHUB.md](./PUBLISH_TO_GITHUB.md)

---

#### Other Possible Causes

If the above doesn't work, you might have a **nested repository** issue:

**📋 Step 1: Diagnose**
```bash
./diagnose-repo-issue.sh realmoffice
```

**🔧 Step 2: Apply Fix**
The diagnostic script will tell you exactly what's wrong and how to fix it.

**📚 Additional Resources:**
- **Publishing Guide:** [PUBLISH_TO_GITHUB.md](./PUBLISH_TO_GITHUB.md) - How to publish a local repo to GitHub
- **Quick Fix Guide:** [HOW_TO_FIX_REALMOFFICE.md](./HOW_TO_FIX_REALMOFFICE.md) - Step-by-step troubleshooting
- **Full Troubleshooting:** [TROUBLESHOOTING_REALMOFFICE.md](./TROUBLESHOOTING_REALMOFFICE.md) - All possible causes
- **Understanding the Issue:** [UNDERSTANDING_NESTED_REPOS.md](./UNDERSTANDING_NESTED_REPOS.md) - Visual explanations
- **Diagnostic Tool:** [diagnose-repo-issue.sh](./diagnose-repo-issue.sh) - Automated problem detection

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

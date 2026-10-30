# Contributing to Shopora Nexus

Thank you for your interest in contributing to **Shopora Nexus**! Contributions, bug reports, feature suggestions, and documentation improvements are welcome.

These guidelines help maintain code quality, consistency, and collaboration across the project.

## 1. Getting Started

Before contributing:

- Make sure you have a GitHub account.
- Install Git, Java 17, Node.js, npm, and PostgreSQL.
- Familiarize yourself with the existing project structure and technologies.
- Check the existing issues and pull requests to avoid duplicate work.

## 2. How to Contribute

### Step 1: Fork the Repository

Fork the Shopora Nexus repository to your GitHub account.

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/Shopora-Nexus.git
cd Shopora-Nexus
```

Replace `YOUR-USERNAME` with your GitHub username and adjust the repository name if necessary.

### Step 3: Create a Branch

Create a separate branch for your contribution.

```bash
git checkout -b feature/your-feature-name
```

Use an appropriate prefix:

- `feature/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation updates
- `refactor/` — Code improvements
- `test/` — Adding or updating tests

### Step 4: Make Your Changes

- Follow the existing project structure and coding conventions.
- Keep changes focused and easy to review.
- Avoid unrelated modifications.
- Add or update tests when appropriate.
- Never commit passwords, API keys, database credentials, JWT secrets, or other sensitive information.
- Use environment variables for secrets and configuration.

### Step 5: Test Your Changes

Before submitting your contribution, verify that your changes work as expected.

**Backend — Spring Boot**

```bash
./mvnw test
```

On Windows:

```bash
mvnw.cmd test
```

**Frontend — React and Vite**

```bash
npm install
npm run build
```

Run these commands from the appropriate project directory. Check the repository's `package.json` and `pom.xml` for available scripts and build configuration.

### Step 6: Commit Your Changes

Write clear, descriptive commit messages.

```bash
git add .
git commit -m "feat: add product search functionality"
```

Examples:

- `feat: add product filtering`
- `fix: resolve cart quantity update issue`
- `docs: update installation instructions`
- `refactor: improve API error handling`
- `test: add product service tests`

### Step 7: Push Your Branch

```bash
git push origin feature/your-feature-name
```

### Step 8: Open a Pull Request

Open a pull request from your branch to the main branch of the original repository.

In your pull request, include:

- A clear description of the changes.
- The problem your contribution solves.
- Relevant screenshots for UI changes.
- Testing performed and its results.
- Any related issue numbers.

Wait for review and address feedback if requested.

## 3. Coding Guidelines

### Backend — Java and Spring Boot

- Follow standard Java naming conventions.
- Use meaningful class, method, and variable names.
- Keep controllers, services, repositories, and configuration responsibilities separate.
- Validate incoming requests and handle errors appropriately.
- Avoid unnecessary changes to existing API behavior.
- Write tests for important business logic.

### Frontend — React and Vite

- Use reusable React components where practical.
- Follow the existing component and file-naming conventions.
- Keep components readable and maintainable.
- Handle loading, error, and empty states appropriately.
- Ensure the interface remains responsive and accessible.
- Avoid introducing unnecessary dependencies.

### Database

- Keep database changes compatible with the existing PostgreSQL setup.
- Do not commit real credentials or production database details.
- Document any new environment variables or schema requirements.

## 4. Reporting Bugs

When reporting a bug, provide:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected behavior.
- Actual behavior.
- Relevant error messages or logs.
- Screenshots, if applicable.
- Environment details, when relevant.

Please check existing issues before creating a new report.

## 5. Suggesting Features

Feature suggestions are welcome. Please explain:

- The problem or use case.
- Your proposed solution.
- The expected benefit.
- Any relevant implementation details or alternatives.

For substantial changes, open an issue for discussion before beginning implementation.

## 6. Security

If you discover a security vulnerability, **do not publish sensitive exploit details in a public issue**.

Report it privately to the repository maintainer through an available private contact channel.

Never include secrets, access tokens, private keys, or production credentials in commits, screenshots, logs, or pull requests.

## 7. Pull Request Checklist

Before submitting a pull request, ensure that:

- [ ] The changes address a clear purpose.
- [ ] The code follows existing project conventions.
- [ ] Relevant tests have been added or updated.
- [ ] Available tests and build checks pass.
- [ ] Documentation has been updated where necessary.
- [ ] No secrets or sensitive credentials are included.
- [ ] The pull request description explains the changes.
- [ ] The contribution does not introduce unrelated modifications.

## 8. Code of Conduct

Be respectful, constructive, and professional when interacting with other contributors.

- Welcome different perspectives.
- Provide helpful and respectful feedback.
- Focus discussions on improving the project.
- Avoid harassment, discrimination, and personal attacks.

## 9. License

By contributing to Shopora Nexus, you agree that your contributions will be distributed under the license associated with this repository.

If the repository does not yet have a license, please clarify the intended license with the maintainer before contributing.

## Thank You!

Every contribution helps improve Shopora Nexus. Thank you for helping make the project better!

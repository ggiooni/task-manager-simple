# Inventory Management System

**Author:** Nicolas Boggioni Troncoso
**Team:** DevOps Squad

## Project Description

A web-based Inventory Management System built to practice DevOps workflows and tools. Users can add, edit, delete, and search inventory items through a clean web interface. All data is stored in the browser's localStorage for persistence.

## Features

- Add new items with name, quantity, and price
- Edit and delete existing items
- Search/filter items by name
- Low stock highlighting (quantity <= 5)
- Clear all items with confirmation dialog
- Summary section showing total items and total value
- Responsive and user-friendly interface

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (vanilla)
- **Backend:** Node.js, Express (serves static files)
- **CI/CD:** GitHub Actions
- **Containerisation:** Docker

## How to Run

### Local Development

```bash
git clone https://github.com/ggiooni/task-manager-simple.git
cd task-manager-simple
npm install
npm start
```

Then open http://localhost:3000

### Using Docker

```bash
docker build -t inventory-manager .
docker run -d -p 3000:3000 inventory-manager
```

Then open http://localhost:3000

To stop the container:

```bash
docker ps                          # find the container ID
docker stop <container-id>
```

## Project Structure

```
task-manager-simple/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── app/
│   ├── index.html          # Main page with form and table
│   ├── script.js           # CRUD logic with localStorage
│   └── style.css           # Styling and low-stock highlights
├── server.js               # Express server (static file serving)
├── package.json            # Dependencies and scripts
├── Dockerfile              # Docker container configuration
├── .dockerignore           # Files excluded from Docker build
└── README.md
```

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready, stable code |
| `develop` | Integration branch for testing |
| `feature/*` | Individual feature branches |

All features are developed in `feature/*` branches, merged into `develop` via pull requests, and then promoted to `main` for releases.

## CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration. The pipeline runs automatically on every push and pull request to `main` and `develop`.

**Pipeline steps:**
1. Checkout the code
2. Set up Node.js 18
3. Install dependencies (`npm install`)
4. Run tests (`npm test`)
5. Validate the app starts (launches server and checks with `curl`)

## DevOps Practices Used

- **Version Control:** Git with a structured branching strategy
- **Pull Requests:** All changes go through code review via PRs
- **Continuous Integration:** Automated testing on every commit
- **Containerisation:** Docker for consistent, portable deployment
- **Infrastructure as Code:** Dockerfile and CI config stored in the repo

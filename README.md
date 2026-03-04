# Inventory Management System

**Author:** Nicolas Boggioni Troncoso
**Team:** DevOps Squad

## Project Description

A simple Inventory Management System built to practice DevOps workflows. Users can add, edit, and remove inventory items through a web interface. The project demonstrates:

- Git version control and branching strategy
- Continuous Integration with GitHub Actions
- Docker containerization
- Structured collaboration workflow

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **CI/CD:** GitHub Actions
- **Containerization:** Docker

## How to Run

### Local
```bash
npm install
npm start
```
Then open http://localhost:3000

### Docker
```bash
docker build -t inventory-manager .
docker run -d -p 3000:3000 inventory-manager
```

## Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Feature development branches

## Project Structure

```
task-manager-simple/
├── .github/workflows/ci.yml
├── app/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
├── Dockerfile
└── README.md
```

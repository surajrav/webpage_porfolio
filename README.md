# Suraj & Ridhima's Web Projects Portfolio

This repository contains multiple web projects, each in its own folder.

## Projects

### monterey-guide
Monterey & Carmel weekend dining and activity guide

- **Live URL**: (will be added after Amplify deployment)
- **Tech**: React, Tailwind CSS

## Adding New Projects

1. Create a new folder: `mkdir new-project-name`
2. Set up your React app in that folder
3. Deploy to Amplify as a separate app pointing to that folder

## Deployment

Each project is deployed separately to AWS Amplify:
- Each folder is configured as its own Amplify app
- Changes to any folder trigger only that app's deployment
- Each project gets its own URL

## Local Development

To run any project locally:

```bash
cd project-folder-name
npm install
npm start
```

## Structure

```
webpages-portfolio/
├── monterey-guide/          # Monterey weekend guide
│   ├── src/
│   ├── public/
│   └── package.json
├── future-project-1/        # Your next project
└── future-project-2/        # Another project
```

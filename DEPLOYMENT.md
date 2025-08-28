# RAGtional Landing Page - Deployment Guide

## Overview
This guide explains how to deploy the RAGtional React + TypeScript landing page to GitHub Pages using GitHub Actions.

## Prerequisites
- GitHub repository with the RAGtional landing page code
- GitHub Pages enabled on your repository
- Node.js 18+ and npm installed locally

## Deployment Methods

### Method 1: GitHub Actions (Recommended)
The repository includes a GitHub Actions workflow that automatically deploys on every push to the `main` or `release` branch.

#### Setup Steps:
1. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`
   - Click "Save"

2. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Setup deployment pipeline"
   git push origin main
   ```

3. **Monitor Deployment**:
   - Go to Actions tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Wait for successful completion

4. **Access Your Site**:
   - Your site will be available at: `https://juliangiraldo97.github.io/RAGtional-Landpage`
   - First deployment may take 5-10 minutes

### Method 2: Manual Deployment
For manual deployments or testing:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Configuration Files

### package.json
```json
{
  "homepage": "https://juliangiraldo97.github.io/RAGtional-Landpage",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### GitHub Actions Workflow
Located at `.github/workflows/deploy.yml`:
- Triggers on push to `main` or `release` branches
- Uses Node.js 18
- Caches dependencies for faster builds
- Creates `.nojekyll` file for React compatibility
- Deploys to `gh-pages` branch

## Customization

### Change Homepage URL
Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

### Modify Deployment Branch
Edit `.github/workflows/deploy.yml`:
```yaml
with:
  branch: your-preferred-branch-name
```

### Environment Variables
If you need environment variables in your build:
1. Add them in GitHub repository → Settings → Secrets and variables → Actions
2. Reference them in the workflow: `${{ secrets.YOUR_SECRET }}`

## Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check Actions tab for error details
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Site Not Loading**:
   - Wait 5-10 minutes after deployment
   - Check GitHub Pages settings
   - Verify `.nojekyll` file exists in build output

3. **404 Errors**:
   - Ensure `.nojekyll` file is present
   - Check if routing is configured for SPA
   - Verify homepage URL in `package.json`

4. **Deployment Stuck**:
   - Check Actions tab for stuck workflows
   - Cancel and re-run if necessary
   - Verify repository permissions

### Debug Steps:
1. **Check Actions Logs**:
   - Go to Actions tab
   - Click on failed workflow
   - Review step-by-step logs

2. **Verify Build Output**:
   - Run `npm run build` locally
   - Check `dist/` folder contents
   - Ensure `.nojekyll` file exists

3. **Check Repository Settings**:
   - Pages source configuration
   - Branch protection rules
   - Action permissions

## Performance Optimization

### Build Optimization:
- Dependencies are cached between builds
- Only changed files are deployed
- Clean deployment with single commit

### Runtime Optimization:
- Static assets are optimized
- Bootstrap 5 for responsive design
- Dark/light mode support

## Security Considerations

### GitHub Actions:
- Uses `GITHUB_TOKEN` for authentication
- Minimal required permissions
- No sensitive data in logs

### Build Process:
- Dependencies from npm registry
- No custom scripts execution
- Clean build environment

## Monitoring

### Deployment Status:
- GitHub Actions tab shows deployment history
- Each deployment creates a commit in `gh-pages` branch
- Build artifacts are available for download

### Site Performance:
- GitHub Pages provides basic analytics
- Consider adding Google Analytics for detailed insights
- Monitor page load times and user experience

## Support

### Documentation:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

### Community:
- GitHub Community Forums
- Stack Overflow
- React Community Discord

## Next Steps

After successful deployment:
1. **Test all functionality** on the live site
2. **Verify EmailJS integration** works in production
3. **Check responsive design** on various devices
4. **Monitor performance** and user feedback
5. **Set up custom domain** if needed

---

**Note**: This deployment pipeline is optimized for React applications and follows GitHub Pages best practices. The site will automatically update on every push to the main branch.

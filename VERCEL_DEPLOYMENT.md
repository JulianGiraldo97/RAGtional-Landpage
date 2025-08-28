# 🚀 Vercel Deployment Guide for RAGtional Landing Page

## Overview
This guide explains how to deploy the RAGtional React + TypeScript landing page to Vercel using Docker.

## Prerequisites
- Vercel account (free tier available at [vercel.com](https://vercel.com))
- Docker installed locally (for testing)
- Node.js and npm installed locally

## 🚀 Vercel Configuration

### Files Created:
- **`vercel.json`** - Vercel deployment configuration with static build
- **`vercel-build.sh`** - Build script for Vercel deployment
- **`Dockerfile`** - Multi-stage build with Node.js and nginx (for local testing)
- **`nginx.conf`** - Optimized nginx configuration
- **`.dockerignore`** - Optimized Docker build context
- **`docker-compose.yml`** - Local testing configuration

## 🧪 Local Testing

### 1. Build and Test Docker Container Locally
```bash
# Build the Docker image
docker build -t ragtional-landing .

# Run the container locally
docker run -p 3000:80 ragtional-landing

# Or use docker-compose
docker-compose up --build
```

### 2. Test the Application
- Open [http://localhost:3000](http://localhost:3000)
- Verify all features work correctly
- Check EmailJS integration
- Test responsive design

## 🚀 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy
```bash
# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

### Method 2: Vercel Dashboard

#### 1. Connect Repository
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Import your GitHub repository
- Vercel will automatically detect the configuration

#### 2. Configure Project
- **Framework Preset**: Other
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `build`
- **Install Command**: `npm ci`

#### 3. Deploy
- Click "Deploy"
- Vercel will build and deploy your application

## ⚙️ Configuration

### Environment Variables
Set these in your Vercel project settings:

```env
NODE_ENV=production
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
REACT_APP_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Custom Domain (Optional)
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## 🔧 Docker Features

### Multi-Stage Build
- **Stage 1**: Node.js build environment
- **Stage 2**: Lightweight nginx production server

### Performance Optimizations
- **Gzip compression** for all text assets
- **Long-term caching** for static assets
- **Optimized nginx** configuration
- **Security headers** for production

### Health Checks
- Health endpoint at `/health`
- Automatic container restart on failure
- Load balancer integration ready

## 📊 Monitoring

### Vercel Analytics
- **Performance metrics** automatically tracked
- **Real-time monitoring** of your deployment
- **Error tracking** and alerting

### Logs
- **Build logs** in Vercel dashboard
- **Runtime logs** accessible via Vercel CLI
- **nginx access/error logs** in container

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Dockerfile syntax
   - Verify all dependencies are in package.json
   - Check nginx.conf syntax

2. **Container Won't Start**
   - Verify port 80 is available
   - Check nginx configuration
   - Review container logs

3. **Assets Not Loading**
   - Verify build output in dist/
   - Check nginx static file serving
   - Verify .nojekyll file exists

4. **EmailJS Not Working**
   - Check environment variables
   - Verify EmailJS credentials
   - Check browser console for errors

### Debug Commands:
```bash
# Check container logs
docker logs <container_id>

# Inspect container
docker exec -it <container_id> sh

# Test nginx configuration
docker exec <container_id> nginx -t
```

## 🔄 Updates and Redeployment

### Automatic Deployments
- **GitHub integration** for automatic deployments
- **Preview deployments** for pull requests
- **Production deployments** on main branch push

### Manual Redeployment
```bash
# Redeploy to production
vercel --prod

# Or trigger from dashboard
# Go to project → Deployments → Redeploy
```

## 📈 Performance

### Built-in Optimizations:
- **Static asset caching** (1 year for JS/CSS, 1 hour for HTML)
- **Gzip compression** for all text assets
- **nginx performance tuning**
- **Docker layer caching**

### Vercel Edge Network:
- **Global CDN** for fast worldwide access
- **Automatic scaling** based on traffic
- **DDoS protection** included

## 🛡️ Security

### Security Headers:
- **X-Frame-Options**: Prevents clickjacking
- **X-XSS-Protection**: XSS protection
- **X-Content-Type-Options**: MIME type sniffing protection
- **Content-Security-Policy**: Resource loading restrictions

### Container Security:
- **Non-root user** in nginx container
- **Minimal attack surface** with Alpine Linux
- **Regular security updates** from base images

## 💰 Cost

### Vercel Free Tier:
- **Unlimited deployments**
- **100GB bandwidth/month**
- **100GB storage**
- **Custom domains** (with SSL)
- **Team collaboration**

### Paid Plans:
- **Pro**: $20/month for advanced features
- **Enterprise**: Custom pricing for large teams

## 🎯 Next Steps

After successful deployment:
1. **Test all functionality** on the live site
2. **Verify EmailJS integration** works in production
3. **Check performance** using Vercel Analytics
4. **Set up monitoring** and alerting
5. **Configure custom domain** if needed

---

**Note**: This Docker-based deployment provides enterprise-grade performance, security, and scalability while maintaining the simplicity of Vercel's platform.

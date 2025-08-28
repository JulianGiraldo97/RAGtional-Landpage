#!/bin/bash

# Vercel build script for RAGtional Landing Page
set -e

echo "🚀 Starting Vercel build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Create build directory for Vercel (if it doesn't exist)
if [ ! -d "build" ]; then
    echo "📁 Creating build directory..."
    mkdir -p build
fi

# Copy dist contents to build directory
echo "📋 Copying build output..."
cp -r dist/* build/

# Create .nojekyll file in build directory
echo "📄 Creating .nojekyll file..."
touch build/.nojekyll

echo "✅ Build completed successfully!"
echo "📊 Build output size:"
du -sh build/

echo "📁 Build directory contents:"
ls -la build/

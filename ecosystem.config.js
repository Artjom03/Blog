module.exports = {
  apps: [
    {
      name: "blog-artjom",
      script: "npm",
      args: "start",
      cwd: "./",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
} 
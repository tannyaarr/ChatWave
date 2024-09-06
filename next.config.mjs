/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enforces React strict mode, which helps identify potential issues
    swcMinify: true, // Uses the SWC compiler to minify the output for better performance
    // Optional: Add custom Webpack configurations here if needed
    webpack(config) {
      // Example: Adding a custom loader for handling specific file types
      // config.module.rules.push({
      //   test: /\.example$/,
      //   use: 'example-loader',
      // });
  
      return config;
    },
  };
  
  export default nextConfig;  
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos",
            publicPath: "/_next/static/videos",
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

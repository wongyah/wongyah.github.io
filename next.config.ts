import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/markdown-syntax-hub/:path*",
          destination: "https://markdown-syntax-hub.tcblabber.cn/:path*/",
        },
      ],
      beforeFiles: [],
      fallback: [
        {
          source: "/assets/stylesheets/palette.06af60db.min.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/assets/stylesheets/palette.06af60db.min.css",
        },
        {
          source: "/assets/stylesheets/main.342714a4.min.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/assets/stylesheets/main.342714a4.min.css",
        },
        {
          source: "/stylesheets/footer.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/stylesheets/footer.css",
        },
        {
          source: "/stylesheets/header.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/stylesheets/header.css",
        },
        {
          source: "/stylesheets/nav.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/stylesheets/nav.css",
        },
        {
          source: "/stylesheets/page.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/stylesheets/page.css",
        },
        {
          source: "/stylesheets/palette.css",
          destination:
            "https://markdown-syntax-hub.tcblabber.cn/stylesheets/palette.css",
        },
      ],
    };
  },
};

export default nextConfig;
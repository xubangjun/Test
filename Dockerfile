# 使用 Node.js 官方的完整版镜像进行构建
FROM node:20 AS build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock 文件
COPY package.json package.json ./

# 安装必要工具并安装依赖
RUN npm install

# 复制源代码到容器
COPY . .

# 执行构建
RUN npm run build

# 使用 Nginx 镜像提供静态文件
FROM nginx:alpine AS production-stage

# 安装 gzip 工具以优化性能
RUN apk add --no-cache bash

# 复制构建结果到 Nginx 的默认目录
COPY --from=build-stage /app/build /usr/share/nginx/html

# 复制自定义 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口 80
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

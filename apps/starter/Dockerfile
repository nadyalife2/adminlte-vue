# Build from the repo ROOT (the starter depends on workspace packages):
#   docker build -f apps/starter/Dockerfile -t adminlte-starter .
#   docker run -p 3000:3000 adminlte-starter

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
# Build the workspace packages (lib → nuxt module), then the starter's server.
RUN pnpm build && pnpm --filter adminlte-starter build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
# The Nitro output is self-contained — only the bundle is needed at runtime.
COPY --from=build /app/apps/starter/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

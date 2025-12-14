# --- Build stage: compile Angular app to static files ---
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
# Ensure devDependencies are installed for Angular build
RUN npm install --no-audit --no-fund --include=dev

# Copy source and build
COPY . ./
# Build uses Angular config which outputs to `docs/`
RUN npm run build

# --- Runtime stage: serve with Nginx ---
FROM nginx:alpine

# Copy built static files (from `docs/`) into Nginx html directory
COPY --from=builder /app/docs /usr/share/nginx/html

# Expose default Nginx port
EXPOSE 80

# Healthcheck (optional but helpful in containers/orchestration)
HEALTHCHECK CMD wget -qO- http://localhost:80/ || exit 1

# Nginx runs as default CMD

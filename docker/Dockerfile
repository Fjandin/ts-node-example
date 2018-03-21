FROM node:8.10.0-slim

LABEL maintainer="René Bischoff <rene.bischoff@gmail.com>"

# App user
RUN useradd --user-group --create-home --shell /bin/false app-user
USER app-user
ENV HOME=/home/app-user

# Dependencies
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.5.1
ENV PATH="$HOME/.yarn/bin:$PATH"

# Copy package + lock
COPY --chown=app-user:app-user package.json $HOME/app/package.json
COPY --chown=app-user:app-user yarn.lock $HOME/app/yarn.lock

# Set workdir to app user home
WORKDIR $HOME/app

# Install node modules
RUN yarn

# Copy src
COPY --chown=app-user:app-user . $HOME/app

# Set environment to production
ENV NODE_ENV=production

# Build
RUN yarn build

# App port
EXPOSE 8080

# Exec
CMD node --max-old-space-size=512 dist

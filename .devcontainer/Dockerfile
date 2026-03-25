FROM node:22-bookworm-slim

LABEL maintainer="seu-nome <seu@email.com>"
LABEL description="AI-jailed dev environment for portfolio site"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    wget \
    ca-certificates \
    unzip \
    iptables \
    iproute2 \
    dnsutils \
    nano \
    jq \
    tree \
    && rm -rf /var/lib/apt/lists/*

COPY init-firewall.sh /usr/local/bin/init-firewall.sh
RUN chmod +x /usr/local/bin/init-firewall.sh

RUN mkdir -p /workspace && chown -R node:node /workspace

USER node
RUN curl -fsSL https://claude.ai/install.sh | bash

ENV SHELL=/bin/bash
ENV PATH="/home/node/.local/bin:${PATH}"
WORKDIR /workspace
---
date: '2026-03-14'
title: 'RestaurantFinder'
cover: './RestaurantFinder/cover.jpeg'
github: 'https://github.com/GeneGulanesJr/RestaurantFinder'
external: 'https://github.com/GeneGulanesJr/RestaurantFinder'
tech:
  - Next.js 15
  - OpenRouter
  - Foursquare
  - CSRF + rate limiting
---

A full-stack restaurant search app that interprets natural-language queries ("cheap sushi in downtown LA open now"), parses them via an OpenRouter LLM into structured Foursquare parameters, and returns live results through both a web UI and a JSON API. Session-based auth, CSRF protection, and a sliding-window rate limiter.

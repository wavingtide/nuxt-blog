---
title: "Cybersecurity Note"
description: Collection of cybersecurity concepts and tools
date: 2026-01-25
tags: ["cybersecurity"]
draft: true
---

This is a collection of cybersecurity concepts and tools.

## Concepts
### Security headers
Some security headers include
- content-security-policy
- referrer-policy
- x-xss-protection

#### Content Security Policy (CSP)
The content security policy (CSP) is mainly used as a defense against cross site scripting attacks, in which an attacker is able to inject malicious code into the victim's site. It defines approved sources of content that the browser may load. For example, a CSP may specify that only scripts from the same origin are allowed to be executed.

Example
```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com; script-src 'self' https://apis.google.com; object-src 'none'; frame-ancestors 'none'; base-uri 'self';
```
The `default-src 'self'` directive allows content to be loaded only from the same origin. The `img-src 'self' example.com` directive allows images to be loaded from the same origin and from example.com. The `script-src 'self' https://apis.google.com` directive allows scripts to be loaded from the same origin and from the specified Google API domain. The `object-src 'none'` directive disallows all object, embed, and applet elements. The `frame-ancestors 'none'` directive prevents the page from being framed by any site. The `base-uri 'self'` directive restricts the URLs that can be used in a `<base>` element to the same origin.

#### Referrer Policy



#### X Xss Protection


### Cloud detection and response (CDR)


### Endpoint detection and response (EDR)


### Software bill of materials (SBOM)


### Penetration testing and threat modeling



### Proxy


### Data loss prevention (DLP)


### Container image scanning



### Zero trust architecture


### Authentication vs Authorization



## Cyber attacks
### Cross-site scripting (XSS)



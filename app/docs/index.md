---
layout: docs
title: Installation
permalink: /docs/
published: true
---

## Installing Kitematic

---

### Download Kitematic

[Download Kitematic](/download), unzip it and double-click the application to run it.

### Initial Setup

Opening Kitematic for the first time sets up everything you need to run Docker containers. If you don't already have VirtualBox installed, Kitematic will download and install the latest version.

![screen shot 2015-02-28 at 3 06 32 pm](https://cloud.githubusercontent.com/assets/251292/6427882/3c02eeb2-bf5c-11e4-85f5-2b9198d5941d.png)

All Done! Within a minute you should be ready to start running your first container!

![screen shot 2015-02-28 at 3 09 40 pm](https://cloud.githubusercontent.com/assets/251292/6427866/d574314c-bf5b-11e4-824d-946d41b174f4.png)

### Technical Details

Kitematic is a self-contained .app, with a two exceptions:

- It will install VirtualBox if it's not already installed.
- It copies the `docker` and `docker-machine` binaries to `/usr/local/bin` for convenience.

#### Why does Kitematic need my root password?

Kitematic needs your root password for two reasons:

- Installing VirtualBox requires root as it includes Mac OS X kernel extensions.
- Copying `docker` and `docker-machine` to `/usr/local/bin` may require root permission if the default permissions for this directory have been changed prior to installing Kitematic.

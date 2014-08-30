---
layout: docs
title: Known Issue Fixes
permalink: /docs/known-issue-fixes/
published: true
---

## Known Issue Fixes

---

### [object Object] Error During Install

![Object Error 1](/img/known-issue-fixes/object-error-1.png)

![Object Error 2](/img/known-issue-fixes/object-error-2.png)

This error is caused by older versions of boot2docker installed on your computer.
You can follow the steps below to fix this problem.

1. Open VirtualBox
2. Click **VirtualBox -> Preferences** on the Mac top menu bar
3. Click on the **Network** tab and then click on **Host-only Networks** ![VirtualBox Networks](/img/known-issue-fixes/virtualbox-networks.png)
4. Click on the **minus** sign to remove all the **vboxnets**
5. Right-click on **boot2docker-vm -> Close -> ACPI Shutdown** to shutdown the VM
6. Right-click on **boot2docker-vm -> Remove...** to remove the VM
7. Run the Kitematic installer again should now fix the problem by installing a newer version of boot2docker

Let us know if there are more issues at contact@kitematic.com or hop in our [support chat](https://www.hipchat.com/giAT9Fqb5).

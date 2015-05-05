---
layout: docs
title: RethinkDB Dev Database
permalink: /docs/rethinkdb-dev-database/
published: true
---

## Creating a Local RethinkDB Database for Development

---

In this tutorial, you will:

- Create a RethinkDB Container for Development
- (Advanced) Clone a small Node.js application and write data into RethinkDB.

#### Setting up RethinkDB in Kitematic

First, [download and start Kitematic](https://kitematic.com/download) if you haven't yet done so. Once you're in, the app should look like this:

![screen shot 2015-03-03 at 8 18 26 pm](https://cloud.githubusercontent.com/assets/251292/6476332/86134a50-c1e2-11e4-890f-d0973fa68c84.png)

Click on the _Create_ button of the `rethinkdb` image listing in the recommended list as shown above. This will download & run a RethinkDB container within a few minutes. Once it's done, you'll have a local RethinkDB database up and running.

![screen shot 2015-03-03 at 8 19 37 pm](https://cloud.githubusercontent.com/assets/251292/6476343/a05ee16c-c1e2-11e4-9816-01a7811c4ca3.png)

Let's start using it to develop a node.js app. For now let's figure out on which IP address and Port RethinkDB is listening! Awesome! To find which ports it's listening on, click the `Settings` tab and then the `Ports` section:

![screen shot 2015-03-03 at 9 39 12 pm](https://cloud.githubusercontent.com/assets/251292/6477156/f3a6a41c-c1ed-11e4-8c75-a3a629c2482e.png)

There! We can see that for RethinkDB Port `28015`, the container is listening on host `192.168.99.100` and port `49154` (in this example - it may be different for you). This means we can now reach RethinkDB via a client driver at `192.168.99.100:49154`. Again, this may be different for you.

#### (Advanced) Saving Data into RethinkDB with a local Node.js App

First [download and install Node.js](http://nodejs.org/) if you don't have it yet.

We'll create the RethinkDB example chat to test drive our new database. In the Terminal, type:

{% highlight bash %}
bash-3.2$ export RDB_HOST=192.168.99.100 # replace with IP from above step
bash-3.2$ export RDB_PORT=49154 # replace with Port from above step
bash-3.2$ git clone https://github.com/rethinkdb/rethinkdb-example-nodejs-chat
bash-3.2$ cd rethinkdb-example-nodejs-chat
bash-3.2$ npm install
bash-3.2$ npm start
{% endhighlight %}

Then open a browser at `http://localhost:8000`. Congratulations! you've used a RethinkDB container in Kitematic to build a real-time chat app. Happy coding!

![screen shot 2015-03-03 at 9 47 43 pm](https://cloud.githubusercontent.com/assets/251292/6477241/efd20074-c1ee-11e4-8943-c19318f2083d.png)

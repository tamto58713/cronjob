#!/bin/bash

if [ -z "$NODE_ENV" ]; then
    export NODE_ENV=development
fi

cp -r -L /tmp/package/node_modules /usr/src/cronjob/node_modules
cd /usr/src/cronjob
npm start

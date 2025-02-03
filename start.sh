#!/bin/bash
npm run build
forever start -c "npm start" ./ 
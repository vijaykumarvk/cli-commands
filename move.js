#!/usr/bin/env node
const { spawn } = require('child_process');
const mv = spawn('mv', [...process.argv.slice(2)], {"stdio":"inherit"});

#!/bin/sh

curl \
  -X POST \
  -H "Content-Type:application/graphql" \
  -d '{ count }' \
  'localhost:1337/graphql'

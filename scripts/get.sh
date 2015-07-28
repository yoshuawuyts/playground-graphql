#!/bin/sh

curl \
  -X PUT \
  -H "Content-Type:application/graphql" \
  -d '{ count }' \
  'localhost:1337/graphql'

#!/bin/sh

curl \
  -X PUT \
  -H "Content-Type:application/graphql" \
  -d 'mutation RootMutationType { updateCount }' \
  'localhost:1337/graphql'

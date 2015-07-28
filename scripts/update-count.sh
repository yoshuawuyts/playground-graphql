#!/bin/sh

curl \
  -X POST \
  -H "Content-Type:application/graphql" \
  -d 'mutation RootMutationType { updateCount }' \
  'localhost:1337/graphql'


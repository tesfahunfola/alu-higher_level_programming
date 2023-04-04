#!/bin/bash

url=$1
response=$(curl -s -o /dev/null -w "%{http_code}" $url) # Send a GET request and get the response status code
if [[ $response -eq 200 ]]; then
  curl -s $url # If the response status code is 200, display the body of the response
fi

#!/bin/bash

set -e

while ! curl chrome:5555/wd/hub/status|grep -q '"ready": true'; do
    echo "Waiting for selenium to be ready"
    sleep 1
done
echo "Selenium ready"

command="${1}"; shift
case "${command}" in 
    start)
        sleep infinity
        ;;
    bash)
        /bin/bash "${@}"
        ;;
    *)
        eval "${@}"
        ;;
esac

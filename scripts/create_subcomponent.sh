#!/bin/bash
while getopts ":n:sh" opt; do
    case ${opt} in
    n)
        subcomponent=${OPTARG}
        subcomponents_path="./src/components/subcomponents/"
        path=$(pwd)
        src_path=${path}/src
        store_path=${src_path}/store/index.js
        subcomponent_template=$path/templates/subcomponent

        if [ -d "${subcomponents_path}/${subcomponent}" ]; then
            echo "error: Directory exists!"
            exit 1
        fi

        cd "${subcomponents_path}" || exit 1
        mkdir "${subcomponent}"
        cd "${subcomponent}" || exit 1

        #create page template
        cat "${subcomponents_template}/index.vue" > index.vue
        echo "Created subcomponent directory and file!"
        ;;
    s)
        if [ -z "$subcomponent" ]; then
            echo "Subcomponent name is required!"
            exit 1
        fi

        #create store
        mkdir "store"
        cat "${subcomponent_template}/store/index.js" >./store/index.js 

        #add store import string
        sed -i '' -e '/StoreImports/ a\
        import '"$subcomponent"' from '"'"'../components/pages/'$subcomponent'/store'"'"'
        ' $store_path

        #add module
        sed -i '' -e '/modules: {/ a\
        '"\ \ \ \ $subcomponent"',
        ' $store_path
        echo Subcomponent store is created and added to root store.
        ;;
    h)
        printf "Usage: create_subcomponent.sh -n ComponentName\n\n"
        printf "   -s: Create and import store file\n"
        printf "   -h: Display help text\n"
        ;;
    \?)
        echo "Invalid option -${OPTARG}"
        exit 1
        ;;
    :)
        echo "Option -${OPTARG} requires a parameter."
        exit 1
        ;;
    esac
done

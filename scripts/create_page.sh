#!/bin/bash
while getopts ":p:sr" opt; do
    case $opt in
    p)
        page=$OPTARG
        pages_path="./src/components/pages/"
        path=$(pwd)
        src_path="$path/src"
        store_path=$src_path/store/index.js
        router_path=$src_path/router/index.js
        page_template=$path/templates/page

        if [ -d $pages_path/$page ]; then
            echo "error: Directory exists!"
            exit 1
        fi

        cd $pages_path
        mkdir $page
        cd $page

        #create page template
        cat "${page_template}/index.vue" > index.vue
        echo "Created page structure!"
        ;;
    s)
        if [ -z "$page" ]; then
            echo "Page name is required!"
            exit 1
        fi
        #create store
        mkdir "store"
        cat $page_template/store/index.js >./store/index.js 

        #add store import string
        sed -i '' -e '/StoreImports/ a\
        import '"$page"' from '"'"'../components/pages/'$page'/store'"'"'
        ' $store_path

        #add module
        sed -i '' -e '/modules: {/ a\
        '"\ \ \ \ $page"',
        ' $store_path
        echo Page store is created and added to root store.
        ;;
    r)
        if [ -z "$page" ]; then
            echo "Page name is required!"
            exit 1
        fi
        #create route
        mkdir "route"
        cat $page_template/route/index.js >./route/index.js
        sed -i '' -e "s/{{{page}}}/${page}/g" ./route/index.js

        #add route import string
        sed -i '' -e '/RouteImports/ a\
        import '"$page"' from '"'"'../components/pages/'$page'/route'"'"'
        ' $router_path

        #add component
        sed -i '' -e '/routes: \[/ a\
        '"\ \ \ \ $page"',
        ' $router_path
        echo Page route is created and added to main route.
        ;;
    \?)
        echo "Invalid option -$OPTARG"
        exit 1
        ;;
    :)
        echo "Option -$OPTARG requires a parameter."
        exit 1
        ;;
    esac
done


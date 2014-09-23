(function(scope){
    /*
    * Simple Loader - when SumoJS components are compiled
    * They are compiled down to standalone distributables
    * This loader can sit in the standalone build, and unpack
    * Not ment to be a full AMD loader, only unpacks defines
    * This is not robust enough to cascade deps.
    * MIT License 2014 Derek Anderson
    */
    if(!scope.define) {
        //if define does not exist, then lets create the func

        scope.define = function(name, deps, func) {
            var spaces = [];
            if(typeof(name) === 'string') {
                //if define passes a string as the name
                //then add to spaces

                spaces[name] = func;
            } else if (typeof(name) === 'object') {

                //this could be made to parse deps as well
                //and cascade this chain
                //when we run into the use case we will expand

                func = deps;
                deps = name;

                var args = [];
                //load dep into and execute define
                for (i = 0; i < deps.length; i++) {
                    args.push(deps[i]);
                }

                func.apply(func, args);
            }
        };
    }
}(window));

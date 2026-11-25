


1.  In next js when a server component with "use client" (which tells the browser to treat this as a client component) is rendered in the server side, the html document is then sent to the browser and then is rendered.then the js file is downloaded by the browser and then the event handlers are attached. this process is called hydration. during this if the values that are set by the server are not matching with what the browser is rendering in the client side then an error is thrown. basically both the server's and client's first render must start with the same values.

2. in next.connfig.ts there is cacheComponents:true. it prebuilds each page into a static shell, the fast part it can serve instantly

3. 'use cache' and cacheLife() tell the nextJs server to cache the rendered output of this function.not the function itself but the rendered output
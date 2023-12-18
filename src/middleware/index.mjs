// Import all middleware
// Reference https://blog.logrocket.com/working-astro-middleware/

// sequence will accept middleware functions and will execute them in the order they are passed
import { sequence } from 'astro/middleware'

// Import the middleware
import { paths } from './paths'

// export onRequest. Invoke "sequence" with the middleware
export const onRequest = sequence(paths)

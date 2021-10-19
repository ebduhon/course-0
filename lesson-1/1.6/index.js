
/** require('some-module');
 * 1. Resolving
 * 2. Loading
 * 3. Wrapping
 * 4. Evaluating
 * 5. Caching
 **/

//console.log(module);

// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename:
//   '/home/ec2-user/environment/courses/course-0/lesson-2/lesson-2.6/index.js',
//   loaded: false,
//   children: [],
//   paths:
//   [ '/home/ec2-user/environment/courses/course-0/lesson-2/lesson-2.6/node_modules',
//      '/home/ec2-user/environment/courses/course-0/lesson-2/node_modules',
//      '/home/ec2-user/environment/courses/course-0/node_modules',
//      '/home/ec2-user/environment/courses/node_modules',
//      '/home/ec2-user/environment/node_modules',
//      '/home/ec2-user/node_modules',
//      '/home/node_modules',
//      '/node_modules' ] }

console.log('In ./index.js');

// require('find-me');

/** Locates the file but does not load it. Will throw an error if the file does not exist. **/
/** Can be used to check whether an optional package is installed or not. **/
require.resolve('find-me'); 
'use strict';

const roboter = require('roboter');

roboter.
  workOn('server').
  equipWith(task => {
    task('universal/analyze', {
      src: [ '**/*.js', '!node_modules/**/*.js', '!coverage/**/*.js' ]
    });

    task('universal/test-units', {
      src: 'test/units/**/*.js'
    });

    task('universal/test-integration', {
      src: 'test/integration/**/*.js'
    });

    task('universal/shell', {
      build: 'docker build -t thenativeweb/wolkenkit-core .'
    });

    task('universal/license', {
      compatible: [
        // Individual licenses
        'Apache-2.0', 'Apache-2.0*',
        'BSD-2-Clause', 'BSD-3-Clause',
        'ISC',
        'MIT', 'MIT/X11', 'MIT*',
        'MIT Licensed. http://www.opensource.org/licenses/mit-license.php',
        'Public Domain',
        'Unlicense',

        // Combined licenses
        '(Apache-2.0 OR MPL-1.1)',
        'BSD-3-Clause OR MIT',
        '(MIT AND CC-BY-3.0)',
        '(WTFPL OR MIT)'
      ],

      ignore: {
        // MIT, see https://github.com/squaremo/bitsyntax-js/commit/1692d9ec2b1bb703c44f10b181d383fa51a21f5d
        bitsyntax: '0.0.4',

        // BSD-3-Clause, see https://github.com/deoxxa/duplexer2/blob/0.0.2/LICENSE.md
        duplexer2: '0.0.2',

        // BSD-3-Clause, see https://github.com/estools/esquery/blob/v1.0.0/license.txt
        esquery: '1.0.0',

        // MIT, see https://github.com/mklabs/node-fileset/blob/v0.2.1/LICENSE-MIT
        fileset: '0.2.1',

        // MIT, https://github.com/tarruda/has/blob/1.0.1/package.json
        has: '1.0.1',

        // BSD-2-Clause, see https://github.com/facebook/regenerator/blob/85c9e43331576be96e5dcc61757995397ab15b77/LICENSE
        'regenerator-transform': '0.9.11',

        // BSD-2-Clause, see https://github.com/jviereck/regjsparser/blob/0.1.5/LICENSE.BSD
        regjsparser: '0.1.5',

        // MIT, see https://github.com/eugeneware/unique-stream/blob/v1.0.0/LICENSE
        'unique-stream': '1.0.0'
      }
    });
  }).
  start();
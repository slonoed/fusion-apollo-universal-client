/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {test} from 'fusion-test-utils';
import ApolloClientPlugin, {
  ApolloClientCacheToken,
  ApolloClientCredentialsToken,
  ApolloClientEndpointToken,
  ApolloClientAuthKeyToken,
  GetApolloClientLinksToken,
} from '../index.js';

test('exports', t => {
  t.ok(ApolloClientPlugin, 'exports ApolloClientPlugin');
  t.ok(ApolloClientCacheToken, 'exports ApolloClientCacheToken');
  t.ok(ApolloClientCredentialsToken, 'exports ApolloClientCredentialsToken');
  t.ok(ApolloClientEndpointToken, 'exports ApolloClientEndpointToken');
  t.ok(ApolloClientAuthKeyToken, 'exports ApolloClientAuthKeyToken');
  t.ok(GetApolloClientLinksToken, 'exports ApolloClientAuthKeyToken');
});

//
// Copyright (c) 2019 by SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the LICENSE file
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict'

const garden = require('../kubernetes').garden()
const { cacheResource } = require('./common')
const { getSeeds } = require('../cache')
const logger = require('../logger')
const { registerHandler } = require('./common')
const { bootstrapSeed } = require('../utils/terminalBootstrap')

module.exports = io => {
  const emitter = garden.seeds.watch()
  cacheResource(emitter, getSeeds(), 'metadata.name')
  registerHandler(emitter, async function (event) {
    if (event.type === 'ERROR') {
      logger.error('shoots event error', event.object)
    } else if (event.type === 'ADDED') {
      const seed = event.object
      await bootstrapSeed({ seed })
    }
  })
}

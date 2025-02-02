/*
 * SonarQube
 * Copyright (C) 2009-2022 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { keyBy } from 'lodash';
import { Languages } from '../types/types';
import { ActionType } from './utils/actions';

export function receiveLanguages(languages: Array<{ key: string; name: string }>) {
  return { type: 'RECEIVE_LANGUAGES', languages };
}

type Action = ActionType<typeof receiveLanguages, 'RECEIVE_LANGUAGES'>;

export default function(state: Languages = {}, action: Action): Languages {
  if (action.type === 'RECEIVE_LANGUAGES') {
    return keyBy(action.languages, 'key');
  }

  return state;
}

export function getLanguages(state: Languages) {
  return state;
}

export function getLanguageByKey(state: Languages, key: string) {
  return state[key];
}

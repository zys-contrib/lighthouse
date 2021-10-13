/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {FunctionComponent} from 'preact';
import {useLayoutEffect, useRef} from 'preact/hooks';

import {useReportRenderer} from './report-renderer';

export const Styles: FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {dom} = useReportRenderer();

  useLayoutEffect(() => {
    if (!ref.current) return;
    const styles = dom.createComponent('styles');
    ref.current.appendChild(styles);
    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, []);

  return <div ref={ref}/>;
};

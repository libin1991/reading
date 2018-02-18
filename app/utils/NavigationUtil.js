/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { Navigator } from 'react-native-navigation-hybrid';

const reset = (navigation, routeName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  navigation.dispatch(resetAction);
};

function resetRootToCategory() {
  Navigator.setRoot({
    stack: {
      screen: {
        moduleName: 'Category', 
        props: {isFirst: true} 
      }
    }
  });
}

function resetRootToHome() {
  Navigator.setRoot({
    tabs: [
      {stack: {screen: {moduleName: 'Main'}}}, 
      {stack: {screen: {moduleName: 'Category'}}},
      {stack: {screen: {moduleName: 'Feedback'}}},
      {stack: {screen: {moduleName: 'About'}}}
    ]
  });
}

export default {
  resetRootToCategory,
  resetRootToHome,
};

/*
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
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { studentscoreComponent } from './studentscore/studentscore.component';

import { MemberComponent } from './Member/Member.component';

import { getrepoComponent } from './getrepo/getrepo.component';
import { setscoreComponent } from './setscore/setscore.component';
import { getscoreComponent } from './getscore/getscore.component';
import { AuthorizeAccessComponent } from './AuthorizeAccess/AuthorizeAccess.component';
import { RevokeAccessComponent } from './RevokeAccess/RevokeAccess.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'studentscore', component: studentscoreComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'getrepo', component: getrepoComponent },
  { path: 'setscore', component: setscoreComponent },
  { path: 'getscore', component: getscoreComponent },
  { path: 'AuthorizeAccess', component: AuthorizeAccessComponent },
  { path: 'RevokeAccess', component: RevokeAccessComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }

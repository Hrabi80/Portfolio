import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: '', component: AboutmeComponent},
  {path:'experience', component: ExperienceComponent},
  {path: 'communities', component:CommunityComponent},
  {path: 'blogs', component:BlogsComponent},
  {path: 'contact-me', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

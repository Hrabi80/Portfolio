import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { environment } from "../environments/environment";

//firebase modules
//import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots } from '@angular/fire/firestore';
import { list, provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';


import { AngularFirestoreModule,SETTINGS } from '@angular/fire/compat/firestore/'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { FreelanceComponent } from './experience/freelance/freelance.component';
import { CommunityComponent } from './community/community.component';
import { CertificationsComponent } from './experience/certifications/certifications.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore, Firestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';




const firebaseConfig4 = [
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebaseConfig) // Your config
];
//AngularFireModule.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AboutmeComponent,
    ExperienceComponent,
    FreelanceComponent,
    CommunityComponent,
    CertificationsComponent,
    BlogsComponent,
    ContactComponent,

  ],
  imports: [
    
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    //AngularFirestoreModule.enablePersistence()
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideAnalytics(() => getAnalytics()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
    // provideAuth(() => getAuth()),
  //  AngularFireDatabaseModule,
    

    

  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    AngularFirestoreModule,
    { provide: SETTINGS, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



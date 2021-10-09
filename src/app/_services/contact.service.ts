import { Injectable } from '@angular/core';
//import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  collection,
  doc,
  docData,
  DocumentReference,
  CollectionReference,
  Firestore,
  addDoc,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  Query,
  DocumentData,
  collectionData,
  collectionChanges,
  docSnapshots,
  setDoc,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private store: AngularFirestore;
  private dbPath = '/contact';
  constructor( store: AngularFirestore) { 
    this.store = store;
  }

   AddToContact(data:any){
    return this.store.collection('contact').add(data);
   }


}

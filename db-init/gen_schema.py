#!/usr/bin/env python3

# remember to run `sudo hwclock -s` to sync time!

import firebase_admin
from firebase_admin import credentials, firestore
from data import UCSC, SC, beach

cred = credentials.Certificate("./test0-cb8c5-fb-key.json")
firebase_admin.initialize_app(cred)

print("\nConnected to Firebase\n----------\n")

db = firestore.client()

for d in UCSC:
    db.collection("location-UCSC").document(d["name"]).set(d)

for d in SC:
    db.collection("location-SantaCruz").document(d["name"]).set(d)

for d in beach:
    db.collection("location-beach").document(d["name"]).set(d)

CREATE TABLE Rendez_vous(
   NumeroRv DECIMAL(15,2),
   dateRv VARCHAR(50),
   hreureRv VARCHAR(50),
   numeroclient VARCHAR(50),
   PRIMARY KEY(NumeroRv)
);

CREATE TABLE client(
   NumeroClient INT,
   nom VARCHAR(50),
   prenom VARCHAR(50),
   motif VARCHAR(50),
   NumeroRv DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(NumeroClient),
   FOREIGN KEY(NumeroRv) REFERENCES Rendez_vous(NumeroRv)
);

CREATE TABLE vehicule(
   matrice INT,
   NumeroClient INT,
   maeque VARCHAR(50),
   annee VARCHAR(50),
   NumeroClient_1 INT NOT NULL,
   PRIMARY KEY(matrice),
   FOREIGN KEY(NumeroClient_1) REFERENCES client(NumeroClient)
);

CREATE TABLE employer(
   numeroEmployer INT,
   nom VARCHAR(50),
   prenom VARCHAR(50),
   specialiter VARCHAR(50),
   PRIMARY KEY(numeroEmployer)
);

CREATE TABLE administrateur(
   NumeroAdmin INT,
   nom VARCHAR(50),
   prenom VARCHAR(50),
   NumeroClient INT NOT NULL,
   numeroEmployer INT NOT NULL,
   PRIMARY KEY(NumeroAdmin),
   UNIQUE(numeroEmployer),
   FOREIGN KEY(NumeroClient) REFERENCES client(NumeroClient),
   FOREIGN KEY(numeroEmployer) REFERENCES employer(numeroEmployer)
);

CREATE TABLE gere(
   matrice INT,
   numeroEmployer INT,
   PRIMARY KEY(matrice, numeroEmployer),
   FOREIGN KEY(matrice) REFERENCES vehicule(matrice),
   FOREIGN KEY(numeroEmployer) REFERENCES employer(numeroEmployer)
);

CREATE TABLE confirmer(
   NumeroRv DECIMAL(15,2),
   NumeroAdmin INT,
   PRIMARY KEY(NumeroRv, NumeroAdmin),
   FOREIGN KEY(NumeroRv) REFERENCES Rendez_vous(NumeroRv),
   FOREIGN KEY(NumeroAdmin) REFERENCES administrateur(NumeroAdmin)
);

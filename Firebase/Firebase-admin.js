var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: "firebase-adminsdk-myh0a@bits-0f-c0de-2f8ce.iam.gserviceaccount.com",
      private_key: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC42MXXdrf4UqTX\nz1NO4LtfAXLofMoEz/Qn8i/9+VYT+JSDD3uTULEAu8bks81n66ep9kU8adq3UTvI\neQWFAFTTifjNHGV8z6ZNeedey5WRXeFsHbAFJlGEYhfoE+/m/I/Cl2VmqJwGvme7\nQcZXl3HBPshMNawrS37LliTrl8YuypSK3WystKdIu/4IVSxMhn7oZ9DMAVctQiNk\nUfZPuFfdzoRp1EGGJlnc9PjLLTcvjMguUsC3L4vi7COPTMME/+1taaoxfHAmOFcG\nG3WosO6/d+XgOtqBdnO5CPxL1rTMvnzEx+wV1ynnfmOS2m7Z3XxQxvL2D93GaGGA\nThwOo/G7AgMBAAECggEAQNvTA4jFAY1iCNVW6mjhZfMYsinDKtAa3/9TRp67zNMe\nrSP8HNMl4FeC8NGEI9AkqvbeEVYlJ8iJnQyV2rakjPsvAS1TEOm9dRbuj60IhJK3\n25tJHW12EejncYe5WEfLW6CKtGw6HwWlWSe5pBdgE0nntxHoIOLjESVUPBQrtlPF\nF+tLwr2+soHJG1mQym9krCR0U5T5ssoSNn0UTDKQwH64ZV37fd6R5HDBCfkC9TtT\nTrbrE7alPN7RBWvRIkKCDTyjA91sGwjsjSKsuKYgZpfjYKRYCJ3sTk863QzAmjbn\nz07Osvsx8DAa9VzM6Uy9KQfH4OOlSCGah7c1Hfhg2QKBgQD++i6tUZwVmwulPIuJ\nbRAckRT4tQeBXQ0U9fs/Y8JqCiAro2c8CgeKbBU/rSHgOayW9ohoM+8Vfi/1iR/5\n5YODUMxZKBD+Mk+cV54zzQjHa0w6QE42IETACtIN1j1qFMPmjGjYcZnUkCvAt9IM\nYaq4h6nQOXHhZ9Ky28ixkd3VgwKBgQC5lpQcVzA4kfrfdGIyLACu8yU3qa8GyGDG\nLJM72mlf8Oj3feXzdQzq07gAjvHz2YMjzunCPNdTnXMW/mDbmi642we6+vQdbzga\nklrK0xSznSzP099MNyK33o67g29ywH1Zpp3JYkH82WmXCHqQMKcj1yFjrU88xL/9\nadmCDZv1aQKBgQDbBzybg/RJlwN88LKI3dguQe666n9FABLhw6ANRvvVrVcPRXHD\n4HWz0b67EVV9UO3STHrG0H37f4dhK2b9esvrPLgdik52ne9HRPjQVLvK2oADtgO5\neSS1t1XTrwrYmnfiDxFthMB5GVOMXBuiqS9HDrqv9Pi/gTk8jZIr/zqJUwKBgCZX\nAEQWkwSsy7oMDhk1U/LQkli8ekcZcDygis4roedLGqW+YZn5DXEZygJ7hWqN/fSQ\n02PoM8e3WEZgyNu1L3/K5/7txy6pglqi75TFJJqylsZci93v6gE4Ph5o2cZIE91I\neYJYBS/aLmEgREmzc2QJFoHEFQGF1+/fRSsD6rs5AoGBAJmu5KxgvNjTNj/gLfFe\nphEfq+/E16LB3Bi6SgsQ8mxue1ujzahehPgGskuMdjcqU7GnZnanTncESCXPt1y/\nOojOLwPQI1ETmJfrl1QRlDtHwa5ydFcdMRDm88XIa1aw0La9hE+oC8Rgoh3r4+ii\nF5pOCGIqnxHPd1vJ+TjUwcAc"(/\\n/g, "\n"),
      project_id: "bits-0f-c0de-2f8ce",
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();

var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: "firebase-adminsdk-myh0a@bits-0f-c0de-2f8ce.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJh5bqab389kn2\nn7q9GTZEpyTdqfXI6U9YlVla8cd83VmBCybTbqBgMLGngy++vPp1tz2Cxu//+8h6\nemoDIsncyMavlfpTa5TgxX01bwGjR8HeIacY+W32uHuvRfLsjJPZcn0Tihiak2aT\ng87S+MEFr7xBABf+L+XUhy5OxedHqhmeliYQb7OGkB0c9QPnrG8D/IrfUKHE2Az+\nplzV6IqgFS/MCZAz9kt2NrZtbUhNi279TmKd9hXwD85b10GSUPfi7IgY121Bdmrq\neA5hgAMjsK0foO2WzdQ8OeWl8fA0G0AkCrToHOIW0qfC5BBRyA8vX6g7188HXXYr\nOdjqaqJfAgMBAAECggEAHBxPJzx/tUjPcVi/bgAVy0a7RDYgZBlzKWqPr7lY96hS\ng0cAb+6W7UPti+2nG8Z1czUPne3M7Vp8EOWBYxWXrbXNzREw/TDc7+tsNydYRaPN\nPYRZMAke1xLNodmydF95ghPPsYmKPAmCfeIdV90942Krci+mqRyaROZkRbWiOKMY\ndJf5r1KxYqtMWfv3DCuGY3t1H5m9OmLXKt4arAl9FKN2jAK+Aea7hL2xEQIn1VXh\nNXQsUUIGlMmd6USD5bh0dO++NuyeABGmDQmyaNmEUS0BHxGTMi17XgEuFi//LJiY\n3ivTAexYeMR1i6+zzpuVqBWl6yxkdAyO0nrtwPC+XQKBgQDy4UYHiP2ldaNZQQgC\n/6yn4Zn+MSnuYdZ2m11uZ5UhEUvlJAflQqdpOnyYMKZWTEZhFry+wMzegl3GHJ0e\nbo+WO9VUeVn0lWfK2A3gqKnM7lo9RzH/JBGOicxLIG0QY4VpyXxmN2YCXvuS39tD\ny+ZxNgcgBw1oMFyZrwbRk7Qk4wKBgQDUan4buGZ0lEXxmJEikD7+4Fr/3BiJEab2\n6Y6liD060LT0lhNk1IbzRkru2UlAy37sdFC0cb3PouXVlzfdQ0ANpK06zSfWNvtI\n+UnAUo27eYhjU1aL4Wcja5ceATmd8kfcWmWAFStcMYUpITmDKEthomJnR0ArbkDl\neTIj1iyBVQKBgFfJpQ5ELaoIgypXnxW2ZCmqGYcPLiDDrEjijzrApd516gDArTno\nhao7QZ2gt/6pQycEmOQ5u9MRO+PHo+LEA5JBvjHyStlkx0dCIIH7dKRl4qgTe7bE\nyrPCitz8s28hCa/a6+PmUjC5NCU6VH6EzJ5O8PRamDX4hP/ni4dk49ARAoGBALPA\nZnVIx5LRwpqe8/qevGBtNTSdaTnc8UCzBl53+vChmu/7a/AAlS6bBmA3CfFGA2NP\nTthUBD8IZ5wm+kRIW5TwDRPcdmClaGIpasrQUVYbk1oSNQPsO55Stq/Sc5KAa2VC\nLfCEeYvr7/aNQiEGYTv+8Wzac6gNBefqdo6y+Dh9AoGBAOUTCgGECo9UuMKWX1lo\n/RbMrjZf2QvlPZJYn5a8wQC1/LdxQsw5Yh+yiRt5y2rxOJ0gyc1PqvP8Jkz1eHXo\nmRaqZwQR+uLV/FKgTIHZYeAGDy3CR57ZzoArWxKNgeCSIWws+MfPPb2ca7W+xYiE\nTybeO488bC6KNUGxdy0BQA7Z\n-----END PRIVATE KEY-----\n",
      project_id: "bits-0f-c0de-2f8ce",
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();

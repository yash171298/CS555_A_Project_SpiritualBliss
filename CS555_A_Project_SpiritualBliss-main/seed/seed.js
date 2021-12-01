const dbConnection = require("../config/mongoConnection");
const data = require("../data/index");
const products = data.products;
const comments = data.comments;
const users = data.users;
const productType = data.productType;
const admin = data.admin;

const { ObjectId } = require("mongodb");

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

 

  const product1 = await products.addProduct(
    "Daily Calm - 10 minutes mindfulness video ",
    "Mindfulness is a type of meditation in which you focus on being intensely aware of what you're sensing and feeling in the moment, without interpretation or judgment. Practicing mindfulness involves breathing methods, guided imagery, and other practices to relax the body and mind and help reduce stress. Spending too much time planning, problem-solving, daydreaming, or thinking negative or random thoughts can be draining.  Practicing mindfulness exercises can help you direct your attention away from this kind of thinking and engage with the world around you",
    "https://www.youtube.com/embed/ZToicYcHIOU",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "mind" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product2 = await products.addProduct(
    "Stress - 10 minute meditation video",
    "Numerous studies have shown that meditation is an effective stress-management tool, ultimately reprogramming the brain to the extent that meditators end up with more capacity to manage stress when meditation is a consistent, daily practice. In fact, meditation has been scientifically proven to help alleviate stress after just eight weeks of regular practice.",
    "https://www.youtube.com/embed/z6X5oEIg6Ak",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "stress" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product3 = await products.addProduct(
    "Meditation video to kick start your day",
    "Four Benefits of Morning Meditation 1.	It sets a tone of calm for the entire day. 2.	It gives me more energy 3.	It builds focus 4.It gives me an overall sense of well-being.",
    "https://www.youtube.com/embed/ENYYb5vIMkU",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "stress" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product4 = await products.addProduct(
    "15-Minute Meditation For Self Love",
    "Meditation isn’t about becoming a different person, a new person, or even a better person. It’s about training in awareness and getting a healthy sense of perspective. You’re not trying to turn off your thoughts or feelings. You’re learning to observe them without judgment. And eventually, you may start to better understand them as well.",
    "https://www.youtube.com/embed/itZMM5gCboo",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product5 = await products.addProduct(
    "Walking Meditation",
    "Walking meditation is a mindfulness practice that blends the physical experience of walking with the focused mindfulness of a meditative state. Walking meditation mobilizes meditation, allowing you to focus on mind-body connection as you pace or walk around a room or outside. With this form of meditation, you determine your walking pace and the length of your session. During a walking meditation session, the practitioner takes a few steps for a certain amount of time, focusing on the body’s movements and physical sensations with every step.",
    "https://www.youtube.com/embed/itZMM5gCboo",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product6 = await products.addProduct(
    "Yoga For Complete Beginners",
    "The benefits of a regular yoga practice are wide-ranging. In general, a complete yoga workout can help keep your back and joints healthy, improve your overall posture, stretch and strengthen muscles and improve your balance, says Roger Cole, Ph.D., a psychobiologist and certified Iyengar yoga teacher. Yoga also has “a restorative side that is deeply relaxing and rejuvenating,” Dr. Cole says. “Relaxation is built into every yoga session.",
    "https://www.youtube.com/embed/v7AYKMP6rOE",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product7 = await products.addProduct(
    "Full Body Stretch - Flexibility Workout",
    "Yoga’s more than just “om,” “ahh,” and “exhale.” In addition to its many other benefits, yoga is one of the best ways to improve flexibility, since it can increase joint and muscle mobility and build muscle strength. Increasing your flexibility has a ton of benefits, including: 1) Less muscle tension 2) Less pain 3) Lower stress 4) Improved circulation",
    "https://www.youtube.com/embed/TzseqhkMweI",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product8 = await products.addProduct(
    "Yoga For Hips & Lower Back Release",
    "If you experience lower back pain, your hips could be the cause of it. These poses will help strengthen all the right muscles to fix pain at the source. These yoga poses will also fight imbalance by opening up muscles that get tight from sitting, and strengthening the muscles that become weak. ",
    "https://www.youtube.com/embed/Ho9em79_0qg",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product9 = await products.addProduct(
    "Bedtime Yoga",
    "Practicing yoga before bedtime is a terrific way to release everything you’re holding onto mentally or physically before sinking into a peaceful night of deep sleep.Incorporating a relaxing yoga practice into your nighttime routine may improve the quality and duration of your sleep. This is especially beneficial for people who sleep lightly, have insomnia, or have limited time to sleep.",
    "https://www.youtube.com/embed/v7SN-d4qXx0",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const product10 = await products.addProduct(
    "Yoga Joy",
    "Get ready to embody the essence of joy for your physical, mental, and emotional wellbeing with this uplifting and strengthening vinyasa flow. Honour your self care routine and welcome balance with this full body session. Celebrate the effort and discipline you’ve incorporated and made time for in order to continue your home yoga practice. Use this time to FIND THE JOY, check-in with yourself, and welcome a little inner heat to get stagnant energy moving again.",
    "https://www.youtube.com/embed/P8uHMMmWMHQ",
    "seed.js",
    1,
    [
      { property: "product_type", value: "yoga" },
      { property: "yoga", value: "selflove" },
      { property: "yoga", value: "meditation" },
    ],
    1
  );

  const user1 = await users.addUser(
    "Devika",
    "M",
    "9084568936",
    "devika@gmail.com",
    "devika123",
    {
      Line1: "11 Bryant Ave",
      Line2: "Apt #11R",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07306,
    }
  );
  const user2 = await users.addUser(
    "Aditya",
    "K",
    "9084568936",
    "aditya@gmail.com",
    "aditya123",
    {
      Line1: "332 Webster Ave",
      Line2: "Apt #2R",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07307,
    }
  );

  const user3 = await users.addUser(
    "Pratham",
    "S",
    "9084568936",
    "prathm@gmail.com",
    "prathm123",
    {
      Line1: "11 Bryant Ave",
      Line2: "Apt #11R",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07306,
    }
  );

  // //608359c8aa00751b1ebd7546
  const c1 = await comments.addComment(
    user1._id,
    product1,
    "This is so good."
  );
  const c2 = await comments.addComment(
    user2._id,
    product1,
    "This yoga is so nice."
  );
  const c3 = await comments.addComment(
    user1._id,
    product2,
    "This is not good."
  );
  const c4 = await comments.addComment(user2._id, product4, "so good.");

  const c1Info = await comments.getComment(c1);

  // const commentsList = await products.getProductComments(product2);
  // console.log(commentsList);

  // console.log("Done seeding database");

  await products.addLike(product2, user1._id);

  await users.userPurchasesAProduct(user1._id, product2);
  await users.userViewsAProduct(user1._id, product8);
  await users.userLikesAProduct(user2._id, product2);

  const prop_ = {
    product_type: "plant",
  };

  const admin1 = await admin.addAdmin(
    "Devika",
    "Mhatre",
    "devikaPassword",
    "devika@stevens.edu"
  );

  await admin.adminAddsAProduct(product1, admin1);
  await admin.adminAddsAProduct(product2, admin1);
  await admin.adminAddsAProduct(product3, admin1);
  await admin.adminAddsAProduct(product4, admin1);
  await admin.adminAddsAProduct(product5, admin1);
  await admin.adminAddsAProduct(product6, admin1);
  await admin.adminAddsAProduct(product7, admin1);
  await admin.adminAddsAProduct(product8, admin1);
  await admin.adminAddsAProduct(product9, admin1);
  await admin.adminAddsAProduct(product10, admin1);

  //   await products.deleteProduct(product1, 34);
  //   await products.deleteProduct(product6, 24);
  await db.serverConfig.close();
}

main();

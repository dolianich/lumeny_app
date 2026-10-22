import jesus from '../assets/animations/Jesus.json';
import bible from '../assets/animations/Bible.json';
import gospel from '../assets/animations/Gospel.json';
import spirit from '../assets/animations/Spirit.json';
import pray from '../assets/animations/Pray.json';
import church from '../assets/animations/church.json';

import jesusBadge from '../assets/badges/jesusBadge.svg';
import bibleBadge from '../assets/badges/bibleBadge.svg';
import gospelBadge from '../assets/badges/gospelBadge.svg';
import spiritBadge from '../assets/badges/spiritBadge.svg';
import prayBadge from '../assets/badges/prayBadge.svg';
import churchBadge from '../assets/badges/churchBadge.svg';

const courses = [
  {
    id: '123',
    status: false,
    title: 'Foundations',
    description: 'Learn the basics of Christianity',
    badge: 'intro',
    order: 1,
    lessons: [
      {
        id: '1',
        title: 'Who is Jesus?',
        coverImage: jesus,
        badge: jesusBadge,
        description:
          'Explore the life, teachings, and divinity of Jesus Christ',
        order: 1,
        status: false,
        courseId: '123',
        theoryId: '123',
        challengeId: '123',
        longDescription:
          'Jesus Christ is the central figure of Christianity, believed by Christians to be the Son of God and the Savior of humanity. In this lesson, you’ll explore His life, teachings, miracles, and divine nature as revealed in the Bible.',
        theory: {
          description:
            'Learn the biblical foundations of Jesus’ identity and mission',
          bullets: [
            'The Divine Son of God',
            'Teachings & Miracles',
            'Prophecy & Fulfillment',
          ],
        },
        challenge: {
          description:
            'Test your knowledge and reflect on Jesus’ role in your life',
          bullets: [
            'Quiz Yourself',
            'Personal Reflection',
            'Scripture Memorization',
          ],
        },
      },
      {
        id: '2',
        title: 'What is the Gospel?',
        coverImage: gospel,
        badge: gospelBadge,
        description: "God's rescue plan for humanity through Jesus",
        order: 2,
        status: false,
        courseId: '123',
        theoryId: '123',
        challengeId: '123',
        theory: {},
        challenge: {},
      },
      {
        id: '3',
        title: 'Who is the Holy Spirit?',
        coverImage: spirit,
        badge: spiritBadge,
        description:
          'Meet the third person of the Trinity: your Helper, Comforter, and Guide',
        order: 3,
        status: false,
        courseId: '123',
        theoryId: '123',
        challengeId: '123',
        theory: {},
        challenge: {},
      },
      {
        id: '4',
        title: 'Why Read the Bible?',
        coverImage: bible,
        badge: bibleBadge,
        description:
          'Discover how Scripture guides, transforms, and strengthens faith',
        order: 4,
        status: false,
        courseId: '123',
        theoryId: '123',
        challengeId: '123',
        theory: {},
        challenge: {},
      },
      {
        id: '5',
        title: 'How to Pray',
        coverImage: pray,
        badge: prayBadge,
        description: 'Learn how to talk to God daily',
        order: 5,
        status: false,
        courseId: '123',
        theoryId: '123',
        challengeId: '123',
        theory: {},
        challenge: {},
      },
      {
        id: '6',
        title: 'What is the Church?',
        coverImage: church,
        badge: churchBadge,
        description: 'See God’s design for community, worship, and service',
        order: 6,
        status: false,
        courseId: '123',
        theoryId: '123',
        challengeId: '123',
        theory: {},
        challenge: {},
      },
    ],
  },
];
export default courses;

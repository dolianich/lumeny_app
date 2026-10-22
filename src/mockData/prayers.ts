import finace from '../assets/images/finance.svg';
import relationship from '../assets/images/relationship.svg';
import work from '../assets/images/work.svg';
import anxiety from '../assets/images/anxiety.svg';
import healing from '../assets/images/healing.svg';
import protection from '../assets/images/protection.svg';
import thanks from '../assets/images/thanks.svg';
import guidance from '../assets/images/guidance.svg';

const prayers = [
  {
    id: '1',
    cover: finace,
    heading: 'Financial',
    description: 'Needs and provision',
    prayersText: [
      {
        id: '1',
        heading: 'Prayer for Financial Help (to St. Joseph the Worker)',
        text: '"Dear St. Joseph, you provided for the Holy Family with humble work and trust in God. Teach me to rely on God’s providence in my financial needs. Help me find dignified work, manage my resources wisely, and be generous in times of abundance. May I never despair but always trust in the Lord’s care. Amen."',
      },
      {
        id: '2',
        heading: 'Prayer for Trust in God’s Providence',
        text: '"Heavenly Father, You know my needs before I ask. Grant me the grace to trust in Your timing and care. Provide for me in my struggles, and help me use my blessings to serve others. May I always seek first Your Kingdom, knowing You will supply all I need. Amen."',
      },
    ],
  },
  {
    id: '2',
    cover: relationship,
    heading: 'Relationship',
    description: 'Healing and unity',
    prayersText: [
      {
        id: '1',
        heading: 'Prayer for a Troubled Relationship',
        text: '"Lord Jesus, You taught us to love one another as You have loved us. Heal the wounds in my relationship with [name]. Grant us patience, forgiveness, and understanding. Help us communicate with kindness and rebuild trust. May Your love guide us always. Amen."',
      },
      {
        id: '2',
        heading: 'Prayer for a Future Spouse (Single People)',
        text: '"Heavenly Father, if it is Your will, prepare my heart and the heart of my future spouse. Help us grow in holiness as we wait for each other. Guide me to a loving, Christ-centered relationship that honors You. Mary and St. Joseph, pray for me. Amen."',
      },
      {
        id: '3',
        heading: 'Prayer for Family Unity',
        text: '"Holy Family of Nazareth, bless my home with peace, love, and faith. Help us forgive one another, support each other in trials, and grow closer to God. May our family be a reflection of Your love. Amen."',
      },
    ],
  },
  {
    id: '3',
    cover: work,
    heading: 'Work & Career',
    description: 'Guidance and purpose',
    prayersText: [
      {
        id: '1',
        heading:
          'Prayer for Job Seekers (to St. Cajetan, Patron of Job Seekers)',
        text: '"St. Cajetan, you helped the unemployed find dignified work. Intercede for me as I search for employment. Open doors to opportunities that align with God’s will. Give me perseverance, wisdom in interviews, and trust in divine timing. Amen."',
      },
      {
        id: '2',
        heading: 'Prayer for Success at Work',
        text: '"Lord, bless my efforts at work. Help me to perform my duties with integrity, diligence, and charity. May my work glorify You and serve others. If this path is not Your will, guide me to where I am meant to be. Amen."',
      },
    ],
  },
  {
    id: '4',
    cover: anxiety,
    heading: 'Anxiety',
    description: 'Peace and calm',
    prayersText: [
      {
        id: '1',
        heading: 'Prayer for Peace (Serenity Prayer – Catholic Version)',
        text: '"God, grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference. Let me trust in Your perfect plan and find peace in Your presence. Amen."',
      },
      {
        id: '2',
        heading: 'Prayer Before a Difficult Situation',
        text: '"Jesus, I place all my worries into Your hands. Calm my heart and remind me that You are with me. Give me strength, clarity, and trust in Your protection. Mary, wrap me in your mantle of peace. Amen."',
      },
    ],
  },
  {
    id: '5',
    cover: healing,
    heading: 'Healing',
    description: 'Wholeness and restoration',
    prayersText: [
      {
        id: '1',
        heading: 'Prayer for Healing (to Jesus the Divine Physician)',
        text: '"Lord Jesus, You healed the sick and comforted the brokenhearted. I ask for Your healing touch in my life—body, mind, and soul. Restore me according to Your will, and help me trust in Your perfect plan. Amen."',
      },
      {
        id: '2',
        heading: 'Prayer for Inner Healing',
        text: '"Holy Spirit, heal my wounded heart. Free me from past hurts, bitterness, and fear. Fill me with Your love, peace, and joy. Help me forgive as You have forgiven me. Amen."',
      },
    ],
  },
  {
    id: '6',
    cover: protection,
    heading: 'Protection',
    description: 'Safety and security',
    prayersText: [
      {
        id: '1',
        heading: 'Prayer for Traveling (to St. Christopher)',
        text: '"St. Christopher, protect me on my journey. Keep me safe from harm, and may God’s angels guide my path. Grant me a peaceful trip and a safe return. Amen."',
      },
      {
        id: '2',
        heading: 'Prayer Against Evil & Temptation',
        text: '"St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the Heavenly Host, cast into hell Satan and all evil spirits who prowl about the world seeking the ruin of souls. Amen."',
      },
    ],
  },
  {
    id: '7',
    cover: thanks,
    heading: 'For Thanks',
    description: 'For gratitude and blessings',
    prayersText: [
      {
        id: '1',
        heading: 'Simple Prayer of Thanks',
        text: '"Lord, thank You for Your countless blessings. Help me to always recognize Your goodness in my life and to share Your love with others. May my heart overflow with gratitude every day. Amen."',
      },
    ],
  },
  {
    id: '8',
    cover: guidance,
    heading: 'Guidance',
    description: 'Wisdom and discernment',
    prayersText: [
      {
        id: '1',
        heading: 'Prayer for Guidance (to the Holy Spirit)',
        text: '"Come, Holy Spirit, enlighten my mind and heart. Show me the path God has prepared for me. Give me wisdom to choose rightly, courage to follow Your will, and peace in my decisions. Amen."',
      },
    ],
  },
];

export default prayers;

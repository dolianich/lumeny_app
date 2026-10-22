import TopBarTheory from '../components/TopBar/TopBarAction';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import TheoryBlock from '../components/TheoryBlock/TheoryBlock';
import { useState } from 'react';
import useScrollToTop from '../utils/useScrollToTop';
import scroll from '../assets/scroll.svg';
import portrait from '../assets/portrait.svg';
import teach from '../assets/teach.svg';
import miracle from '../assets/miracle.svg';
import cross from '../assets/cross.svg';
import friend from '../assets/friend.svg';
import CompletedTheory from '../components/CompletedTheory/CompletedTheory';

const blocks = [
  {
    title: 'Jesus: The Promised Messiah',
    text: 'Long before Jesus was born, the Old Testament prophets foretold the coming of a Savior who would redeem God’s people. Isaiah 9:6 calls Him "Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace," while Micah 5:2 predicted His birth in Bethlehem. Jesus fulfilled hundreds of these prophecies, proving He was the long-awaited Messiah.',
    img: scroll,
  },
  {
    title: 'The Divine Son of God',
    text: 'Jesus wasn’t just a moral teacher—He claimed to be God in human form (John 10:30). He forgave sins (Mark 2:5-7), accepted worship (Matthew 14:33), and performed miracles only God could do, like calming storms (Mark 4:39) and raising the dead (John 11:43-44). The Bible declares Him as the Word who "became flesh" (John 1:14).',
    img: portrait,
  },
  {
    title: 'The Teachings of Jesus',
    text: 'Jesus’ teachings revolutionized the world. He preached love (Matthew 22:37-39), humility (Matthew 5:5), and forgiveness (Luke 6:27). His Sermon on the Mount (Matthew 5-7) outlined a radical way of living—one centered on God’s Kingdom, not worldly power.',
    img: teach,
  },
  {
    title: 'The Miracles of Jesus',
    text: 'Jesus’ miracles weren’t just displays of power—they pointed to His identity. He healed the sick (Mark 1:40-42), fed thousands (John 6:1-14), and even conquered death (John 11). These acts confirmed His divine authority and compassion.',
    img: miracle,
  },
  {
    title: 'The Sacrifice and Resurrection',
    text: 'Jesus’ death on the cross wasn’t a tragedy—it was the fulfillment of God’s plan to save humanity (John 3:16). He took the punishment for sin, and His resurrection (Matthew 28:1-10) proved He had power over death, offering eternal life to all who believe.',
    img: cross,
  },
  {
    title: 'Jesus Today: King and Friend',
    text: 'Jesus isn’t just a historical figure—He’s alive and active today. He intercedes for believers (Hebrews 7:25), promises to return (Revelation 22:12), and invites us into a personal relationship with Him (Revelation 3:20).',
    img: friend,
  },
];

const TheoryPage = () => {
  useScrollToTop();
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [theoryCompleted, setTheoryCompleted] = useState(false);
  const scrollToTop = useScrollToTop();

  const handlePrevious = () => {
    setCurrentBlockIndex((prev) => Math.max(0, prev - 1));
    scrollToTop();
  };

  const handleNext = () => {
    if (currentBlockIndex < blocks.length - 1) {
      setCurrentBlockIndex((prev) => Math.min(blocks.length - 1, prev + 1));
      scrollToTop();
    } else {
      setTheoryCompleted(true);
    }
  };

  if (theoryCompleted) {
    return <CompletedTheory />;
  }

  return (
    <div>
      <TopBarTheory />
      <BottomNavigation
        count={blocks.length}
        currentIndex={currentBlockIndex}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <TheoryBlock
        title={blocks[currentBlockIndex].title}
        text={blocks[currentBlockIndex].text}
        img={blocks[currentBlockIndex].img}
      />
    </div>
  );
};

export default TheoryPage;

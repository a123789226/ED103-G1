-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1:3306
-- 產生時間： 2020 年 11 月 24 日 07:56
-- 伺服器版本: 5.7.23
-- PHP 版本： 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ed103g1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `adopt`
--

DROP TABLE IF EXISTS `adopt`;
CREATE TABLE IF NOT EXISTS `adopt` (
  `adoptNo` int(11) NOT NULL AUTO_INCREMENT,
  `memNo` int(11) NOT NULL,
  `aquaNo` int(11) NOT NULL,
  `adoptDate` date NOT NULL,
  `adoptDollar` int(11) NOT NULL,
  PRIMARY KEY (`adoptNo`),
  KEY `memNo` (`memNo`),
  KEY `memNo_2` (`memNo`),
  KEY `aquaNo` (`aquaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `adopt`
--

INSERT INTO `adopt` (`adoptNo`, `memNo`, `aquaNo`, `adoptDate`, `adoptDollar`) VALUES
(1, 4, 1, '2020-07-01', 400),
(2, 5, 1, '2020-07-06', 20),
(3, 6, 1, '2020-07-10', 100),
(4, 1, 1, '2020-07-15', 230),
(5, 8, 1, '2020-07-21', 20),
(6, 1, 3, '2020-07-23', 40),
(7, 1, 3, '2020-07-27', 80),
(8, 1, 3, '2020-07-29', 20),
(9, 4, 3, '2020-08-01', 400),
(10, 5, 3, '2020-08-06', 20),
(11, 6, 5, '2020-08-13', 100),
(12, 1, 7, '2020-08-20', 230),
(13, 1, 7, '2020-08-26', 20),
(14, 15, 7, '2020-08-29', 40),
(15, 10, 7, '2020-08-23', 80),
(16, 17, 8, '2020-08-26', 20),
(17, 11, 8, '2020-09-01', 400),
(18, 12, 8, '2020-09-06', 20),
(19, 13, 8, '2020-09-10', 100),
(20, 14, 8, '2020-09-15', 230),
(21, 15, 5, '2020-09-21', 20),
(22, 3, 9, '2020-11-08', 40),
(23, 4, 9, '2020-11-12', 80),
(24, 5, 9, '2020-11-15', 20),
(25, 6, 9, '2020-11-16', 400),
(26, 7, 5, '2020-11-18', 20),
(27, 8, 9, '2020-11-23', 100),
(28, 9, 10, '2020-11-10', 230),
(29, 1, 10, '2020-11-12', 20),
(30, 15, 10, '2020-11-19', 40),
(31, 10, 10, '2020-11-23', 80),
(32, 17, 10, '2020-11-26', 20),
(33, 20, 5, '2020-11-17', 400),
(34, 5, 11, '2020-07-06', 20),
(35, 6, 11, '2020-07-10', 100),
(36, 7, 11, '2020-07-15', 230),
(37, 8, 11, '2020-07-21', 20),
(38, 8, 11, '2020-07-23', 40),
(39, 9, 12, '2020-07-27', 80),
(40, 10, 12, '2020-07-29', 20),
(41, 11, 12, '2020-08-01', 400),
(42, 12, 12, '2020-08-06', 20),
(43, 13, 12, '2020-08-13', 100),
(44, 14, 13, '2020-08-20', 230),
(45, 15, 13, '2020-08-26', 20),
(46, 16, 13, '2020-08-29', 40),
(47, 17, 13, '2020-08-23', 80),
(48, 18, 13, '2020-08-26', 20),
(49, 19, 14, '2020-09-01', 400),
(50, 20, 14, '2020-09-06', 20),
(51, 1, 14, '2020-09-10', 100),
(52, 2, 14, '2020-09-15', 230),
(53, 3, 14, '2020-09-21', 20),
(54, 4, 15, '2020-11-08', 40),
(55, 5, 15, '2020-11-12', 80),
(56, 6, 15, '2020-11-15', 20),
(57, 20, 15, '2020-11-16', 400),
(58, 7, 15, '2020-11-18', 20),
(59, 8, 16, '2020-11-23', 100),
(60, 9, 16, '2020-11-10', 230),
(61, 10, 16, '2020-11-12', 20),
(62, 11, 16, '2020-11-19', 40),
(63, 11, 16, '2020-11-23', 80),
(64, 13, 7, '2020-11-26', 20),
(65, 21, 13, '2020-11-23', 8000),
(66, 22, 13, '2020-11-23', 80000),
(67, 23, 1, '2020-11-24', 111);

-- --------------------------------------------------------

--
-- 資料表結構 `aqua`
--

DROP TABLE IF EXISTS `aqua`;
CREATE TABLE IF NOT EXISTS `aqua` (
  `aquaNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '動物編號',
  `aquaType` varchar(20) NOT NULL COMMENT '動物物種',
  `aquaName` varchar(20) NOT NULL DEFAULT '???' COMMENT '動物名稱',
  `aquaAge` int(11) NOT NULL COMMENT '動物年齡',
  `aquaSex` varchar(1) NOT NULL COMMENT '動物性別',
  `arriveDate` date NOT NULL COMMENT '到館日期',
  `rescueLoc` varchar(25) NOT NULL COMMENT '救援地點',
  `jourStory` varchar(2000) NOT NULL COMMENT '動物介紹',
  `recoverStatus` tinyint(1) NOT NULL DEFAULT '0' COMMENT '恢復狀態(0:恢復中;1:已恢復)',
  `releaseDate` date DEFAULT NULL COMMENT '野放日期',
  `releaseLoc` varchar(25) DEFAULT NULL COMMENT '野放地點',
  `aquaPic` varchar(30) NOT NULL COMMENT '動物照片',
  `adoptTotalNum` int(11) DEFAULT NULL COMMENT '認養人數',
  `adoptTotalAmt` int(11) DEFAULT NULL COMMENT '總金額',
  `nameStatus` varchar(25) DEFAULT '提名中' COMMENT '提/命名狀態',
  `nameStart` date DEFAULT NULL COMMENT '提名開始時間',
  `nameEnd` date DEFAULT NULL COMMENT '提名結束時間',
  `voteStart` date DEFAULT NULL COMMENT '投票開始時間',
  `voteEnd` date DEFAULT NULL COMMENT '投票結束時間',
  PRIMARY KEY (`aquaNo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `aqua`
--

INSERT INTO `aqua` (`aquaNo`, `aquaType`, `aquaName`, `aquaAge`, `aquaSex`, `arriveDate`, `rescueLoc`, `jourStory`, `recoverStatus`, `releaseDate`, `releaseLoc`, `aquaPic`, `adoptTotalNum`, `adoptTotalAmt`, `nameStatus`, `nameStart`, `nameEnd`, `voteStart`, `voteEnd`) VALUES
(1, 'dolphin', 'Tony', 23, 'M', '2020-06-28', 'Pacific', 'Tony was found stranded and found to have two marks, one likely the result of a shark attack that had healed and the other a tumor, but it was in a more stable condition than he was rescued.', 1, '2020-10-22', 'Pacific', '1.jpg', 10, 671, '已完成', '2020-07-01', '2020-07-08', '2020-07-10', '2020-07-17'),
(3, 'seal', 'Zachary', 18, 'M', '2020-07-23', 'Atlantic', 'Zachary was taken into good care. Estimated to be about seven months old, the pup was observed unable to dive and floating sideways.', 1, NULL, NULL, '3.jpg', 8, 480, '已完成', '2020-07-26', '2020-08-02', '2020-08-04', '2020-08-11'),
(5, 'dolphin', 'Christy', 5, 'F', '2020-08-12', 'Atlantic', 'Christy is an adult female dolphin with a scarred-up fin that we find traveling and socializing in big groups, primarily within the deeper regions.', 0, NULL, NULL, '5.jpg', 5, 300, '已完成', '2020-08-15', '2020-08-22', '2020-08-24', '2020-08-31'),
(7, 'seal', 'Marco', 29, 'M', '2020-08-20', 'Atlantic', 'Marco was the first to head straight for the ocean; he raced straight for the waves after just a short moment of hesitation.', 0, NULL, NULL, '7.jpg', 15, 1200, '已完成', '2020-08-23', '2020-08-30', '2020-09-01', '2020-09-08'),
(8, 'turtle', 'Square', 18, 'F', '2020-08-25', 'Atlantic', 'Square lives up to her name and will rock and roll all over the place while being fed. Luckily for her care takers she is now in recover program!', 0, NULL, NULL, '8.jpg', 10, 600, '已完成', '2020-08-28', '2020-09-04', '2020-09-06', '2020-09-13'),
(9, 'dolphin', '???', 27, 'M', '2020-11-07', 'Indian', 'Dolphin No.9 was found stranded and rescued near North Bay. Staff are working to stabilize him, and he is receiving around-the-clock care.', 0, NULL, 'null', '9.jpg', 6, 370, '投票中', '2020-11-03', '2020-11-10', '2020-11-12', '2021-11-26'),
(10, 'whale', '???', 22, 'F', '2020-11-09', 'Atlantic', 'Whale No.10 has a cautious and reserved demeanor until she gets to know her surroundings or the people nearby. She tends to follow staffs\' lead, and forms a close bond with select members of her care team.', 0, NULL, 'null', '10.jpg', 5, 320, '投票中', '2020-11-04', '2020-11-11', '2020-11-13', '2021-11-27'),
(11, 'seal', '???', 18, 'F', '2020-11-10', 'Atlantic', 'Seal No.11 is a male seal, believed to be just 2 months old when he was rescued. He was discovered near West Bay.', 0, NULL, 'null', '11.jpg', 7, 580, '投票中', '2020-11-05', '2020-11-12', '2020-11-14', '2021-11-28'),
(12, 'turtle', '???', 1, 'F', '2020-11-08', 'Indian', 'Since being admitted to the Rescue Centre Monday evening, Turtle No.12 has been under intensive observation and treated with subcutaneous fluids, gastric protectants and antibiotics.', 0, NULL, 'null', '12.jpg', 10, 900, '投票中', '2020-11-06', '2020-11-13', '2020-11-15', '2021-12-05'),
(13, 'dolphin', '???', 7, 'M', '2020-11-14', 'Atlantic', 'Dolphin No.13 is a child male dolphin with a scarred-up fin. Staff are carefully monitoring him with our expert team and veterinarians.', 0, NULL, 'null', '13.jpg', 5, 88300, '命名中', '2020-11-16', '2021-11-24', '2021-11-26', '2021-12-03'),
(14, 'whale', '???', 23, 'M', '2020-11-15', 'Pacific', 'Whale No.14 is extremely curious and vocal. She makes a wide range of vocalizations to the beluga care team when she wants attention or to express herself.', 0, NULL, 'null', '14.jpg', 4, 200, '命名中', '2020-11-16', '2021-11-25', '2021-11-27', '2021-12-04'),
(15, 'seal', '???', 29, 'M', '2020-11-16', 'Atlantic', 'Seal No.15 was rescued near East coast, has a ways to go in his rehabilitation process. He is bright and feisty and loves his swims, but hasn’t quite figured out how to eat fish yet!', 0, NULL, 'null', '15.jpg', 15, 790, '命名中', '2020-11-16', '2021-11-26', '2021-11-28', '2021-12-05'),
(16, 'turtle', '???', 18, 'F', '2020-11-17', 'Atlantic', 'Turtle No.16 is an adult male turtle was found alive but wounded on the hard coral rock bench on Bonaire’s east coast.', 0, NULL, 'null', '16.jpg', 10, 670, '命名中', '2020-11-16', '2021-11-27', '2021-11-29', '2021-12-06'),
(17, 'dolphin', '???', 7, 'M', '2020-11-16', 'Atlantic', 'Dolphin No.17 is a child male dolphin with a scarred-up fin. Staff are carefully monitoring him with our expert team and veterinarians.', 0, NULL, NULL, '17.jpg', 0, 0, '0', NULL, '2021-11-27', NULL, '2020-11-30');

-- --------------------------------------------------------

--
-- 資料表結構 `blog`
--

DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `blogNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `blogTitle` varchar(255) NOT NULL COMMENT '文章標題',
  `blogPic` varchar(255) NOT NULL COMMENT '文章照片',
  `blogContent1` text NOT NULL COMMENT '文章內容1',
  `blogPic1` varchar(255) NOT NULL COMMENT '文章照片1',
  `blogContent2` text NOT NULL COMMENT '文章內容2',
  `blogPic2` varchar(255) NOT NULL COMMENT '文章照片2',
  `blogTime` date NOT NULL COMMENT '發表日期',
  `blogStatus` int(11) NOT NULL COMMENT '文章狀態(0:顯示;1:隱藏)',
  `blogMark` int(11) NOT NULL COMMENT '收藏數',
  `blogTags` varchar(10) NOT NULL COMMENT '文章標籤',
  PRIMARY KEY (`blogNo`),
  KEY `memNo` (`memNo`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `blog`
--

INSERT INTO `blog` (`blogNo`, `memNo`, `blogTitle`, `blogPic`, `blogContent1`, `blogPic1`, `blogContent2`, `blogPic2`, `blogTime`, `blogStatus`, `blogMark`, `blogTags`) VALUES
(1, 5, 'Tips for Visiting Aqua Wonderland', 'img/blogPost/1_0.jpg', 'A trip to the Monterey Bay Aquarium isn’t a budget activity. Tickets for adults are $40.00, children are $20.00, and students/seniors (65+) are $39.95. It may sound like a lot, but the aquarium is a non-profit. The money that it makes goes towards conservation efforts and research, so it’s worth it.With the price being the same all day, it’s best to go early in the morning to see it all and come back later in the day to get your money’s worth.\r\n', 'img/blogPost/1_1.jpg', 'Choosing what exhibits to see can be extremely overwhelming. There are a few highlights that you have to visit. Jellyfish & Open Sea: The jellyfish and the open sea exhibit makes the high ticket price worth it. The large tank mimics that of the open ocean, and you feel as if you’re underwater, swimming with them yourself. The area has floor to ceiling windows where you can see jellyfish along with sharks, turtles, and more! Monterey Habitats: Located right behind the kelp forest, here you’ll find a large variety of small animals like sand dollars and shrimp alongside sharks and halibut. It focuses on five different habitats beneath the bay in an hourglass-shaped exhibit. Giant Pacific Octopus: When they say giant octopus, they are not kidding. It’s about 6 feet across, tentacle to tentacle. One of the coolest parts is trying to find the octopus. They change colors to blend in with their environment, and they can squeeze themselves into tiny crevices. Sea Otters Feeding: If you’re a fan of these adorable sea creatures, you don’t want to miss their feeding times. Every day at 10 am, 1:30 pm. and 3:30 pm. you can watch the otters romp, tumble and wrestle their meal.\r\n', 'img/blogPost/1_2.jpg', '2020-10-02', 0, 0, 'Whale'),
(2, 16, 'To see adorable dolphin with my lovely daughter', 'img/blogPost/2_0.jpg', 'It was a wonderful afternoon. I took my little daughter to see the dolphins in the Aqua Wonderland. We especially like the 3-year-old cute dolphin \"Lulu\". According to the friendly guide, lulu is a bottlenose dolphin from the Asia. It was found stranded on a beach by the public about a year ago. In addition to large bruises on his body, he also suffered from shortness of breath. After being notified, she was sent to Aqua Wonderland.\r\n', 'img/blogPost/2_1.jpg', 'According to the tour guide said，when Lulu first came, she was very afraid of human. He often kept a distance from the staff member and was unwilling to eat. After being carefully care with patience and love from staff member, Lulu gradually recovered and opened her mind to accept human\'s care. Now she is a very lively and lovely dolphin! With the agreement and help from the staff member, my daughter and I personally fed Lulu to eat fresh fish. I even pat her head. Lulu looked happy and gave us a big smile ! Thank you Aqua Wonderland for giving us great memories!\r\n', 'img/blogPost/2_2.jpg', '2020-10-11', 0, 0, 'Dolphin'),
(3, 10, 'AIR QUALITY AND ANIMAL CARE: MISHKA AND MORE', 'img/blogPost/3_0.jpg', 'Wildfires, smoke and air quality are top of mind for many of us in the western U.S., and our hearts go out to those who have been directly impacted by the fires. All is safe at the Seattle Aquarium but, due to very poor air quality in our region, we were closed to the public for most of last week to help protect the health of our guests, staff and volunteers.\r\n', 'img/blogPost/3_1.jpg', 'How might poor air quality affect the animals in our care? It depends on the species as well as individual underlying health conditions, if any. \"Fish and many aquatic invertebrates do their gas exchange across gills—and last week\'s smoke and ash didn\'t have any direct impact on the quality of our water, although the low light intensity may have had some impacts,\" explains Senior Veterinarian Dr. Caitlin Hadfield.\r\n', 'img/blogPost/3_2.jpg', '2020-10-25', 0, 0, 'Turtle'),
(4, 18, 'Akai Haato (赤井はあと) is a female Japanese Virtual YouTuber ', 'img/blogPost/4_0.jpg', 'Haato appears to be a classic tsundere who teases her fans by calling them kimo ota (creepy otaku), among other things. However, she does nothing to discourage creepy behaviors, and frequently does weird, creepy things herself; for example, using cropped NSFW fanart for video thumbnails, sniffing her own feet, and decorating her home in Animal Crossing: New Horizons with lewd drawings of herself and Tsunomaki Watame.', 'img/blogPost/4_1.jpg', 'Though Haato compares her fans to pigs, she seems perfectly content to (metaphorically) splash in the mud right next to them. Her sense of humor is extremely deranged even by hololive\'s standards. She often publishes short, random clips that make little sense even to Japanese listeners, and has a series of cooking videos in which she commits atrocities such as boiling beef in a mixture of Mentos and cola, or melting marshmallows over sliced ham.', 'img/blogPost/4_2.jpeg', '2020-11-07', 0, 0, 'Whale'),
(5, 8, 'PLEDGE TO SUPPORT THE ORCA MOMS-TO-BE ', 'img/blogPost/5_0.jpg', 'There are pregnant orca moms in all three of the endangered southern resident pods—J, K and L!\r\nThese orcas are at their lowest population in over three decades. New calves would be incredibly special in their own rights, but also essential to reverse the downward population trend.\r\nDr. Holly Fearnbach of the nonprofit SR3 and Dr. John Durban of Southall Environmental Associates discovered these pregnancies this summer. They use aerial images to study individual orcas’ body conditions over time.\r\nPregnancies are very good news, and we are celebrating. We’re also crossing our fingers because the risks are very high. Over the past decade, the majority of orca pregnancies haven’t resulted in successful births, for reasons including insufficient food (Chinook salmon) and toxic pollution. (Take a look at these infographics to learn why Chinook are the orcas’ key food source, why Chinook salmon are scarce and why pollution is a big problem.)\r\nBut we’re not just crossing our fingers. We’re also taking action: speaking out for added protections to give these orca moms the best possible chance at birthing and raising healthy young.\r\n\r\n', 'img/blogPost/5_1.jpg', 'WHAT CAN YOU DO?\r\nThe orcas travel throughout the Salish Sea looking for food. They are often seen in central and south Puget Sound, especially in the fall and winter (check out this infographic about sightings in the Salish Sea). That’s right in our backyard—and the backyard of anyone in Seattle, Tacoma, Olympia and a lot of other communities. Curious boaters often get too close, which can directly harm the orcas.\r\nIf you go out on a boat, or have friends who have boats, there is something you can do right now to help: take a pledge to give the southern resident orcas, particularly the pregnant orca mothers and their families, even more space on the water, and encourage your friends to do the same with the boater pledge, individual pledge or both.\r\nAt a minimum, small vessels—from sailboats, motorboats and whale-watching boats to kayaks, paddleboards and jet-skis—are required by Washington state law to slow to 7 knots when within half a mile of the orcas, and to stay at least 300 yards away on the sides and 400 yards in front and behind. Check out the Be Whale Wise guidelines for more details. (Kayakers should also move in close to shore and raft up, ideally in kelp beds, until the orcas have passed by, if orcas are approaching within 300 yards of shore.)\r\nBut those legally mandated distances should be taken as absolute minimums. The science shows that boats can impact the orcas from farther away, even with no engine running. We encourage all boaters to allow even more space to quiet the waters, avoid disturbing the orcas’ foraging behaviors, and give the pregnant orca moms the best possible chance to have healthy calves. Join us in taking the pledge!\r\nTogether with NRDC, Washington Environmental Council, The Whale Trail, Friends of the San Juans, and many other NGO partners, we’re also asking commercial whale-watching companies to take a similar pledge to steer clear of the critically endangered orcas and focus tours on the other amazing populations of killer whales and wildlife. We’ll share the names of participating companies with you—so if you’re interested in taking a tour, you can choose one of the most responsible companies, taking the lead on southern resident orca recovery.\r\n', 'img/blogPost/5_2.jpg', '2020-11-13', 0, 0, 'Whale'),
(6, 13, 'AIR QUALITY AND ANIMAL CARE', 'img/blogPost/6_0.jpg', 'Wildfires, smoke and air quality are top of mind for many of us in the western U.S., and our hearts go out to those who have been directly impacted by the fires. All is safe at the Seattle Aquarium but, due to very poor air quality in our region, we were closed to the public for most of last week to help protect the health of our guests, staff and volunteers.\r\nHow might poor air quality affect the animals in our care? It depends on the species as well as individual underlying health conditions, if any. \"Fish and many aquatic invertebrates do their gas exchange across gills—and last week\'s smoke and ash didn\'t have any direct impact on the quality of our water, although the low light intensity may have had some impacts,\" explains Senior Veterinarian Dr. Caitlin Hadfield.\r\n', 'img/blogPost/6_1.jpeg', 'Birds and marine mammals are a different story. “They have similar eyes, lungs and airways to humans—although bird respiratory tracts are much more efficient than ours—so they could have felt impacts from the poor air quality,” she continues. “Until the smoke cleared, we continued to monitor them all very closely, along with the air quality index. We had contingency plans in place and were prepared to provide assistance, but the animals all did well.”\r\nNow that Seattle\'s air quality is back in the \"good\" zone and the Aquarium is open again, we can all breathe a big sigh of relief (if you\'ll pardon the pun). But last week\'s smoky conditions provided another great reminder of the value of training our animals to participate in their own health care: it allows us to monitor them without causing any stress. \r\n', 'img/blogPost/6_2.jpg', '2020-11-17', 0, 0, 'Seal'),
(7, 18, 'Is he Thor?', 'img/blogPost/7_0.jpeg', 'In the old days, when men drank from the skulls of their enemies, beards were braided, and helmets with horns was the hot new thing, Thor was the Norse god of thunder.\r\nYeah: back in the days of Viking raids and pillages, this muscle-bound deity was the coolest guy you could be. He was brawny, he was uber-strong, and his mighty hammer made satisfying thwack sounds whenever he set it loose.\r\nBut although many things have changed since the Viking era (emoji are the new runes; crop tops are the new armored breastplates) we still have a massive hero-crush on our boy Thor.\r\nBecause of his all-around awesomeness, the guys over at Marvel Comics—specifically a trio named Stan Lee, Jack Kirby and Larry Lieber—thought that Thor would make a great superhero. They were right. Reimagined as a modern-day defender of All That is Awesome, Thor was a major player in the superhero boom in the 1960\'s that became known as the Silver Age of Comics.\r\n', 'img/blogPost/7_1.jpg', 'But back then, comic books weren\'t the unstoppable engine of pop-culture domination that they are now. Outside of a handful of figures like Superman and Batman, you had to be a pretty hardcore comic book fan to know who most of these guys in tights were.\r\nBesides appearing in the comics themselves, Thor only guest-starred in some breathtakingly awful kids\' cartoons, and a not-so-super live-action movie that made him second banana to Lou Ferrigno\'s Hulk. (Watch at your own risk.)\r\nBut that was before superheroes become big box office hits. This trend hit critical mass in the early 2000\'s with movies like Spider-Man, X-Men and Christopher Nolan\'s Batman trilogy.\r\n  \r\nA guy named Kevin Feige figured out a way to kick all of that to the next level: He developed a plan to start out with individual movies with individual superheroes, then combine them into a big-team up movie where they all got together to beat back some giant threat. He kicked it off with Iron Man in 2008, and the success of that led straight to Thor.\r\nOur favorite hammer-wielding hottie was the first Marvel hero to follow Iron Man, and the success of his movie in 2011 ensured that Feige\'s master plan could keep rolling straight into the first Avengers movie (2012).\r\n', 'img/blogPost/7_2.jpg', '2020-11-20', 0, 0, 'Turtle'),
(8, 21, 'THANK YOU, Aqua wonderland', 'img/blogPost/8_0.jpg', ' Since the Aquarium opened in 1977, volunteers have contributed 1,777,000 hours of service in support of the Aquarium’s mission. In 2019 alone, 1,228 community members recorded more than 103,000 volunteer hours. We thank our volunteers every day for their service, but this week—which happens to be National Volunteer Week—we want to highlight the contributions of these hardworking ocean conservation heroes. We can’t wait to welcome them back when we’re able to reopen to the public!', 'img/blogPost/8_1.jpg', 'If you’ve visited the Aqua Wonderland, you’ve interacted with an Aquarium volunteer. At our entrance, you’ve likely met one of our greeters, offering a map and a welcoming smile. As you’ve traveled through the exhibits, our volunteers in blue Aquarium shirts have been at the ready to share information about sea stars, anemones, otters and more—all while asking people to consider their role in marine conservation. Inside the exhibits, you’ve likely seen volunteer divers serving up underwater high fives and introducing visitors to rockfish and wrasses. If you’ve visited during one of our daytime special events like Marine Mammal Mania or Winter Fishtival, you’ve had opportunities to learn from volunteers hosting activities throughout the Aquarium. And if you’ve joined us for Aquarium After Hours, Splash! or other evening events, you’ve met our volunteer hosts who are there to ensure you have a great time while learning about marine life and supporting the Aquarium.', 'img/blogPost/8_2.jpg', '2020-11-23', 0, 0, 'Dolphin'),
(9, 22, 'OUR VISIT TO Aqua wonderland', 'img/blogPost/9_0.jpg', 't was so captivating to go through the tunnel. You can either walk or ride the mobile pathway. We chose to stand and ride so that we could look at all that was going on overhead. Take a peek below! It’s so fun to get so up and personal with the sea life.\r\n\r\nOf course there are a plethora of animals to peek at. We saw dolphins, otters, jellyfish, turtles… etc. The tanks are fascinating, and you never know what kind of animal just may happen to swim by. It was also fun to look at the penguins, and even the coral was beautiful! Take a peek at some of what we saw at the Aqua Wonderland below.', 'img/blogPost/9_1.jpg', ' Since the Aquarium opened in 1977, volunteers have contributed 1,777,000 hours of service in support of the Aquarium’s mission. In 2019 alone, 1,228 community members recorded more than 103,000 volunteer hours. We thank our volunteers every day for their service, but this week—which happens to be National Volunteer Week—we want to highlight the contributions of these hardworking ocean conservation heroes. We can’t wait to welcome them back when we’re able to reopen to the public!', 'img/blogPost/9_2.jpg', '2020-11-23', 0, 0, 'Dolphin');

-- --------------------------------------------------------

--
-- 資料表結構 `blog_mark`
--

DROP TABLE IF EXISTS `blog_mark`;
CREATE TABLE IF NOT EXISTS `blog_mark` (
  `blogMarkNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `blogNo` int(11) NOT NULL COMMENT '文章編號',
  PRIMARY KEY (`blogMarkNo`),
  KEY `blogNo` (`blogNo`),
  KEY `blog mark_ibfk_2` (`memNo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `blog_mark`
--

INSERT INTO `blog_mark` (`blogMarkNo`, `memNo`, `blogNo`) VALUES
(3, 21, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `blog_report`
--

DROP TABLE IF EXISTS `blog_report`;
CREATE TABLE IF NOT EXISTS `blog_report` (
  `blogReportNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章檢舉編號',
  `blogNo` int(11) NOT NULL COMMENT '文章編號',
  `memNo` int(11) NOT NULL COMMENT '檢舉會員編號',
  `blogReportReason` varchar(25) NOT NULL COMMENT '檢舉原因',
  `blogReportStatus` tinyint(1) NOT NULL DEFAULT '0' COMMENT '檢舉處理狀態(0:成功;1:駁回)',
  PRIMARY KEY (`blogReportNo`),
  KEY `memNo` (`memNo`),
  KEY `blogNo` (`blogNo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `blog_report`
--

INSERT INTO `blog_report` (`blogReportNo`, `blogNo`, `memNo`, `blogReportReason`, `blogReportStatus`) VALUES
(1, 1, 2, 'horny', 0),
(2, 1, 2, 'ugly', 0),
(3, 3, 5, 'ugly image', 0),
(4, 4, 21, 'weird', 1),
(5, 4, 22, 'irrelevant', 1),
(6, 7, 21, 'weird', 1),
(7, 7, 22, 'irrelevant', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `chatbot`
--

DROP TABLE IF EXISTS `chatbot`;
CREATE TABLE IF NOT EXISTS `chatbot` (
  `keywordsNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '關鍵字編號',
  `keywordsQuestion` varchar(255) NOT NULL COMMENT '關鍵字問題',
  `keywordsReply` varchar(255) NOT NULL COMMENT '關鍵字對應回答',
  `keywords` varchar(20) NOT NULL COMMENT '關鍵字',
  PRIMARY KEY (`keywordsNo`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `chatbot`
--

INSERT INTO `chatbot` (`keywordsNo`, `keywordsQuestion`, `keywordsReply`, `keywords`) VALUES
(1, 'Hello', 'Hello, Welcome to Aqua Wonderland!', 'Hello'),
(2, 'How many sections here?', 'There are four sections in Aqua Wonderland.', 'Area'),
(3, 'How to purchase tickets?', 'Please visit the ticket page and follow the guidance to purchase tickets.', 'Ticket'),
(4, 'I want to stay overnight!', 'Please visit ticket page and there is the details of overnight stay.', 'Night'),
(15, 'How to vote for dolphin?', 'You can nominate names for dolphins in vote page.', 'Vote'),
(16, 'How to get point?', 'You can win the points by either playing the game in homepage or post a blog in blog page! ', 'Point'),
(17, 'How can I support Aqua Wonderland?', 'You can browse the recovering status of each animals in Journal page, and adopting anyone of them. Once you adopted, you will receive a thank you card from Aqua Wonderland!', 'Adopt'),
(18, 'The thank you card is so beautiful! How can I get one?', 'Once you adopt aqua in Journal Page, you will have an opportunity to customize you own thank you card! ', 'Thankscard');

-- --------------------------------------------------------

--
-- 資料表結構 `journal`
--

DROP TABLE IF EXISTS `journal`;
CREATE TABLE IF NOT EXISTS `journal` (
  `jourNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '日誌編號',
  `aquaNo` int(11) NOT NULL COMMENT '動物編號',
  `jourStory` varchar(2000) DEFAULT NULL COMMENT '日誌標題',
  `jourContent` varchar(2000) NOT NULL COMMENT '日誌內容',
  `jourPic1` varchar(30) NOT NULL COMMENT '日誌照片1',
  `jourPic2` varchar(30) NOT NULL COMMENT '日誌照片2',
  `jourPic3` varchar(30) NOT NULL COMMENT '日誌照片3',
  `jourDate` date NOT NULL COMMENT '日誌日期',
  PRIMARY KEY (`jourNo`),
  KEY `journal_ibfk_1` (`aquaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `journal`
--

INSERT INTO `journal` (`jourNo`, `aquaNo`, `jourStory`, `jourContent`, `jourPic1`, `jourPic2`, `jourPic3`, `jourDate`) VALUES
(1, 1, 'Tony was found stranded and rescued near North Bay, and found to have two marks, one likely the result of a shark attack that had healed and the other a tumor, but it was in a more stable condition than he was found.', 'Tony was found stranded on a beach, she is extremely underweight. He was admitted to the hospital, sexed, weighed and measured.', 'a1.jpg', 'b1.jpg', 'c1.jpg', '2020-07-01'),
(2, 1, '', 'Tony lives up to his name and will rock and roll all over the place while being fed. Luckily for his care takers he is now in fish school which he enjoys much more than formula! ', 'a2.jpg', 'b2.jpg', 'c2.jpg', '2020-07-05'),
(3, 1, '', 'Tony is now in a small pool. He is competing well and loves to rest on his haul out, especially on a warm day!', 'a3.jpg', 'b3.jpg', 'c3.jpg', '2020-07-11'),
(4, 1, '', 'Tony likes to pretend that he’s never been fed. He is the most eager dolphin in his pool and always greets his caretakers at the pool entrance. He is very vocal and demands fish 24/7.', 'a4.jpg', 'b4.jpg', 'c4.jpg', '2020-07-15'),
(5, 1, '', 'Tony is as vocal as ever and easy to spot (or hear) in his pool. He is always the first one at the gate when his caretakers stop by with buckets of fish', 'a5.jpg', 'b5.jpg', 'c5.jpg', '2020-07-22'),
(6, 1, '', 'Tony spends most of his time swimming. He was much more active today, had a swim in an outdoor pool and staff observed his play with fish in the water.', 'a6.jpg', 'b6.jpg', 'c6.jpg', '2020-07-31'),
(7, 3, 'Zachary was taken into good care. Estimated to be about seven years old, he has been under intensive observation and treated with subcutaneous fluids, gastric protectants and antibiotics.', 'Zachary\'s first night at the rescue center. He was admitted to the hospital, sexed, weighed and measured. Her body temperature and a blood sample were taken as well.', 'a7.jpg', 'b7.jpg', 'c7.jpg', '2020-07-25'),
(8, 3, '', 'Zachary has not shown any interest in fish yet. Fluids are being administered, and he is being tube-fed. He has also been taking baths in his \"en-suite\" mini tub.', 'a8.jpg', 'b8.jpg', 'c8.jpg', '2020-07-31'),
(9, 3, '', 'Zachary has been quiet today and spent most of the day resting. Staff were able to run more diagnostic testing today to help evaluate his condition further.', 'a9.jpg', 'b9.jpg', 'c9.jpg', '2020-08-05'),
(10, 7, '', 'Marco seems to be responding to treatment. The plan is to slowly raise his body temperature over time. He is receiving fluids to treat dehydration.', 'a10.jpg', 'b10.jpg', 'c10.jpg', '2020-08-12'),
(11, 3, '', 'Zachary is gaining strength. He was much more active today, had a swim in an outdoor pool and staff observed his play with Marco in the water.', 'a11.jpg', 'b.11jpg', 'c11.jpg', '2020-08-12'),
(12, 5, 'Christy is an adult female dolphin with a scarred-up fin that we find traveling and socializing in big groups, primarily within the deeper regions.', 'Christy is described as a very \'sweet\' patient, but she\'s got a bad fin injury for which she is being treated.', 'a12.jpg', 'b12.jpg', 'c12.jpg', '2020-08-15'),
(13, 7, '', 'Marco showed no abnormalities. His favorite resting spot seems to be the roof of a kennel close to the heat lamp, where she can be seen for much of the day, all stretched out and visibly comfortable.', 'a13.jpg', 'b13.jpg', 'c13.jpg', '2020-08-18'),
(14, 3, '', 'Zachary continues to gain strength. His body temperature is slowly rising. His diet is now being supplemented with fish and we hope to see he gains weight soon.', 'a14.jpg', 'b14.jpg', 'c14.jpg', '2020-08-20'),
(15, 5, '', 'Christy had fin surgery today, and it was a success! When we checked in on her today, she was still recovering from the procedure. But we hope to have more pictures of her soon.', 'a15.jpg', 'b15.jpg', 'c15.jpg', '2020-07-20'),
(17, 7, 'Marco was the first to head straight for the ocean; he raced straight for the waves after just a short moment of hesitation.', 'Marco is spending shorter days outside because of the weather, but seems to be managing well indoors and outdoors.', 'a17.jpg', 'b17.jpg', 'c17.jpg', '2020-08-25'),
(18, 3, '', 'Zachary ate some herring, squid and capelin on his own today, which is a big step on his way to recovery!', 'a18.jpg', 'b18.jpg', 'c18.jpg', '2020-08-28'),
(19, 5, '', 'Christy is being housed in the comfort tent where we can make her most comfortable. She is recovering well from her fin and the surgical site is healing well. ', 'a19.jpg', 'b19.jpg', 'c19.jpg', '2020-08-28'),
(20, 8, 'Square lives up to her name and will rock and roll all over the place while being fed. Luckily for her care takers she is now in recover program!', 'Square is tiny and weighed only 15.65 when she was admitted, but she\'s alert and curious and seems to be doing well.', 'a20.jpg', 'b20.jpg', 'c20.jpg', '2020-08-30'),
(21, 7, '', 'Marco has had the chance to explore the largest pool on site for a couple of times. He looks a bit under-sized in that pool, but he seems to like the adventure of it.', 'a21.jpg', 'b21.jpg', 'c21.jpg', '2020-08-30'),
(23, 8, '', 'Square has had the chance to explore the largest pool on site for a couple of times. She looks a bit under-sized in that pool, but she seems to like the adventure of it.', 'a23.jpg', 'b23.jpg', 'c23.jpg', '2020-09-03'),
(24, 5, '', 'Christy has recovered well from her surgery and the surgical site is healing nicely. She clearly enjoys her swims and likes being misted with cool water.', 'a24.jpg', 'b24.jpg', 'c24.jpg', '2020-09-03'),
(25, 8, '', 'Staff hand-fed her while she was on her heating pad this morning, and she ate it all readily. ', 'a25.jpg', 'b25.jpg', 'c25.jpg', '2020-09-06'),
(26, 7, '', 'Marco is doing very well. Staff are very happy with his progress so far, and he is now spending much of his time in the largest pool.', 'a26.jpg', 'b26.jpg', 'c26.jpg', '2020-09-07'),
(28, 7, '', 'Marco is still getting used to a satellite tag he has been fitted with to track her movements following release.', 'a28.jpg', 'b28.jpg', 'c28.jpg', '2020-09-14'),
(29, 5, '', 'Chairty is doing great competing for fish with her friend Tony!!! Once she gets the final okay from the veterinary team, she will be flown to a safe release site.', 'a29.jpg', 'b29.jpg', 'c29.jpg', '2020-09-15'),
(30, 8, '', 'A staff favorite for sure, Square might be the sweetest turtle on site! She has made great progress in the training program!', 'a30.jpg', 'b30.jpg', 'c30.jpg', '2020-09-16'),
(32, 7, '', 'Marco is learning to groom himself! His teeth are also growing in quickly, and it\'s best to stay clear of them now!', 'a32.jpg', 'b32.jpg', 'c32.jpg', '2020-09-21'),
(33, 5, '', 'Christy looks great in her pre-release pool. She\'s gained quite a bit of weight since we last saw her, too!', 'a33.jpg', 'b33.jpg', 'c33.jpg', '2020-09-22'),
(35, 8, '', 'Square enjoys her extended swims! She is showing some improvement in training program!', 'a35.jpg', 'b35.jpg', 'c35.jpg', '2020-09-27'),
(36, 7, '', 'Marco is now weighing 6.7kg and continues to gain weight every day. His diet is now being supplemented with pieces of clam. And he has so much energy that he\'s keeping staff and volunteers on their toes around the clock. ', 'a36.jpg', 'b36.jpg', 'c36.jpg', '2020-09-30'),
(37, 8, '', 'Square will soon leave our facility after having spent a month in rehabilitation. She is still getting used to a satellite tag she has been fitted with to track her movements following release.', 'a37.jpg', 'b37.jpg', 'c37.jpg', '2020-10-05'),
(38, 12, '', 'Turtle No.12 is now having regular baths in a bigger tub outside his nursery where he is working on his swimming and diving skills.', 'a38.jpg', 'b38.jpg', 'c38.jpg', '2020-10-20'),
(39, 12, '', 'Turtle No.12 has been admitted to the rescue centre. He\'s tiny, hypothermic and in urgent need of some food, but, otherwise seems to be in rather good shape.', 'a39.jpg', 'b39.jpg', 'c39.jpg', '2020-10-25'),
(40, 12, '', 'Turtle No.12 has developed a huge appetite and is eagerly drinking all the formula he is given. That\'s a very encouraging sign!', 'a40.jpg', 'b40.jpg', 'c40.jpg', '2020-10-29'),
(41, 9, 'Dolphin No.9 was found stranded and rescued near North Bay. Staff are working to stabilize him, and he is receiving around-the-clock care.\r\n', 'Dolphin No.9 seems to be making good progress. He looks healthy, but is being treated with antibiotics for an infection, just in case. \r\n\r\n', 'a41.jpg', 'b41.jpg', 'c41.jpg', '2020-11-01'),
(42, 12, '', 'Turtle No.12 has been moved to a pre-release pool and is gaining weight steadily.\r\n\r\n', 'a42.jpg', 'b42.jpg', 'c42.jpg', '2020-11-04'),
(43, 9, '', 'Dolphin No.9 is doing very well. He\'s gained a lot of weight since being admitted to the rescue centre. He\'s made good progress and is looking very handsome!\r\n', 'a43.jpg', 'b43.jpg', 'c43.jpg', '2020-11-04'),
(44, 10, 'Whale No.10 has a cautious and reserved demeanor until she gets to know her surroundings or the people nearby. She tends to follow staffs\' lead, and forms a close bond with select members of her care team.', 'Whale No.10 has taken her first swim in the open water sanctuary home in Aqua Wonderland! She is feeding and acclimatizing well to the more natural surroundings as well as all of the outdoor elements. ', 'a44.jpg', 'b44.jpg', 'c44.jpg', '2020-11-07'),
(45, 11, 'Seal No.11 is a male seal, believed to be just 2 months old when he was rescued. He was discovered near West Bay.', 'Seal No.11 is tiny, hypothermic and in urgent need of some food, but, otherwise seems to be in a rather good shape.', 'a45.jpg', 'b45.jpg', 'c45.jpg', '2020-11-08'),
(46, 9, '', 'Dolphin No.9 is sure getting big! Him and his pool mate Tony are the best of friends and doing great swimming competation.', 'a46.jpg', 'b46.jpg', 'c46.jpg', '2020-11-08'),
(47, 16, 'Turtle No.16 is an adult male turtle was found alive but wounded on the hard coral rock bench on Bonaire’s east coast.', 'Turtle No.16 was entangled in a mass of fishing line, ship’s ropes and floats. The line was embedded in the flesh above the turtle’s front flippers.', 'a47.jpg', 'b47.jpg', 'c47.jpg', '2020-11-10'),
(48, 11, '', 'Seal No.11 lives up to his name and will rock and roll all over the place while being fed. Luckily for his care takers he is now in fish school which he enjoys much more than formula!\r\n\r\n', 'a48.jpg', 'b48.jpg', 'c48.jpg', '2020-11-10'),
(49, 15, 'Seal No.15 was rescued near East coast, has a ways to go in his rehabilitation process. He is bright and feisty and loves his swims, but hasn’t quite figured out how to eat fish yet!', 'Seal No.15 is eating fish on his own now and putting on some weight! He has demonstrated that he is confident eating fish on his own and that he can compete for food with other harbour seals. ', 'a49.jpg', 'b49.jpg', 'c49.jpg', '2020-11-10'),
(50, 10, '', 'Whale No.10 continues to do well and have settled into her temporary care pool following her epic journey.', 'a50.jpg', 'b50.jpg', 'c50.jpg', '2020-11-10'),
(51, 9, '', 'Dolphin No.9 is competing well in his pre-release pool. He enjoys sunbathing on the haul-outs and playing with the other dolphins.\r\n\r\n\r\n\r\n', 'a51.jpg', 'b51.jpg', 'c51.jpg', '2020-11-10'),
(52, 12, '', 'Turtle No.12 is back in \"Out of Quarantine\" for a moment as we need the pool and he isn\'t ready for a big pool yet.', 'a52.jpg', 'b52.jpg', 'c52.jpg', '2020-11-11'),
(53, 11, '', 'Seal No.11 has gained strength and is becoming more active, interacting with his environment and with toys. He is still being bottle-fed 12 times a day and is gaining weight.', 'a53.jpg', 'b53.jpg', 'c53.jpg', '2020-11-12'),
(54, 15, '', 'Seal No.15 has developed a huge appetite and is eagerly drinking all the formula he is given. That\'s a very encouraging sign!', 'a54.jpg', 'b54.jpg', 'c54.jpg', '2020-11-12'),
(55, 14, 'Whale No.14 is extremely curious and vocal. She makes a wide range of vocalizations to the beluga care team when she wants attention or to express herself.', 'Whale No.14 has taken her first swim in the open water sanctuary home in Aqua Wonderland! she is feeding and acclimatizing well to the more natural surroundings and the outdoor elements. \r\n\r\n', 'a55.jpg', 'b55.jpg', 'c55.jpg', '2020-11-12'),
(56, 12, '', 'Turtle No.12 has demonstrated that he is confident eating on his own He has been moved to a larger pool where he can further test and improve his skills.', 'a56.jpg', 'b56.jpg', 'c56.jpg', '2020-11-13'),
(57, 16, '', 'Turtle No.16 has gained strength and is becoming more active, interacting with his environment and with toys. Staff are working to stabilize him, and he is receiving around-the-clock care.', 'a57.jpg', 'b57.jpg', 'c57.jpg', '2020-11-13'),
(58, 15, '', 'Seal No.15 is gaining weight steadily. He is also incredibly patient and likes to take her time exploring her surroundings.', 'a58.jpg', 'b58.jpg', 'c58.jpg', '2020-11-13'),
(59, 9, '', 'Dolphin No.9 has finally gained more weight. She will move between pools as she progresses further and develops her skills until she reaches her release weight.', 'a59.jpg', 'b59.jpg', 'c59.jpg', '2020-11-13'),
(60, 11, '', 'Seal No.11 is still criminally adorable, eats and sleeps a lot ─ and every now and then interacts with his toys, of which there is an abundance these days!', 'a60.jpg', 'b60.jpg', 'c60.jpg', '2020-11-14'),
(61, 10, '', 'Whale No.10 wounds are healing well. She is very interested in anything new and often chooses to be the center of attention.', 'a61.jpg', 'b61.jpg', 'c61.jpg', '2020-11-14'),
(62, 14, '', 'As always, the health and well-being of Whale No.14 remains our top priority and based on her progress and the changing weather conditions, we have taken the decision that she will be moved to the sanctuary bay in spring 2021.', 'a62.jpg', 'b62.jpg', 'c62.jpg', '2020-11-14'),
(63, 16, '', 'Turtle No.16 is trying to groom himself a little bit these days, but while it looks really cute, it\'s not very effective yet...', 'a63.jpg', 'b63.jpg', 'c63.jpg', '2020-11-15'),
(64, 12, '', 'Turtle No.16 showed an increase in activity today. He was observed swimming on his own today and has shown an increase in appetite.', 'a64.jpg', 'b64.jpg', 'c64.jpg', '2020-11-16'),
(65, 11, '', 'Seal No.11 continues to do well and have settled into her temporary care pool following her epic journey.', 'a65.jpg', 'b65.jpg', 'c65.jpg', '2020-11-16'),
(66, 15, '', 'Seal No.15 has finally gained some weight ─ even if it\'s just a little. She is eating fish on her own now and needs very little encouragement. She isn\'t quite ready for feeds in her pool yet, but she\'ll get there...', 'a66.jpg', 'b66.jpg', 'c66.jpg', '2020-11-16'),
(67, 9, '', 'Dolphin No.0 is making very good progress. She\'s rather unremarkable in that she\'s not a troublemaker during feeds. She\'s healthy for the most part and gaining weight.', 'a67.jpg', 'b67.jpg', 'c67.jpg', '2020-11-16'),
(68, 11, '', 'Seal No.11 showed an increase in activity today. She is in a pre-release pool and will soon be ready for release!', 'a68.jpg', 'b68.jpg', 'c68.jpg', '2020-11-18'),
(69, 10, '', 'Whale No.10 is very vocal during meal time and she tells stories to her feeders through a series of growls and grunts.', 'a69.jpg', 'b69.jpg', 'c69.jpg', '2020-11-18'),
(70, 14, '', 'Whale No.14\'s wounds are healing well. She is slowly gaining weight and becoming a faster competitor at meal time.', 'a70.jpg', 'b70.jpg', 'c70.jpg', '2020-11-18'),
(71, 13, 'Dolphin No.13 is a child male dolphin with a scarred-up fin. Staff are carefully monitoring him with our expert team and veterinarians.', 'Dolphin No.13 has made steady progress and is clearly enjoying her big pool and the company. She spends a lot of time watching her neighbors in the pool next door...', 'a71.jpg', 'b71.jpg', 'c71.jpg', '2020-11-18'),
(72, 16, '', 'Turtle No.16 is eating foods on his own now and needs very little encouragement. He isn\'t quite ready for feeds in his pool yet, but he\'ll get there...', 'a72.jpg', 'b72.jpg', 'c72.jpg', '2020-11-19'),
(73, 15, '', 'Seal No.15 is back in \"Out of Quarantine\" for a moment as we need her pool and she isn\'t ready for a big pool yet.', 'a73.jpg', 'b73.jpg', 'c73.jpg', '2020-11-19'),
(74, 9, '', 'Dolphin No.9 seems to have settled in nicely. She was quite active today, alert and curious ─ all good signs!', 'a74.jpg', 'b74.jpg', 'c74.jpg', '2020-11-19'),
(75, 12, '', 'Turtle No.12 still has a ways to go in his rehabilitation process. He is bright and feisty and loves his swims, and also enjoy the sunshine.', 'a75.jpg', 'b75.jpg', 'c75.jpg', '2020-11-20'),
(76, 15, '', 'Seal No.15 has has been moved to a larger pool where he can further test and improve his skills.', 'a76.jpg', 'b76.jpg', 'c76.jpg', '2020-11-20'),
(77, 10, '', 'The expert team and the independent vets were with Whale No.10 throughout the move and said she is healthy and is feeding after the short trip from her landside care facility back to the sea.', 'a77.jpg', 'b77.jpg', 'c77.jpg', '2020-11-20'),
(78, 14, '', 'Whale No.14 is very vocal during meal time and she tells stories to her feeders through a series of growls and grunts.', 'a78.jpg', 'b78.jpg', 'c78.jpg', '2020-11-20'),
(79, 9, '', 'Dolphin No.9 has had the chance to explore the largest pool on site for a couple of times. She looks a bit under-sized in that pool, but she seems to like the adventure of it.', 'a79.jpg', 'b79.jpg', 'c79.jpg', '2020-11-20'),
(80, 13, '', 'Dolphin No.13 is doing very well. She is now in her bayside care pool and will need a short period of time to acclimatize to her new natural environment and the outdoor elements.', 'a80.jpg', 'b80.jpg', 'c80.jpg', '2020-11-20'),
(81, 16, '', 'Turtle No.16 showed an increase in activity today. He was observed grooming on his own today and has shown an increase in appetite.', 'a81.jpg', 'b81.jpg', 'c81.jpg', '2020-11-21'),
(82, 15, '', 'Seal No.15 is confident eating food on his own and that he can compete for food with other harbour seals. Staff are working with Fisheries to assess whether she meets the criteria for release.', 'a82.jpg', 'b82.jpg', 'c82.jpg', '2020-11-21'),
(83, 13, '', 'Dolphin No.13 is playing with her friend Christy. Around the time we took this picture, she was in the pool a lot, while Christy watched her from the rim of the pool, growling at her. \r\n\r\n', 'a83.jpg', 'b83.jpg', 'c83.jpg', '2020-11-21'),
(84, 15, '', 'Seal No.15 is eating entirely on his own now, and will soon graduate from fish school. Staff are very happy with her progress so far.', 'a84.jpg', 'b84.jpg', 'c84.jpg', '2020-11-22'),
(85, 10, '', 'We are carefully monitoring Whale No.10 with our expert care team and veterinarians and hope to announce their final release very soon.', 'a85.jpg', 'b85.jpg', 'c85.jpg', '2020-11-22'),
(86, 14, '', 'Whale No.14 has recovered well from her surgery and the surgical site is healing nicely. She clearly enjoys her swims and likes being misted with cool water.', 'a86.jpg', 'b86.jpg', 'c86.jpg', '2020-11-22'),
(87, 13, '', 'Dolphin No.13 stay with us has almost come to an end. In a few days, she\'ll leave the rescue centre to start her new life. Good luck!', 'a87.jpg', 'b87.jpg', 'c87.jpg', '2020-11-22'),
(88, 14, '', 'Whale No.14 has gained strength and is becoming more active and gaining weight, interacting with his environment and with his partner.', 'a88.jpg', 'b88.jpg', 'c88.jpg', '2020-11-23'),
(89, 16, '', 'Turtle No.16 showed an increase in activity today. He was observed swimming on his own today and has shown an increase in appetite.', 'a89.jpg', 'b89.jpg', 'c89.jpg', '2020-11-23'),
(90, 17, 'Dolphin No.17 is a child male dolphin with a scarred-up fin. Staff are carefully monitoring him with our expert team and veterinarians.', 'Dolphin No.17 has made steady progress and is clearly enjoying her big pool and the company. She spends a lot of time watching her neighbors in the pool next door...', 'a90.jpg', 'b90.jpg', 'c90.jpg', '2020-11-17'),
(91, 17, 'Dolphin No.17 is a child male dolphin with a scarred-up fin. Staff are carefully monitoring him with our expert team and veterinarians.', 'Dolphin No.17 has made steady progress and is clearly enjoying her big pool and the company. She spends a lot of time watching her neighbors in the pool next door...', 'a91.jpg', 'b91.jpg', 'c91.jpg', '2020-11-18'),
(92, 17, '', 'Dolphin No.17 has made steady progress and is clearly enjoying her big pool and the company. She spends a lot of time watching her neighbors in the pool next door...', 'a92.jpg', 'b92.jpg', 'c92.jpg', '2020-11-19'),
(93, 17, '', 'Dolphin No.17 has made steady progress and is clearly enjoying her big pool and the company. She spends a lot of time watching her neighbors in the pool next door...', 'a93.jpg', 'b93.jpg', 'c93.jpg', '2020-11-20');

-- --------------------------------------------------------

--
-- 資料表結構 `journal_message`
--

DROP TABLE IF EXISTS `journal_message`;
CREATE TABLE IF NOT EXISTS `journal_message` (
  `msgNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '留言編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `aquaNo` int(11) NOT NULL,
  `msgContent` varchar(255) NOT NULL COMMENT '留言內容',
  `msgTime` datetime NOT NULL COMMENT '留言時間',
  `msgStatus` varchar(10) NOT NULL COMMENT '留言狀態(0:顯示;1:隱藏)',
  PRIMARY KEY (`msgNo`),
  KEY `memNo` (`memNo`),
  KEY `aquaNo` (`aquaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `journal_message`
--

INSERT INTO `journal_message` (`msgNo`, `memNo`, `aquaNo`, `msgContent`, `msgTime`, `msgStatus`) VALUES
(1, 2, 1, 'I am so glad that Tony is doing well. I hate to see little critter suffer like that but he is in good hands now.', '2020-08-06 11:21:15', '0'),
(2, 3, 1, 'we love you Tony!! im so happy you’re doing well. <3', '2020-10-02 05:21:27', '0'),
(3, 4, 1, 'I adopted Tony, he is so cute.', '2020-10-09 05:21:27', '0'),
(4, 10, 3, 'You go Zachary! Keep drinking that formula and stay warm and cozy! We want to see you become a full size otter! I have a otter pup named Ollie who would love to see you!', '2020-10-10 11:21:15', '0'),
(5, 1, 3, 'So cute Zachary! Keep getting stronger!!', '2020-10-10 15:15:00', '0'),
(6, 8, 5, 'keep eating an grow strong', '2020-10-12 06:25:15', '0'),
(7, 1, 5, 'Christy, we are sending hugs from TX. I hope I get to meet you one day. I love you so much I’m going to pop.', '2020-10-16 20:27:00', '0'),
(8, 5, 16, 'May you thrive, no.16!', '2020-10-19 17:27:00', '0'),
(9, 1, 1, 'Such a lovelly creature ! Hugs ,love & kisses for Tony', '2020-10-19 22:33:00', '0'),
(10, 2, 7, 'Hey Marco! I\'ll keep my fingers crossed.', '2020-10-21 13:16:00', '0'),
(11, 1, 14, 'I am in love! no.14', '2020-10-21 15:19:00', '0'),
(12, 3, 3, 'Love you Zachary.', '2020-10-21 15:28:00', '0'),
(13, 5, 1, 'I would like to check on Tony the otter daily. What address would I go to to watch him?', '2020-10-21 17:33:00', '0'),
(14, 4, 5, 'She just so stinking cute. I love otters.', '2020-10-22 06:45:00', '0'),
(15, 4, 7, 'Marco tell us the world is getting sick.', '2020-10-22 08:18:00', '0'),
(16, 9, 7, 'I love Taylor Swift!', '2020-10-22 12:45:00', '0'),
(17, 16, 8, 'I’m rooting for you, Square! The team will take good care of you, little guy!', '2020-10-23 10:12:00', '0'),
(18, 17, 8, 'Dear Square, I hope you grow strong and continue to bring joy into our lives.', '2020-10-29 13:18:00', '0'),
(19, 13, 8, 'Happiness on Earth! … Thank you to the Staff for being such excellent caregivers to this wonderfully brave little otter pup. We love Square!', '2020-10-30 13:24:00', '0'),
(20, 10, 7, 'Happy to see Marco getting better and better.', '2020-10-26 14:18:00', '0'),
(22, 2, 8, 'Love this live stream always look forward to seeing Square', '2020-10-28 18:24:00', '0'),
(23, 16, 1, 'Thank you very much for taking such good care of him! I look forward to visiting Tony one of these days. ', '2020-10-23 20:23:00', '0'),
(24, 17, 5, 'Aww what a joy to watch Joey. Keep up the good work. Thanks to all the staff that take good care of Christy.', '2020-10-23 20:27:00', '0'),
(25, 13, 5, 'laaaaa', '2020-10-24 06:21:15', '1'),
(26, 1, 9, 'we love you no.9!! I\'m so happy you’re doing well. <3', '2020-10-28 05:21:27', '0'),
(27, 4, 9, 'I adopted no.9, he is so cute.', '2020-10-27 08:21:27', '0'),
(28, 17, 9, 'Such a lovelly creature ! Hugs ,love & kisses for Tony', '2020-10-26 11:33:00', '0'),
(29, 7, 9, 'I would like to check on no.9 the otter daily. What address would I go to to watch him?', '2020-10-25 17:37:00', '0'),
(30, 16, 9, 'håhhhhhhhachama~<3<3<3\r\nhhhhhhhhachama~<3<3<3\r\nhhhhhhhhachama~<3<3<3\r\nI love vTuber', '2020-11-03 20:23:00', '0'),
(31, 10, 11, 'You go no.11! Keep drinking that formula and stay warm and cozy! We want to see you become a full size otter! I have a otter pup named Ollie who would love to see you!', '2020-10-26 11:21:15', '0'),
(32, 2, 11, 'So cute no11! Keep getting stronger!!', '2020-10-29 15:15:00', '0'),
(33, 1, 11, 'May you thrive, no.11!', '2020-10-30 17:27:00', '0'),
(34, 3, 11, 'Love you no.11.', '2020-10-31 15:28:00', '0'),
(35, 8, 10, 'keep eating an grow strong', '2020-11-03 06:25:15', '0'),
(36, 1, 10, 'Christy, we are sending hugs from TX. I hope I get to meet you one day. I love you so much I’m going to pop.', '2020-11-02 13:27:00', '0'),
(37, 4, 10, 'She just so stinking cute. I love otters.', '2020-11-04 06:45:00', '0'),
(38, 17, 10, 'Aww what a joy to watch Joey. Keep up the good work. Thanks to all the staff that take good care of Christy.', '2020-11-05 20:27:00', '0'),
(39, 5, 15, 'I looooooove no.15! He is so, so adorable! He makes me so happy, all my problems disappear when I check his live stream <3 <3', '2020-10-30 13:16:00', '0'),
(40, 1, 12, 'I am in love!', '2020-10-30 15:19:00', '0'),
(41, 15, 12, 'No.12 is the best baby boy just love him an the caretakers doing a wonderful job', '2020-10-31 08:18:00', '0'),
(42, 8, 12, 'Thank you all for saving no.12, especially the person that found him! You all are awesome. Joey you are in the best of care and are loved all over the world ! ', '2020-11-01 12:45:00', '0'),
(43, 16, 12, 'Your so precious! So thankful for the kind person who found you and everyone who is caring for you! Grow strong Marco! ', '2020-11-02 14:18:00', '0'),
(44, 7, 12, 'I adopted you yesterday, no.12. It will take a lot of us helping but we can do it. Grow!', '2020-11-03 17:18:00', '0'),
(45, 16, 13, 'I’m rooting for you, no.12! The team will take good care of you, little guy!', '2020-11-01 10:12:00', '0'),
(46, 17, 13, 'Dear no.12, I hope you grow strong and continue to bring joy into our lives.', '2020-11-01 13:18:00', '0'),
(47, 13, 13, 'Happiness on Earth! … Thank you to the Staff for being such excellent caregivers to this wonderfully brave little otter pup. We love Square!', '2020-11-01 13:24:00', '0'),
(48, 1, 13, 'Love this live stream always look forward to seeing Square', '2020-11-01 18:24:00', '0'),
(49, 2, 14, 'I am so glad that no.14 is doing well. I hate to see little critter suffer like that but he is in good hands now.', '2020-10-22 08:21:15', '0'),
(50, 10, 14, 'You go no.14! Keep drinking that formula and stay warm and cozy! We want to see you become a full size otter! I have a otter pup named Ollie who would love to see you!', '2020-10-23 11:21:15', '0'),
(51, 8, 15, 'keep eating an grow strong', '2020-10-31 15:25:15', '0'),
(52, 1, 15, 'Do the great job, Joey!, keep fighting.', '2020-11-01 17:16:00', '0'),
(53, 16, 16, 'I’m rooting for you, no.16! The team will take good care of you, little guy!', '2020-10-20 10:12:00', '0'),
(54, 7, 16, 'I would like to check on no.16 the otter daily. What address would I go to to watch him?', '2020-10-21 17:37:00', '0'),
(55, 1, 13, 'no.13 how\'s it going?', '2020-11-09 14:11:03', '0'),
(56, 1, 13, 'hihi', '2020-11-10 14:19:06', '0'),
(57, 3, 13, 'I hope a speedy recovery for you, no.13...', '2020-11-11 14:26:09', '0'),
(58, 5, 13, 'Good luck and get well, no.13.', '2020-11-11 17:20:13', '0'),
(59, 7, 13, 'Happy New Year!', '2020-11-12 14:11:23', '0'),
(60, 9, 13, 'Good luck Joey! You are in good hands.', '2020-11-13 14:33:39', '0'),
(61, 11, 13, 'Hi, no.13, it\'s a long, slow recovery but wishing you the best!', '2020-11-13 15:37:14', '0'),
(62, 13, 13, 'Everyone at Aqua Wonderland is pulling for you, get better soon!', '2020-11-15 15:37:34', '0'),
(63, 15, 13, 'Get well soon no.13', '2020-11-16 15:37:50', '0'),
(66, 2, 1, 'I would like to suggest dolphin aquarian need to place more garbage can!', '2020-10-09 05:21:27', '0'),
(68, 10, 1, 'Tony is the cutest dolphin I have ever seen!', '2020-10-21 17:33:00', '0'),
(69, 10, 1, 'Dear Tony, very glad to see you getting healthier and healthier.', '2020-10-21 17:33:00', '0'),
(70, 14, 1, 'We really should protect dolphin, protect the environment.', '2020-10-19 22:33:00', '0'),
(71, 10, 1, 'Are you looking for the 2ed-hand car? quickly connect me. ', '2020-10-21 17:33:00', '0'),
(72, 2, 3, 'Hey Zachary, do the great job!', '2020-10-10 11:21:15', '0'),
(73, 11, 3, 'Zachary is so cute that I will definitely go back to see him next weekend!', '2020-10-10 15:15:00', '0'),
(74, 14, 3, 'Zachary is the cutest dolphin I have ever seen!', '2020-10-21 15:28:00', '0'),
(75, 5, 3, 'Does anyone know when Zachary will be release?', '2020-10-10 11:21:15', '0'),
(76, 7, 3, 'I\'d like to suggest seal aquarium need to have more Propaganda to visitors not use flash when take pictures.', '2020-10-10 15:15:00', '0'),
(77, 9, 3, 'An apple a day keeps the doctor away.', '2020-10-21 15:28:00', '0'),
(78, 12, 3, 'Zachary looks healthier than before.', '2020-10-21 15:28:00', '0'),
(79, 2, 5, 'keep eating an grow strong', '2020-10-12 06:25:15', '0'),
(80, 19, 5, 'Christy, you are so brave to fight the disease. ', '2020-10-16 20:27:00', '0'),
(81, 20, 5, 'Christy remind us should reduce to use plastic.', '2020-10-22 06:45:00', '0'),
(82, 9, 5, 'The early birds catches the worm.', '2020-10-23 20:27:00', '0'),
(83, 2, 5, 'laaaaa', '2020-10-24 06:21:15', '1'),
(84, 11, 5, 'I like spider man!', '2020-10-24 06:21:15', '1'),
(85, 1, 7, 'Let\'s adopt Marco to let it back to the sea quickly!', '2020-10-21 13:16:00', '0'),
(86, 11, 7, 'I saw aquarium feeding fish to Marco last week.', '2020-10-22 08:18:00', '0'),
(87, 18, 7, 'Luckily for Macro be send to Aqua Wonderland.', '2020-10-23 12:45:00', '0'),
(88, 19, 7, 'Where does everyone go during Christmas vacation?', '2020-10-23 14:18:00', '0'),
(89, 17, 7, 'Does anyone know what is Marco\'s favorite food?', '2020-10-24 12:45:00', '0'),
(90, 3, 7, 'Marco is so cute!', '2020-10-25 17:18:00', '0'),
(91, 1, 8, 'Square is very personality! ', '2020-10-24 10:12:00', '0'),
(92, 3, 8, 'My kids told me he plans to save $100 every month for Square! ', '2020-10-27 13:18:00', '0'),
(93, 5, 8, 'Love to see Square getting better.', '2020-10-25 13:24:00', '0'),
(94, 7, 8, 'I don\'t like bitter gourd!', '2020-10-26 18:24:00', '0'),
(95, 8, 8, 'Square happy birthday!!', '2020-10-23 13:18:00', '0'),
(96, 10, 8, 'So lucky to see Square eating food!', '2020-10-23 18:24:00', '0'),
(97, 20, 9, 'Very appreciate Aqua Wonderland, you guys doing the great job!', '2020-11-01 20:23:00', '0'),
(98, 10, 9, 'Hey buddy, please eat more, please...', '2020-10-30 17:37:00', '0'),
(99, 15, 9, 'Really amazing to see you getting better!', '2020-10-29 11:33:00', '0'),
(100, 3, 9, 'My neighbor is so nosy...', '2020-11-02 08:21:27', '0'),
(101, 9, 9, 'Sweet heart~ hope you go back to the sea soon~', '2020-10-31 05:21:27', '0'),
(102, 2, 10, 'Do we need to wear mask when into the whale aquarium?', '2020-11-07 20:27:00', '0'),
(103, 3, 10, 'It\'s so sad to see no.10 get injured...', '2020-11-01 06:45:00', '0'),
(104, 19, 10, 'I might adopt no.10 to help it have more better medical resources.', '2020-10-31 13:27:00', '0'),
(105, 14, 10, 'There is a garage auction in recently, does anyone interesting?', '2020-10-30 06:25:15', '0'),
(106, 7, 10, 'Don\'t cry for me Argentina~~', '2020-10-29 06:45:00', '0'),
(107, 5, 10, 'Oh my goodness such a cuitie, no.10!', '2020-11-06 20:27:00', '0'),
(108, 17, 11, 'Keep fighting Joey, It\'s going to be a long journal. Praying for you~', '2020-10-27 15:28:00', '0'),
(109, 1, 11, 'Feel regret you lost your mom...but luckily you have good care in Aqua Wonderland.', '2020-11-01 15:28:00', '0'),
(110, 6, 11, 'Keep strong no.11', '2020-11-04 15:28:00', '0'),
(111, 5, 11, 'Keep fighting no.11, adopted.', '2020-11-03 15:28:00', '0'),
(112, 4, 11, 'Seal meat looks yummy..', '2020-10-27 15:28:00', '0'),
(113, 20, 11, 'Thank you Auqa Wonderland offer good care for no.11.', '2020-11-02 15:28:00', '0'),
(114, 2, 12, 'How adorable, Joey!', '2020-11-08 15:19:00', '0'),
(115, 13, 12, 'No.12 you give me courage to have positive attitude to face the world. ', '2020-11-07 08:18:00', '0'),
(116, 6, 12, 'I love bubble milk tea!', '2020-11-06 12:45:00', '0'),
(117, 18, 12, 'Merry Christmas!!', '2020-11-05 14:18:00', '0'),
(118, 20, 12, 'Dear no.12, you get well and soon you will be back to your home.', '2020-11-04 17:18:00', '0'),
(119, 17, 13, 'I love no.13, I am tracking it journal regularly.', '2020-11-21 21:21:53', '0'),
(120, 19, 13, 'håhhhhhhhachama~<3<3<3\r\nhhhhhhhhachama~<3<3<3\r\nhhhhhhhhachama~<3<3<3\r\nI love vTuber', '2020-11-22 21:21:51', '0'),
(121, 4, 14, 'I would like to fight with mom for more allowance.', '2020-09-24 15:19:00', '0'),
(122, 6, 14, 'Hey buddy, glad you getting better, praying for you.', '2020-10-25 08:21:15', '0'),
(123, 8, 14, 'No.14 tell us we have to face sea pollution issue.', '2020-10-26 11:21:15', '0'),
(124, 10, 14, 'I have adopted for no.14. I wish I can do more.', '2020-10-27 11:21:15', '0'),
(125, 4, 14, 'Does anyone want to date with me???', '2020-10-28 15:19:00', '0'),
(126, 6, 14, 'No14. is adorable! please adopt it.', '2020-10-29 08:21:15', '0'),
(127, 8, 14, 'We need to protect Whale, protect sea.', '2020-10-30 11:21:15', '0'),
(128, 2, 15, 'My dad yelled at me yesterday....', '2020-11-04 13:16:00', '0'),
(129, 3, 15, 'I hate dog.', '2020-11-05 15:25:15', '0'),
(130, 9, 15, 'Joey, eat more, sleep more and get more healthier.', '2020-11-06 17:16:00', '0'),
(131, 1, 15, 'Hi, no.15, you looks great recently! keep growing.', '2020-11-03 17:16:00', '0'),
(132, 10, 15, 'We need to adopt Aqua Wonderland to save more creature...', '2020-11-02 13:16:00', '0'),
(133, 12, 15, 'I can see no.15 do its effort to fight the diease. praying for you...', '2020-11-05 15:25:15', '0'),
(134, 14, 15, 'You are quickly go home, no.15.', '2020-11-06 17:16:00', '0'),
(135, 1, 16, 'I plan adopt amount of money for no.16 every month.', '2020-10-22 17:27:00', '0'),
(136, 2, 16, 'No.16 is so cute that worth me to make adoption.', '2020-10-23 10:12:00', '0'),
(137, 6, 16, 'I know you are suffer huge challenge, no.16. everything will goes fine.', '2020-10-24 17:37:00', '0'),
(138, 11, 16, 'It is please to see no.16 have progress.', '2020-10-25 17:37:00', '0'),
(139, 13, 16, 'I want to eat Mac Donald.', '2020-10-26 17:27:00', '0'),
(140, 15, 16, 'No.16 fighting! You are almost home!', '2020-10-27 10:12:00', '0'),
(141, 20, 16, 'I pray everyone adopt for no.16. it needs help!', '2020-10-28 17:37:00', '0'),
(142, 1, 15, '123456', '2020-11-12 18:42:06', '0'),
(143, 21, 9, 'so brave', '2020-11-23 09:27:39', '0'),
(144, 22, 9, 'good', '2020-11-23 09:27:40', '0');

-- --------------------------------------------------------

--
-- 資料表結構 `journal_message_report`
--

DROP TABLE IF EXISTS `journal_message_report`;
CREATE TABLE IF NOT EXISTS `journal_message_report` (
  `msgReportNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '留言檢舉編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `aquaNo` int(11) NOT NULL COMMENT '動物編號',
  `msgNo` int(11) NOT NULL COMMENT '留言編號',
  `msgReportStatus` tinyint(1) NOT NULL COMMENT '留言檢舉裝態(0:成功;1:駁回)',
  `msgReportReason` varchar(11) NOT NULL COMMENT '留言檢舉原因',
  `msgReportDate` date NOT NULL COMMENT '留言檢舉日期',
  PRIMARY KEY (`msgReportNo`),
  KEY `memNo` (`memNo`),
  KEY `msgNo` (`msgNo`),
  KEY `aquaNo` (`aquaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `journal_message_report`
--

INSERT INTO `journal_message_report` (`msgReportNo`, `memNo`, `aquaNo`, `msgNo`, `msgReportStatus`, `msgReportReason`, `msgReportDate`) VALUES
(1, 22, 9, 30, 1, 'irrelevant', '2020-11-23'),
(2, 21, 9, 30, 1, 'weird', '2020-11-23');

-- --------------------------------------------------------

--
-- 資料表結構 `manager`
--

DROP TABLE IF EXISTS `manager`;
CREATE TABLE IF NOT EXISTS `manager` (
  `mgrNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理員編號',
  `mgrName` varchar(20) NOT NULL COMMENT '管理員名稱',
  `mgrId` varchar(25) NOT NULL COMMENT '管理員帳號',
  `mgrPsw` varchar(25) NOT NULL COMMENT '管理員密碼',
  `mgrStatus` tinyint(1) NOT NULL COMMENT '管理員狀態(0:正常;1:停權)',
  PRIMARY KEY (`mgrNo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `manager`
--

INSERT INTO `manager` (`mgrNo`, `mgrName`, `mgrId`, `mgrPsw`, `mgrStatus`) VALUES
(1, 'Marco', 'Marco', 'ticket', 0),
(2, 'Square', 'Square', 'backend', 0),
(3, 'Tony', 'Tony', 'index', 0),
(4, 'Zachary', 'Zachary', 'blog', 0),
(5, 'Christy', 'Christy', 'journal', 0),
(6, 'Irene', 'Irene', 'tour', 0),
(7, 'Kira', 'Kira', 'vote', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (
  `memNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '會員編號',
  `memName` varchar(20) NOT NULL COMMENT '會員姓名',
  `memId` varchar(25) NOT NULL COMMENT '會員帳號',
  `memPsw` varchar(25) NOT NULL COMMENT '會員密碼',
  `memEmail` varchar(25) NOT NULL COMMENT '會員mail',
  `memSex` varchar(1) NOT NULL COMMENT '會員性別',
  `memPhone` varchar(11) NOT NULL COMMENT '會員電話',
  `memBirth` date NOT NULL COMMENT '會員生日',
  `memPic` varchar(100) NOT NULL COMMENT '會員照片',
  `memStatus` tinyint(1) NOT NULL COMMENT '會員狀態(0:正常;1:停權)',
  `point` int(11) NOT NULL COMMENT '點數積分',
  PRIMARY KEY (`memNo`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `member`
--

INSERT INTO `member` (`memNo`, `memName`, `memId`, `memPsw`, `memEmail`, `memSex`, `memPhone`, `memBirth`, `memPic`, `memStatus`, `point`) VALUES
(1, 'Mark', 'Mark123', 'Mark123', 'Mark123@gmail.com', 'M', '0912345678', '1989-04-09', 'image/memPic/image1.jpg', 0, 1500),
(2, 'Amy', 'Amy123', 'Amy456', 'Amy@gmail.com', 'F', '0932980766', '1991-04-01', 'image/memPic/image2.jpg', 0, 1500),
(3, 'Ben', 'Ben123', 'Ben456', 'Ben123@gmail.com', 'M', '0912547870', '1993-08-10', 'image/memPic/image3.jpg', 0, 0),
(4, 'Candy', 'Candy123', 'Candy456', 'Candy@gmail.com', 'F', '0912345689', '1988-09-03', 'image/memPic/image4.jpg', 0, 1500),
(5, 'Eddie', 'Eddie123', 'Eddie456', 'Eddie123@gmail.com', 'M', '0912345639', '1984-11-15', 'image/memPic/image5.jpg', 0, 1510),
(6, 'Alex', 'Alex123', 'Alex456', 'Alex@gmail.com', 'M', '0919776543', '1995-06-22', 'image/memPic/image6.jpg', 1, 0),
(7, 'Denny', 'Denny123', 'Denny456', 'Denny@gmail.com', 'M', '0918342875', '1988-10-04', 'image/memPic/image7.jpg', 0, 1000),
(8, 'Annie', 'Annie123', 'Annie456', 'Annie@gmail.com', 'F', '0988456093', '1976-07-21', 'image/memPic/image8.jpg', 0, 1000),
(9, 'Liam', 'Liam123', 'Liam123', 'Liam@gmail.com', 'M', '0912345678', '1995-04-05', 'image/memPic/image9.jpg', 0, 0),
(10, 'Oliver', 'Oliver123', 'Oliver456', 'Oliver@gmail.com', 'M', '0932980766', '1979-08-08', 'image/memPic/image10.jpg', 0, 1000),
(11, 'Michael', 'Michael123', 'Michael456', 'Michael@gmail.com', 'M', '0912547870', '1996-10-23', 'image/memPic/image11.jpg', 1, 0),
(12, 'Avery', 'Avery123', 'Avery456', 'Avery@gmail.com', 'F', '0912345633', '1965-07-13', 'image/memPic/image12.jpg', 0, 1500),
(13, 'Layla', 'Layla123', 'Layla456', 'Layla@gmail.com', 'F', '0912345634', '1978-10-19', 'image/memPic/image13.jpg', 0, 1000),
(14, 'Luke', 'Luke123', 'Luke456', 'Luke@gmail.com', 'M', '0919776533', '1995-04-10', 'image/memPic/image14.jpg', 1, 0),
(15, 'Chloe', 'Chloe123', 'Chloe456', 'Chloe@gmail.com', 'F', '0918342875', '1988-10-22', 'image/memPic/image15.jpg', 0, 0),
(16, 'Luna', 'Luna123', 'Luna456', 'Luna@gmail.com', 'F', '0988456093', '1976-06-10', 'image/memPic/image16.jpg', 0, 1000),
(17, 'Amelia', 'Amelia123', 'Amelia456', 'Amelia@gmail.com', 'F', '0912345439', '1988-09-21', 'image/memPic/image17.jpg', 0, 1500),
(18, 'Aiden', 'Aiden123', 'Aiden456', 'Aiden@gmail.com', 'M', '0963342873', '1988-06-14', 'image/memPic/image18.jpg', 0, 2000),
(19, 'Ethan', 'Ethan123', 'Ethan123', 'Ethan@gmail.com', 'M', '09323454578', '1995-06-23', 'image/memPic/image19.jpg', 1, 0),
(20, 'Ava', 'Ava123', 'Ava456', 'Ava@gmail.com', 'F', '0912347638', '1978-12-16', 'image/memPic/image20.jpg', 0, 500),
(21, 'Marco', 'Marco123', '123456', 'Marco@gmail.com', 'M', '0945682588', '2012-07-23', 'image/memPic/demo2.jpg', 0, 790),
(22, 'ann', 'ann123', 'ann123', 'ann@gmail.com', 'F', '0988765432', '2020-11-02', 'image/memPic/demo1.jpg', 1, 950),
(23, '111111', '111111', '111111', '111111@11111.com', 'M', '1111111111', '2020-11-01', 'image/memPic/css.png', 0, 500);

-- --------------------------------------------------------

--
-- 資料表結構 `night_info`
--

DROP TABLE IF EXISTS `night_info`;
CREATE TABLE IF NOT EXISTS `night_info` (
  `areaNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '區域編號',
  `areaCapacity` int(11) NOT NULL COMMENT '容納人數',
  `areaPrice` int(11) NOT NULL COMMENT '區域價格',
  `areaType` varchar(25) NOT NULL,
  PRIMARY KEY (`areaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `night_info`
--

INSERT INTO `night_info` (`areaNo`, `areaCapacity`, `areaPrice`, `areaType`) VALUES
(1, 15, 100, 'Dolphin House'),
(2, 10, 90, 'Whale House'),
(3, 20, 80, 'Seal House'),
(4, 15, 85, 'Turtle House');

-- --------------------------------------------------------

--
-- 資料表結構 `night_order`
--

DROP TABLE IF EXISTS `night_order`;
CREATE TABLE IF NOT EXISTS `night_order` (
  `nightOrderNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '夜宿訂單編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `nightOrderDate` date NOT NULL COMMENT '夜宿訂購日期',
  `nightTotalPrice` int(11) NOT NULL COMMENT '夜宿訂單總額',
  PRIMARY KEY (`nightOrderNo`),
  KEY `memNo` (`memNo`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `night_order`
--

INSERT INTO `night_order` (`nightOrderNo`, `memNo`, `nightOrderDate`, `nightTotalPrice`) VALUES
(1, 2, '2020-10-01', 200),
(2, 3, '2020-10-05', 180),
(3, 4, '2020-10-13', 160),
(4, 5, '2020-10-15', 170),
(5, 5, '2020-11-17', 3420),
(6, 5, '2020-11-17', 2655),
(7, 5, '2020-11-17', 2010),
(8, 5, '2020-11-17', 90),
(9, 5, '2020-11-17', 850),
(10, 1, '2020-11-17', 850),
(11, 1, '2020-11-18', 480),
(12, 1, '2020-11-18', 270),
(13, 1, '2020-11-18', 340),
(14, 1, '2020-11-18', 800),
(15, 1, '2020-11-19', 360),
(16, 5, '2020-11-20', 4335),
(17, 5, '2020-11-20', 5275),
(18, 1, '2020-11-23', 5005),
(19, 1, '2020-11-23', 3235),
(20, 1, '2020-11-23', 1470),
(21, 1, '2020-11-23', 2905),
(22, 1, '2020-11-23', 1225),
(23, 1, '2020-11-23', 3705),
(24, 1, '2020-11-23', 1405),
(25, 21, '2020-11-23', 400);

-- --------------------------------------------------------

--
-- 資料表結構 `night_order_list`
--

DROP TABLE IF EXISTS `night_order_list`;
CREATE TABLE IF NOT EXISTS `night_order_list` (
  `nightItemNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '夜宿明細編號',
  `nightOrderNo` int(11) NOT NULL COMMENT '夜宿訂單編號',
  `areaNo` int(11) NOT NULL COMMENT '區域編號',
  `nightPerson` int(11) NOT NULL COMMENT '夜宿訂購人數',
  `nightListPrice` int(11) NOT NULL COMMENT '夜宿訂單金額',
  `nightDate` date NOT NULL COMMENT '入住日期',
  PRIMARY KEY (`nightItemNo`),
  KEY `nightOrderNo` (`nightOrderNo`),
  KEY `areaNo` (`areaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `night_order_list`
--

INSERT INTO `night_order_list` (`nightItemNo`, `nightOrderNo`, `areaNo`, `nightPerson`, `nightListPrice`, `nightDate`) VALUES
(1, 1, 1, 2, 200, '2020-10-05'),
(2, 2, 2, 2, 180, '2020-10-19'),
(3, 3, 3, 2, 160, '2020-10-26'),
(4, 4, 4, 2, 170, '2020-11-02'),
(5, 5, 4, 6, 510, '2020-11-17'),
(6, 5, 1, 9, 900, '2020-11-17'),
(7, 5, 3, 15, 1200, '2020-11-17'),
(8, 5, 2, 9, 810, '2020-11-17'),
(9, 6, 1, 10, 1000, '2020-11-18'),
(10, 6, 4, 3, 255, '2020-11-18'),
(11, 6, 3, 13, 1040, '2020-11-18'),
(12, 6, 2, 4, 360, '2020-11-18'),
(13, 7, 1, 4, 400, '2020-11-19'),
(14, 7, 2, 4, 360, '2020-11-19'),
(15, 7, 3, 5, 400, '2020-11-19'),
(16, 7, 4, 10, 850, '2020-11-19'),
(17, 8, 2, 1, 90, '2020-11-17'),
(18, 9, 4, 10, 850, '2020-11-21'),
(19, 10, 1, 4, 400, '2020-11-18'),
(20, 10, 2, 5, 450, '2020-11-18'),
(21, 11, 3, 6, 480, '2020-11-18'),
(22, 12, 1, 1, 100, '2020-11-18'),
(23, 12, 2, 1, 90, '2020-11-18'),
(24, 12, 3, 1, 80, '2020-11-18'),
(25, 13, 4, 4, 340, '2020-11-19'),
(26, 14, 3, 10, 800, '2020-11-25'),
(27, 15, 1, 2, 200, '2020-11-19'),
(28, 15, 3, 2, 160, '2020-11-19'),
(29, 16, 1, 15, 1500, '2020-11-21'),
(30, 16, 2, 9, 810, '2020-11-21'),
(31, 16, 4, 5, 425, '2020-11-21'),
(32, 16, 3, 20, 1600, '2020-11-21'),
(33, 17, 1, 15, 1500, '2020-11-22'),
(34, 17, 2, 10, 900, '2020-11-22'),
(35, 17, 3, 20, 1600, '2020-11-22'),
(36, 17, 4, 15, 1275, '2020-11-22'),
(37, 18, 1, 14, 1400, '2020-11-23'),
(38, 18, 2, 10, 900, '2020-11-23'),
(39, 18, 3, 20, 1600, '2020-11-23'),
(40, 18, 4, 13, 1105, '2020-11-23'),
(41, 19, 1, 10, 1000, '2020-11-24'),
(42, 19, 2, 5, 450, '2020-11-24'),
(43, 19, 4, 5, 425, '2020-11-24'),
(44, 19, 3, 17, 1360, '2020-11-24'),
(45, 20, 1, 5, 500, '2020-11-25'),
(46, 20, 3, 10, 800, '2020-11-25'),
(47, 20, 4, 2, 170, '2020-11-25'),
(48, 21, 2, 3, 270, '2020-11-26'),
(49, 21, 1, 12, 1200, '2020-11-26'),
(50, 21, 4, 15, 1275, '2020-11-26'),
(51, 21, 3, 2, 160, '2020-11-26'),
(52, 22, 1, 3, 300, '2020-11-27'),
(53, 22, 3, 2, 160, '2020-11-27'),
(54, 22, 4, 9, 765, '2020-11-27'),
(55, 23, 2, 2, 180, '2020-11-28'),
(56, 23, 1, 14, 1400, '2020-11-28'),
(57, 23, 3, 17, 1360, '2020-11-28'),
(58, 23, 4, 9, 765, '2020-11-28'),
(59, 24, 4, 13, 1105, '2020-11-29'),
(60, 24, 1, 3, 300, '2020-11-29'),
(61, 25, 1, 4, 400, '2020-11-24');

-- --------------------------------------------------------

--
-- 資料表結構 `nominate`
--

DROP TABLE IF EXISTS `nominate`;
CREATE TABLE IF NOT EXISTS `nominate` (
  `nameNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '提名編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `aquaNo` int(11) NOT NULL COMMENT '動物編號',
  `nomName` varchar(25) NOT NULL COMMENT '提名名稱',
  `votedNum` int(11) DEFAULT NULL COMMENT '名稱得票數',
  `nomStatus` tinyint(1) NOT NULL COMMENT '提名審核(0:未審;1:已審)',
  PRIMARY KEY (`nameNo`),
  KEY `memNo` (`memNo`),
  KEY `aquaNo` (`aquaNo`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `nominate`
--

INSERT INTO `nominate` (`nameNo`, `memNo`, `aquaNo`, `nomName`, `votedNum`, `nomStatus`) VALUES
(1, 3, 9, 'Parker', 34, 0),
(2, 6, 9, 'John', 54, 0),
(3, 7, 9, 'Aaron', 12, 1),
(4, 5, 9, 'Larry', 10, 1),
(5, 17, 10, 'Addison', 66, 0),
(6, 9, 10, 'Leah', 43, 0),
(7, 11, 10, 'Anna', 9, 1),
(8, 20, 10, 'Aubrey', 17, 1),
(9, 3, 11, 'Willow', 62, 0),
(10, 6, 11, 'Amelia', 44, 0),
(11, 7, 11, 'Zoe', 31, 1),
(12, 5, 11, 'Stella', 12, 1),
(13, 17, 12, 'Aria', 54, 0),
(14, 9, 12, 'Avery', 32, 0),
(15, 11, 12, 'Sofia', 8, 1),
(16, 4, 12, 'Ella', 20, 1),
(17, 3, 10, 'Lucy', 25, 1),
(18, 3, 12, 'Emily', 11, 1),
(19, 4, 1, 'Tony', 88, 1),
(20, 18, 3, 'Zachary', 90, 1),
(21, 3, 1, 'Kai', 25, 1),
(22, 5, 1, 'Wesley', 45, 1),
(23, 10, 1, 'Parker', 19, 1),
(24, 11, 1, 'Kayden', 81, 1),
(25, 7, 1, 'Evan', 66, 1),
(26, 18, 3, 'Declan', 74, 1),
(27, 3, 3, 'Everett', 24, 1),
(28, 6, 3, 'Jace', 24, 1),
(29, 5, 3, 'Xavier', 72, 1),
(30, 9, 3, 'Leonardo', 63, 1),
(31, 12, 5, 'Isabella', 51, 1),
(32, 14, 5, 'Sophia', 34, 1),
(33, 8, 5, 'Christy', 76, 1),
(34, 15, 5, 'Ava', 69, 1),
(35, 16, 5, 'Emma', 33, 1),
(36, 17, 5, 'Olivia', 29, 1),
(37, 9, 7, 'Marco', 98, 1),
(38, 10, 7, 'Jayden', 75, 1),
(39, 19, 7, 'Wesley', 62, 1),
(40, 20, 7, 'Carter', 28, 1),
(41, 4, 7, 'Mateo', 76, 1),
(42, 7, 7, 'Leo', 88, 1),
(43, 8, 8, 'Square', 88, 1),
(44, 14, 8, 'Lillian', 64, 1),
(45, 15, 8, 'Everly', 32, 1),
(46, 16, 8, 'Natalie', 87, 1),
(47, 12, 8, 'Stella', 13, 1),
(48, 17, 8, 'Lily', 20, 1),
(49, 15, 9, 'Anthony', 67, 1),
(50, 13, 9, 'Julian', 22, 1),
(51, 12, 9, 'Asher', 4, 1),
(52, 11, 9, 'Christopher', 13, 1),
(53, 15, 10, 'Savannah', 8, 1),
(54, 14, 10, 'Brooklyn', 5, 1),
(55, 3, 10, 'Nova', 23, 1),
(56, 14, 11, 'Ava', 30, 1),
(57, 9, 11, 'Isabella', 33, 1),
(58, 8, 11, 'Charlotte', 5, 1),
(59, 20, 11, 'Mia', 19, 1),
(60, 12, 12, 'Penelope', 16, 1),
(61, 16, 12, 'Victoria', 23, 1),
(62, 15, 12, 'Eleanor', 40, 1),
(63, 5, 13, 'Larry', NULL, 0),
(64, 3, 13, 'Parker', NULL, 0),
(65, 14, 13, 'Leo', NULL, 0),
(66, 7, 13, 'Hudson', NULL, 0),
(67, 15, 13, 'Asher', NULL, 0),
(68, 13, 13, 'David', NULL, 0),
(69, 12, 13, 'Owen', NULL, 0),
(70, 11, 13, 'Mateo', NULL, 0),
(71, 6, 14, 'Charles', NULL, 0),
(72, 4, 14, 'Ryan', NULL, 0),
(73, 7, 14, 'Adrian', NULL, 0),
(74, 8, 14, 'Colton', NULL, 0),
(75, 16, 14, 'Eli', NULL, 0),
(76, 14, 14, 'Adam', NULL, 0),
(77, 13, 14, 'Axel', NULL, 0),
(78, 12, 14, 'Mateo', NULL, 0),
(79, 4, 15, 'Caleb', NULL, 0),
(80, 20, 15, 'Josiah', NULL, 0),
(81, 5, 15, 'Maverick', NULL, 0),
(82, 6, 15, 'Aaron', NULL, 0),
(83, 14, 15, 'Hunter', NULL, 0),
(84, 12, 15, 'Santiago', NULL, 0),
(85, 11, 15, 'Roman', NULL, 0),
(86, 10, 15, 'Nicholas', NULL, 0),
(87, 11, 16, 'Ivy', NULL, 0),
(88, 5, 16, 'Alice', NULL, 0),
(89, 6, 16, 'Quinn', NULL, 0),
(90, 4, 16, 'Piper', NULL, 0),
(91, 13, 16, 'Arya', NULL, 0),
(92, 8, 16, 'Adeline', NULL, 0),
(93, 7, 16, 'Autumn', NULL, 0),
(94, 19, 16, 'Mia', NULL, 0),
(95, 8, 13, 'Ian', NULL, 0),
(96, 4, 13, 'Maverick', NULL, 0),
(97, 6, 13, 'Hunter', NULL, 0),
(98, 10, 13, 'Roman', NULL, 0),
(99, 15, 14, 'Roman', NULL, 0),
(100, 17, 14, 'Cameron', NULL, 0),
(101, 13, 14, 'Cooper', NULL, 0),
(102, 9, 14, 'Jameson', NULL, 0),
(103, 1, 15, 'black', NULL, 0),
(104, 2, 13, 'Tony', NULL, 0),
(105, 1, 13, 'Sara', NULL, 0),
(106, 21, 13, 'github', NULL, 0),
(107, 21, 17, 'sass', NULL, 0),
(108, 23, 15, '111111', NULL, 0),
(109, 23, 14, '11111', NULL, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `thankscard`
--

DROP TABLE IF EXISTS `thankscard`;
CREATE TABLE IF NOT EXISTS `thankscard` (
  `cardNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '感謝卡編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `cardName` varchar(20) NOT NULL,
  `memEmail` varchar(100) NOT NULL,
  `cardFile` varchar(30) NOT NULL COMMENT '感謝卡圖檔',
  `cardStatus` tinyint(1) NOT NULL COMMENT '卡片狀態(0:已分享;1:未分享)',
  `cardDate` date NOT NULL,
  PRIMARY KEY (`cardNo`),
  KEY `memNo` (`memNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `ticket_info`
--

DROP TABLE IF EXISTS `ticket_info`;
CREATE TABLE IF NOT EXISTS `ticket_info` (
  `ticketNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '門票編號',
  `ticketType` varchar(25) NOT NULL COMMENT '門票種類',
  `ticketPrice` int(11) NOT NULL COMMENT '門票價格',
  PRIMARY KEY (`ticketNo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `ticket_info`
--

INSERT INTO `ticket_info` (`ticketNo`, `ticketType`, `ticketPrice`) VALUES
(1, 'Adult Ticket', 30),
(2, 'Children Ticket', 15),
(3, 'Elder Ticket', 20);

-- --------------------------------------------------------

--
-- 資料表結構 `ticket_order`
--

DROP TABLE IF EXISTS `ticket_order`;
CREATE TABLE IF NOT EXISTS `ticket_order` (
  `ticketOrderNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '門票訂單編號',
  `memNo` int(11) NOT NULL COMMENT '會員編號',
  `ticketOrderDate` date NOT NULL COMMENT '門票訂購日期',
  `ticketTotalPrice` int(11) NOT NULL COMMENT '門票訂單總額',
  PRIMARY KEY (`ticketOrderNo`),
  KEY `memNo` (`memNo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `ticket_order`
--

INSERT INTO `ticket_order` (`ticketOrderNo`, `memNo`, `ticketOrderDate`, `ticketTotalPrice`) VALUES
(1, 1, '2020-10-29', 130),
(2, 2, '2020-10-30', 240),
(3, 1, '2020-11-17', 125),
(4, 22, '2020-11-23', 100),
(5, 21, '2020-11-23', 100);

-- --------------------------------------------------------

--
-- 資料表結構 `ticket_order_list`
--

DROP TABLE IF EXISTS `ticket_order_list`;
CREATE TABLE IF NOT EXISTS `ticket_order_list` (
  `ticketItemNo` int(11) NOT NULL AUTO_INCREMENT COMMENT '門票明細編號',
  `ticketOrderNo` int(11) NOT NULL COMMENT '門票訂單編號',
  `ticketNo` int(11) NOT NULL COMMENT '門票編號',
  `ticketPerson` int(11) NOT NULL COMMENT '門票訂購人數',
  `ticketListPrice` int(11) NOT NULL COMMENT '門票訂單金額',
  PRIMARY KEY (`ticketItemNo`),
  KEY `ticketOrderNo` (`ticketOrderNo`),
  KEY `ticketNo` (`ticketNo`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `ticket_order_list`
--

INSERT INTO `ticket_order_list` (`ticketItemNo`, `ticketOrderNo`, `ticketNo`, `ticketPerson`, `ticketListPrice`) VALUES
(1, 1, 1, 2, 60),
(2, 1, 2, 2, 30),
(3, 1, 3, 2, 40),
(4, 2, 1, 7, 210),
(5, 2, 2, 2, 30),
(6, 3, 3, 1, 20),
(7, 3, 1, 3, 90),
(8, 3, 2, 1, 15),
(9, 4, 3, 2, 40),
(10, 4, 1, 2, 60),
(11, 5, 1, 2, 60),
(12, 5, 3, 2, 40);

--
-- 已匯出資料表的限制(Constraint)
--

--
-- 資料表的 Constraints `adopt`
--
ALTER TABLE `adopt`
  ADD CONSTRAINT `adopt_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `adopt_ibfk_2` FOREIGN KEY (`aquaNo`) REFERENCES `aqua` (`aquaNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `journal`
--
ALTER TABLE `journal`
  ADD CONSTRAINT `journal_ibfk_1` FOREIGN KEY (`aquaNo`) REFERENCES `aqua` (`aquaNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `journal_message`
--
ALTER TABLE `journal_message`
  ADD CONSTRAINT `journal_message_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_message_ibfk_2` FOREIGN KEY (`aquaNo`) REFERENCES `aqua` (`aquaNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `journal_message_report`
--
ALTER TABLE `journal_message_report`
  ADD CONSTRAINT `journal_message_report_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_message_report_ibfk_2` FOREIGN KEY (`aquaNo`) REFERENCES `aqua` (`aquaNo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_message_report_ibfk_3` FOREIGN KEY (`msgNo`) REFERENCES `journal_message` (`msgNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `night_order`
--
ALTER TABLE `night_order`
  ADD CONSTRAINT `night_order_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `nominate`
--
ALTER TABLE `nominate`
  ADD CONSTRAINT `nominate_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `nominate_ibfk_2` FOREIGN KEY (`aquaNo`) REFERENCES `aqua` (`aquaNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `ticket_order`
--
ALTER TABLE `ticket_order`
  ADD CONSTRAINT `ticket_order_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON UPDATE CASCADE;

--
-- 資料表的 Constraints `ticket_order_list`
--
ALTER TABLE `ticket_order_list`
  ADD CONSTRAINT `ticket_order_list_ibfk_1` FOREIGN KEY (`ticketNo`) REFERENCES `ticket_info` (`ticketNo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_order_list_ibfk_2` FOREIGN KEY (`ticketOrderNo`) REFERENCES `ticket_order` (`ticketOrderNo`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

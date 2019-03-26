/*
Navicat MySQL Data Transfer

Source Server         : 1812
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : 2080ti

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-26 19:52:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `cid` int(8) DEFAULT NULL,
  `quan` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('24', '23423', '5', '5');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `con` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `volume` int(255) DEFAULT NULL,
  `discuss` int(255) DEFAULT NULL,
  `man` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '飞利浦 电动剃须刀 S529 DF', '249', '12', '33', '珠海经济特区飞利浦家庭电器有限公司', '../img/list/k1.jpg');
INSERT INTO `list` VALUES ('2', '飞科 剃须刀 FS378 DF', '254', '23', '34', '上海飞科电器股份有限公司', '../img/list/k2.jpg');
INSERT INTO `list` VALUES ('3', '超人 剃须刀 RS338 DF', '259', '175', '15', '浙江超人科技股份有限公司', '../img/list/k3.jpg');
INSERT INTO `list` VALUES ('4', '飞利浦 电动剃须刀 XZ580/04 DF', '264', '345', '65', '珠海经济特区飞利浦家庭电器有限公司', '../img/list/k4.jpg');
INSERT INTO `list` VALUES ('5', '德国 博朗 剃须刀 MG5050 DF', '269', '126', '11', '广州宝洁有限公司', '../img/list/k5.jpg');
INSERT INTO `list` VALUES ('6', '德国 博朗 全身水洗三刀头3系剃须刀 3090CC（5411） DF', '274', '57', '4', '博朗（上海）有限公司', '../img/list/k6.jpg');
INSERT INTO `list` VALUES ('7', '德国 倍世 镁离子净水壶滤芯6只装 BWT.C-5 PLUS 1（S） DF', '279', '77', '10', '博怡（深圳）净水科技有限公司', '../img/list/k7.jpg');
INSERT INTO `list` VALUES ('8', '飞科 挂烫机 FI9815 DF', '284', '75', '78', '上海飞科电器股份有限公司', '../img/list/k8.jpg');
INSERT INTO `list` VALUES ('9', '先锋 十叶机械落地扇 电风扇 FS40-16D （DD1607） DF', '289', '71', '46', '宁波先锋电器制造有限公司', '../img/list/k9.jpg');
INSERT INTO `list` VALUES ('10', '小熊 加湿器JSQ-B20H1家用静音卧室雾化小型迷你香薰机空调 2L DF', '294', '32', '14', '小熊电器股份有限公司', '../img/list/k10.jpg');
INSERT INTO `list` VALUES ('11', '飞利浦 空气净化器AC2888 KJ330F-B07 DF', '299', '70', '45', '飞利浦（中国）投资有限公司', '../img/list/k11.jpg');
INSERT INTO `list` VALUES ('12', '飞利浦 电动剃须刀 S529 DF', '304', '420', '86', '珠海经济特区飞利浦家庭电器有限公司', '../img/list/k1.jpg');
INSERT INTO `list` VALUES ('13', '飞科 剃须刀 FS378 DF', '309', '306', '30', '上海飞科电器股份有限公司', '../img/list/k2.jpg');
INSERT INTO `list` VALUES ('14', '超人 剃须刀 RS338 DF', '314', '175', '14', '浙江超人科技股份有限公司', '../img/list/k3.jpg');
INSERT INTO `list` VALUES ('15', '飞利浦 电动剃须刀 XZ580/04 DF', '319', '345', '65', '珠海经济特区飞利浦家庭电器有限公司', '../img/list/k4.jpg');
INSERT INTO `list` VALUES ('16', '德国 博朗 剃须刀 MG5050 DF', '324', '126', '11', '广州宝洁有限公司', '../img/list/k5.jpg');
INSERT INTO `list` VALUES ('17', '德国 博朗 全身水洗三刀头3系剃须刀 3090CC（5411） DF', '329', '57', '99', '博朗（上海）有限公司', '../img/list/k6.jpg');
INSERT INTO `list` VALUES ('18', '德国 倍世 镁离子净水壶滤芯6只装 BWT.C-5 PLUS 1（S） DF', '334', '77', '10', '博怡（深圳）净水科技有限公司', '../img/list/k7.jpg');
INSERT INTO `list` VALUES ('19', '飞科 挂烫机 FI9815 DF', '339', '75', '23', '上海飞科电器股份有限公司', '../img/list/k8.jpg');
INSERT INTO `list` VALUES ('20', '先锋 十叶机械落地扇 电风扇 FS40-16D （DD1607） DF', '344', '71', '34', '宁波先锋电器制造有限公司', '../img/list/k9.jpg');
INSERT INTO `list` VALUES ('21', '小熊 加湿器JSQ-B20H1家用静音卧室雾化小型迷你香薰机空调 2L DF', '349', '32', '14', '小熊电器股份有限公司', '../img/list/k10.jpg');
INSERT INTO `list` VALUES ('22', '飞利浦 空气净化器AC2888 KJ330F-B07 DF', '354', '70', '45', '飞利浦（中国）投资有限公司', '../img/list/k11.jpg');
INSERT INTO `list` VALUES ('23', '飞利浦 电动剃须刀 S529 DF', '359', '420', '86', '珠海经济特区飞利浦家庭电器有限公司', '../img/list/k1.jpg');
INSERT INTO `list` VALUES ('24', '飞科 剃须刀 FS378 DF', '364', '306', '30', '上海飞科电器股份有限公司', '../img/list/k2.jpg');
INSERT INTO `list` VALUES ('25', '超人 剃须刀 RS338 DF', '369', '175', '14', '浙江超人科技股份有限公司', '../img/list/k3.jpg');
INSERT INTO `list` VALUES ('26', '飞利浦 电动剃须刀 XZ580/04 DF', '374', '345', '65', '珠海经济特区飞利浦家庭电器有限公司', '../img/list/k4.jpg');
INSERT INTO `list` VALUES ('27', '德国 博朗 剃须刀 MG5050 DF', '379', '126', '11', '广州宝洁有限公司', '../img/list/k5.jpg');
INSERT INTO `list` VALUES ('28', '德国 博朗 全身水洗三刀头3系剃须刀 3090CC（5411） DF', '384', '57', '9', '博朗（上海）有限公司', '../img/list/k6.jpg');
INSERT INTO `list` VALUES ('29', '德国 倍世 镁离子净水壶滤芯6只装 BWT.C-5 PLUS 1（S） DF', '389', '77', '10', '博怡（深圳）净水科技有限公司', '../img/list/k7.jpg');
INSERT INTO `list` VALUES ('30', '飞科 挂烫机 FI9815 DF', '394', '75', '5', '上海飞科电器股份有限公司', '../img/list/k8.jpg');
INSERT INTO `list` VALUES ('31', '先锋 十叶机械落地扇 电风扇 FS40-16D （DD1607） DF', '399', '71', '34', '宁波先锋电器制造有限公司', '../img/list/k9.jpg');
INSERT INTO `list` VALUES ('32', '小熊 加湿器JSQ-B20H1家用静音卧室雾化小型迷你香薰机空调 2L DF', '404', '32', '14', '小熊电器股份有限公司', '../img/list/k10.jpg');
INSERT INTO `list` VALUES ('33', '飞利浦 空气净化器AC2888 KJ330F-B07 DF', '409', '70', '45', '飞利浦（中国）投资有限公司', '../img/list/k11.jpg');

-- ----------------------------
-- Table structure for user_inf
-- ----------------------------
DROP TABLE IF EXISTS `user_inf`;
CREATE TABLE `user_inf` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `paws` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_inf
-- ----------------------------
INSERT INTO `user_inf` VALUES ('95', '13632814865', '123456');
INSERT INTO `user_inf` VALUES ('94', '13643535334', '123123');
INSERT INTO `user_inf` VALUES ('93', '13456745674', '123123');
INSERT INTO `user_inf` VALUES ('92', '13632814864', '123123');
INSERT INTO `user_inf` VALUES ('91', '13632814863', '123456');
INSERT INTO `user_inf` VALUES ('87', '456123', '123123');
INSERT INTO `user_inf` VALUES ('86', '123456', '123456');
SET FOREIGN_KEY_CHECKS=1;

// 该文件负责对数据库进行一个初始化操作
const sequelize = require("./dbConnect"); // 数据库连接实例

const adminModel = require("./model/adminModel"); // 数据模型
const bannerModel = require("./model/bannerModel");
const blogTypeModel = require("./model/blogTypeModel");
const blogModel = require("./model/blogModel");
const demoModel = require("./model/demoModel");
const messageModel = require("./model/messageModel");
const aboutModel = require("./model/aboutModel");
const settingModel = require("./model/settingModel");

const md5 = require("md5");

(async function () {
  // 定义模型之间的关联关系

  // 博客和博客分类之间的关联
  blogTypeModel.hasMany(blogModel, {
    foreignKey: "categoryId",
    targetKey: "id",
  });
  blogModel.belongsTo(blogTypeModel, {
    foreignKey: "categoryId",
    targetKey: "id",
    as: "category",
  });

  // 博客和博客评论之间存在关联关系
  blogModel.hasMany(messageModel, { foreignKey: "blogId", target: "id" });
  messageModel.belongsTo(blogModel, {
    foreignKey: "blogId",
    target: "id",
    as: "blog",
  });

  // 将数据模型和表进行同步
  await sequelize.sync({
    alter: true,
  });

  // 同步完成之后，有一些表是需要一些初始化数据
  // 我们需要先查询这张表有没有内容，没有内容我们才初始化数据
  const adminCount = await adminModel.count();
  if (!adminCount) {
    // 进入此 if，说明该表没有数据，我们进行一个初始化
    await adminModel.create({
      loginId: "admin",
      name: "超级管理员",
      loginPwd: md5("qwe123qwe<>?"),
    });
    console.log("初始化管理员数据完毕...");
  }

  // banner 进行初始化操作
  const bannerCount = await bannerModel.count();
  if (!bannerCount) {
    await bannerModel.bulkCreate([
      {
        midImg: "/static/images/childLF.png",
        bigImg: "/static/images/minChildLF.png",
        title: "蒙奇·D·路飞(モンキー・D・ルフィ)",
        description:
          "比如说有一块肉，英雄会把它分给别人，而海贼会拿它来开宴会。我喜欢吃肉！ 我不是英雄，我只做我想做的事，保护我想要保护的人而已。",
      },
      {
        midImg: "/static/images/minRoronoaZoro.png",
        bigImg: "/static/images/RoronoaZoro.png",
        title: "罗罗诺亚·索隆(ロロノア・ゾロ)",
        description:
          "请把那把刀给我吧！我要会连她的份也一起努力的，我要成为世界第一的大剑客，我要让我的名字，响彻天堂！",
      },
      {
        midImg: "/static/images/minLfWife.png",
        bigImg: "/static/images/lfWife.png",
        title: "波雅·汉库克(ボア・ハンコック)",
        description: "敌人还是同伴男人都一样,他(路飞)除外。",
      },
    ]);
    console.log("初始化首页标语数据...");
  }

  // 进行一些数据初始化
  const aboutCount = await aboutModel.count(); // 首先进行查询看有没有数据
  if (!aboutCount) {
    // 如果没有数据就进行初始化
    await aboutModel.create({
      url: "",
    });
    console.log("初始化关于我数据...");
  }

  // 全局设置数据初始化
  const settingCount = await settingModel.count(); // 首先进行查询看有没有数据
  if (!settingCount) {
    // 如果没有数据就进行初始化
    await settingModel.create({
      avatar: "/static/images/lf.gif",
      siteTitle: "JS.D.HX",
      github: "https://github.com/echo-huxin",
      qq: "1611012508",
      qqQrCode: "/static/images/qqCode.jpg",
      weixin: "hustle-hx",
      weixinQrCode: "/static/images/wxCode.jpg",
      mail: "wb4425883@163.com",
      icp: "源ICP备1024号",
      githubName: "echo-huxin",
      favicon: "https://s2.loli.net/2022/08/18/roWO1DM8zXYqSBN.png",
    });
    console.log("初始化全局设置数据...");
  }

  console.log("数据库数据已经准备完毕....");
})();

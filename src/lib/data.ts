export const translations = {
  en: {
    nav: {
      showcase: '01.SHOWCASE',
      research: '02.RESEARCH',
      lang: '中 / EN'
    },
    hero: {
      init: 'SYSTEM.INITIALIZE',
      overview: '// PROFILE OVERVIEW',
      nameFirst: 'Pan',
      nameLast: 'Zhao Hui',
      role: 'Undergraduate Researcher | Robotics & AI',
      institution: 'Nanjing University(C9 league/ TOP 9 in China)',
      bio: 'I am a sophomore researcher specializing in autonomous robotics, computer vision, and embedded systems. My work focuses on bridging the gap between theoretical AI models and physical hardware constraints. I am passionate about building machines that can perceive, learn, and act intelligently in unstructured environments.',
      skills: ["ROS 2", "C++", "Python", "PyTorch", "Computer Vision", "STM32", "Hardware Prototyping", "Motor Control", "Linux/Bash"],
      email: 'EMAIL',
      github: 'GITHUB',
      linkedin: 'LINKEDIN',
    },
    showcase: {
      title: 'Showcase',
      subtitle: 'HARDWARE TESTING & ALGORITHM DEMONSTRATIONS',
      addVideo: 'ADD LOCAL VIDEO',
      noSignal: 'NO VIDEO SIGNAL',
      rec: 'REC',
      videos: [
        {
          id: 'bilibili-4track',
          title: 'Four-Rocker Tracked Mobile Platform',
          description: 'A four-rocker tracked mobile platform designed for multi-terrain traversal. The rocker-arm suspension system enables active adaptation to uneven surfaces. Mechanical structure and embedded motor control firmware were independently developed.',
          url: 'https://player.bilibili.com/player.html?bvid=BV1HmQtB1Eze&high_quality=1&autoplay=0&danmaku=0',
          type: 'bilibili',
          date: '2026-03'
        },
        {
          id: 'local-cricket',
          title: 'Cricket Trajectory Control System',
          description: 'A cricket ball trajectory control system based on servo motor actuation. Precise spin and velocity modulation are achieved through coordinated multi-axis servo control.',
          url: '/videos/基于伺服电机的板球控制系统.mp4',
          type: 'url',
          date: '2025-12'
        },
        {
          id: 'local-robomaster',
          title: 'RoboMaster Hero Robot',
          description: 'RoboMaster Hero robot developed for the RoboMaster Robotics Competition. Includes chassis drive system, gimbal aiming mechanism, and projectile launching subsystem.',
          url: '/videos/Robomaster英雄.mp4',
          type: 'url',
          date: '2025-10 ~ 2026-02'
        },
        {
          id: 'bilibili-exoskeleton',
          title: 'Robotic Arm Exoskeleton Control System',
          description: 'A wearable robotic arm exoskeleton control system integrating servo motor drivers and real-time kinematic feedback. Designed to assist upper-limb motion with position-tracking closed-loop control.',
          url: 'https://player.bilibili.com/player.html?bvid=BV11d9bYiEpk&high_quality=1&autoplay=0&danmaku=0',
          type: 'bilibili',
          date: '2025-02'
        }
      ]
    },
    publications: {
      title: 'Publications & Research',
      subtitle: 'ACADEMIC CONTRIBUTIONS & TECHNICAL REPORTS',
      list: []
    },
    footer: 'BUILT FOR ROBOTICS RESEARCH'
  },
  zh: {
    nav: {
      showcase: '01.视频演示',
      research: '02.学术研究',
      lang: 'EN / 中'
    },
    hero: {
      init: '系统.初始化',
      overview: '// 个人简介',
      nameFirst: '潘',
      nameLast: '昭辉',
      role: '本科研究员 | 嵌入式，机器人与人工智能',
      institution: '南京大学（C9 联盟 985）',
      bio: '我是一名准大三研究员，专注于自主机器人、计算机视觉和嵌入式系统。我的工作重点是弥合理论人工智能模型与物理硬件限制之间的差距。我热衷于构建能够在非结构化环境中感知、学习和智能行动的机器人系统。',
      skills: ["ROS 2", "C++", "Python", "PyTorch", "计算机视觉", "SLAM", "硬件原型设计", "传感器融合", "Linux/Bash"],
      email: '邮件',
      github: '开源社区',
      linkedin: '领英',
    },
    showcase: {
      title: '项目展示',
      subtitle: '硬件测试与算法演示',
      addVideo: '添加本地视频',
      noSignal: '无视频信号',
      rec: '渲染中',
      videos: [
        {
          id: 'bilibili-4track',
          title: '四摇臂履带移动平台',
          description: '四摇臂履带式移动平台，具备多地形通过能力。摇臂悬架系统可实现对不平整地面的主动适应。机械结构与嵌入式电机控制固件均为独立开发。',
          url: 'https://player.bilibili.com/player.html?bvid=BV1HmQtB1Eze&high_quality=1&autoplay=0&danmaku=0',
          type: 'bilibili',
          date: '2026-03'
        },
        {
          id: 'local-cricket',
          title: '板球轨迹控制系统',
          description: '基于伺服电机驱动的板球轨迹控制系统。通过多轴伺服协同控制实现精确的旋转与速度调节。',
          url: '/videos/基于伺服电机的板球控制系统.mp4',
          type: 'url',
          date: '2025-12'
        },
        {
          id: 'local-robomaster',
          title: 'RoboMaster 英雄机器人',
          description: '为全国大学生机器人大赛RoboMaster赛事开发的英雄机器人。涵盖底盘驱动系统、云台瞄准机构及弹丸发射子系统。',
          url: '/videos/Robomaster英雄.mp4',
          type: 'url',
          date: '2025-10 ~ 2026-02'
        },
        {
          id: 'bilibili-exoskeleton',
          title: '机械臂外骨骼控制系统',
          description: '可穿戴式机械臂外骨骼控制系统，集成伺服电机驱动与实时运动学反馈。基于位置跟踪的闭环控制实现上肢运动辅助。',
          url: 'https://player.bilibili.com/player.html?bvid=BV11d9bYiEpk&high_quality=1&autoplay=0&danmaku=0',
          type: 'bilibili',
          date: '2025-02'
        }
      ]
    },
    publications: {
      title: '发表论文与研究',
      subtitle: '学术贡献与技术报告',
      list: []
    },
    footer: '专为机器人研究开发'
  }
};

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
          id: "v1",
          title: "Quadruped Robot Locomotion Testing",
          description: "Testing our new RL-based controller on uneven terrain.",
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          type: "url",
          date: "2025-03-12"
        },
        {
          id: "v2",
          title: "Autonomous Grasping in Clutter",
          description: "6-DOF manipulator identifying and sorting target objects.",
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          type: "url",
          date: "2025-01-28"
        }
      ]
    },
    publications: {
      title: 'Publications & Research',
      subtitle: 'ACADEMIC CONTRIBUTIONS & TECHNICAL REPORTS',
      list: [
        {
          title: "Real-time Path Planning in Dynamic Environments for Quadruped Robots",
          conference: "ICRA 2025 (Under Review)",
          authors: "Zheng Hao, Mentor A., Professor B.",
          link: "#",
          tag: "First Author"
        },
        {
          title: "Efficient End-to-End Grasping using Lightweight Neural Networks",
          conference: "IROS 2024",
          authors: "Colleague X., Zheng Hao, Professor B.",
          link: "#"
        }
      ]
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
          id: "v1",
          title: "四足机器人运动测试",
          description: "在不平坦的地形上测试我们的强化学习控制器。",
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          type: "url",
          date: "2025-03-12"
        },
        {
          id: "v2",
          title: "杂乱环境中的自主抓取",
          description: "6自由度机械臂识别并分拣目标物体。",
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          type: "url",
          date: "2025-01-28"
        }
      ]
    },
    publications: {
      title: '发表论文与研究',
      subtitle: '学术贡献与技术报告',
      list: [
        {
          title: "动态环境下四足机器人的实时路径规划",
          conference: "ICRA 2025 (审稿中)",
          authors: "郑浩, 导师 A., 教授 B.",
          link: "#",
          tag: "第一作者"
        },
        {
          title: "基于轻量级神经网络的高效端到端抓取",
          conference: "IROS 2024",
          authors: "同事 X., 郑浩, 教授 B.",
          link: "#"
        }
      ]
    },
    footer: '专为机器人研究开发'
  }
};

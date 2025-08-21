<<<<<<< HEAD
# 基于开源大模型的图片分析聊天应用

一个基于FastAPI和VUE的智能聊天应用，支持图片上传分析、连续多轮对话、流式输出等功能。

## 🌟 主要特性

### 核心功能
- **图片分析**: 支持图片上传和Qianwen大模型分析功能
- **多轮对话**: 支持连续的上下文对话，保持对话历史
- **流式输出**: 实时流式输出，提供更好的用户体验
- **会话管理**: 完整的会话创建、查看、删除功能

### AI提供商支持
- **DeepSeek**: DeepSeek系列模型
- **通义千问**: 阿里云通义千问模型
- **兼容OpenAI API**: 支持其他兼容OpenAI API的服务

### 技术特性
- **数据持久化**: 支持Redis存储，自动降级到内存存储
- **配置灵活**: 支持环境变量和配置文件
- **日志系统**: 完整的日志记录和错误追踪
- **响应式设计**: 现代化的Web界面
- **API文档**: 自动生成的FastAPI文档

## 🚀 快速开始

### 环境要求
- Python 3.8+
- Redis (可选，不配置时使用内存存储)

### 配置环境变量
复制环境变量模板：
```bash
cp .env.example .env
```

编辑 `.env` 文件，配置你的AI提供商API密钥：
```env
# OpenAI配置
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=https://api.openai.com/v1

# DeepSeek配置
DEEPSEEK_API_KEY=your_deepseek_api_key

# 通义千问配置
QIANWEN_API_KEY=your_qianwen_api_key

# Redis配置（可选）
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# 应用配置
DEFAULT_AI_PROVIDER=openai
DEBUG=true
LOG_LEVEL=INFO
```

### 启动应用
```bash
# Step 0:开启Redisfuwu
终端打开文件夹D:\ProgramData\Redis-x64-5.0.14.1
.\redis-server.exe .\redis.windows.conf

# Step 1：开启后端服务
python start_server.py

# Step 2：开启前端服务
cd vite_chatbot
npm run dev

# Step 3：Web页面访问
访问 http://localhost:5173/
```


## 📁 项目结构

```
task01_qianwen_project/
├── frontend                      # 前端文件
│       ├── node_modules/        
│       └── vite_chatbot/         
│                ├── node_modules
│                ├── public       # 静态资源
│                └── src      
│                     ├── components  # 组件
│                     │        ├── AiThinkingIndicator.vue  # Ai思考动画组件
│                     │        └── MarkdownRenderer.vue     # Markdown渲染显示组件
│                     ├── App.vue     # vue文件
│                     ├── style.css   # 样式
│                     └── main.js     # 入口 JS（初始化 Vue/React 实例、加载全局资源）
├── backend                        # 后端文件
│       ├── main.py                # 主应用文件
│       ├── config.py              # 配置管理
│       ├── start_server.py        # 启动脚本
│       ├── requirements.txt       # 依赖包列表
│       ├── .env                   # 环境变量模板
│       ├── ai_providers/          # AI提供商模块
│       └── Dockerfile             # 容器化部署配置（管理前端、后端、数据库等服务） 
├── docs/              # 项目文档
├── README.md          # 项目总说明（技术栈、启动方式、目录说明）
└── logs/              # 日志文件目录
```

## 🔧 API接口

### 聊天相关
- `POST /chat/start` - 开始新的聊天会话
- `POST /chat/stream` - 流式聊天接口
- `GET /chat/history` - 获取聊天历史
- `GET /chat/sessions` - 获取用户会话列表
- `DELETE /chat/session/{session_id}` - 删除聊天会话
- `DELETE /chat/history/{session_id}` - 清除对话历史

### 配置相关
- `GET /providers` - 获取可用的AI提供商列表

### 文件上传
- `POST /upload/image` - 图片上传接口

### 其他
- `GET /` - 重定向到聊天界面
- `GET /api` - API信息

## 🎯 使用说明

### 基本聊天
1. 访问应用首页
2. 点击"开始新对话"创建会话
3. 输入消息开始聊天
4. 支持实时流式响应

### 切换AI提供商
- 在聊天界面可以选择不同的AI提供商
- 支持在对话中动态切换模型
- 每个提供商支持多个模型选择

### 图片理解
1. 选择Qianwen大模型
1. 点击图片上传按钮
2. 选择图片文件（支持jpg、png等格式）
3. 发送消息，Qianwen大模型将分析图片内容

### 会话管理
- 查看历史会话列表
- 删除不需要的会话
- 清除会话对话历史

## ⚙️ 配置说明

### AI提供商配置
每个AI提供商都需要相应的API密钥，在 `.env` 文件中配置：

### Redis配置
Redis用于持久化存储对话历史，如果不配置Redis，应用会自动使用内存存储：

```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_password
REDIS_DB=0
```

### 应用配置
```env
# 调试模式
DEBUG=true

# 日志级别
LOG_LEVEL=INFO

# 会话过期时间（秒）
CONVERSATION_EXPIRE_TIME=86400
SESSION_EXPIRE_TIME=604800

# 最大历史消息数
MAX_HISTORY_MESSAGES=20
```

## 🔍 日志和监控

应用提供完整的日志记录功能：
- 控制台输出：实时查看应用状态
- 文件日志：保存在 `logs/` 目录下
- 日志级别：支持DEBUG、INFO、WARNING、ERROR

日志内容包括：
- API请求和响应
- AI提供商调用情况
- 错误和异常信息
- 会话管理操作

## 🔗 相关链接

- [FastAPI官方文档](https://fastapi.tiangolo.com/)
- [OpenAI API文档](https://platform.openai.com/docs)
- [Redis官方文档](https://redis.io/documentation)

---
=======
# task01_qianwen
fastapi,python,qianwen
>>>>>>> 2e2332de2fb85802988066fc9e83a55cb7c4bb07

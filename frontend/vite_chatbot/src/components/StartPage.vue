<template>
  <!-- 登录页面容器（占满整个屏幕，作为单独页面） -->
  <div class="login-page">
    <div class="login-card">
      <h1 class="title">AI 聊天助手</h1>
      <p class="subtitle">请登录后开始使用</p>
      
      <!-- 登录按钮：点击后跳转至App.vue渲染的主界面 -->
      <button 
        class="login-btn" 
        @click="handleLogin"
      >
        登录并进入应用
        <i class="fa fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  methods: {
    handleLogin() {
      // 1. 实际项目中此处应添加登录验证逻辑（如调用后端接口）
      // 2. 登录成功后保存状态
      localStorage.setItem('isLoggedIn', 'true')
      
      // 3. 跳转到App.vue渲染的主界面（路由为/app）
      this.$router.push('/app')
    }
  }
}
</script>

<style scoped>
/* 登录页面样式（作为单独页面全屏显示） */
.login-page {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.title {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.login-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-btn:hover {
  background-color: #3367d6;
  transform: translateY(-2px);
}
</style>
    
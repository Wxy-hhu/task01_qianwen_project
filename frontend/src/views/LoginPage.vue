<template>
  <div class="w-full max-w-md">
    <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <!-- 登录卡片头部 -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
          <i class="fa fa-comments text-white text-2xl"></i>
        </div>
        <h2 class="text-white text-2xl font-bold">AI Chat</h2>
        <p class="text-white/80 mt-1">登录您的账户开始聊天</p>
      </div>
      
      <!-- 登录表单 -->
      <div class="p-6">
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- 用户名输入 -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">用户名</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fa fa-user text-gray-400"></i>
              </div>
              <input 
                type="text" 
                id="username" 
                v-model="form.username"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="请输入用户名"
                required
              >
            </div>
          </div>
          
          <!-- 密码输入 -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fa fa-lock text-gray-400"></i>
              </div>
              <input 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
                v-model="form.password"
                class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="请输入密码"
                required
              >
              <button 
                type="button" 
                @click="togglePasswordVisibility" 
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
              </button>
            </div>
          </div>
          
          <!-- 记住密码和忘记密码 -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="remember-me" 
                v-model="form.rememberMe"
                class="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">记住我</label>
            </div>
            <a href="#" class="text-sm text-blue-500 hover:text-blue-700 transition-colors">忘记密码?</a>
          </div>
          
          <!-- 登录按钮 -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <template v-if="isLoading">
              <i class="fa fa-spinner fa-spin mr-2"></i> 登录中...
            </template>
            <template v-else>
              登录
            </template>
          </button>
        </form>
        
        <!-- 分隔线 -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">或使用以下方式登录</span>
          </div>
        </div>
        
        <!-- 社交登录 -->
        <div class="grid grid-cols-3 gap-3">
          <button class="flex justify-center items-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <i class="fa fa-google text-gray-600"></i>
          </button>
          <button class="flex justify-center items-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <i class="fa fa-github text-gray-600"></i>
          </button>
          <button class="flex justify-center items-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <i class="fa fa-weixin text-gray-600"></i>
          </button>
        </div>
        
        <!-- 注册链接 -->
        <p class="mt-6 text-center text-sm text-gray-600">
          还没有账户? 
          <a href="#" class="font-medium text-blue-500 hover:text-blue-700 transition-colors">立即注册</a>
        </p>
      </div>
    </div>
    
    <!-- 页脚 -->
    <p class="mt-6 text-center text-sm text-gray-500">
      &copy; 2024 AI Chat. 保留所有权利.
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      // 表单数据
      form: {
        username: '',
        password: '',
        rememberMe: false
      },
      // 密码显示状态
      showPassword: false,
      // 登录加载状态
      isLoading: false
    }
  },
  methods: {
    // 切换密码可见性
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    
    // 处理登录逻辑
    handleLogin() {
      // 简单验证
      if (!this.form.username || !this.form.password) {
        alert('请输入用户名和密码');
        return;
      }
      
      // 模拟登录过程
      this.isLoading = true;
      
      // 模拟API请求延迟
      setTimeout(() => {
        // 这里可以添加实际的登录验证逻辑
        console.log('登录信息:', {
          username: this.form.username,
          password: this.form.password,
          rememberMe: this.form.rememberMe
        });
        
        // 登录成功后存储用户信息
        if (this.form.rememberMe) {
          localStorage.setItem('user', JSON.stringify({ 
            username: this.form.username 
          }));
        } else {
          sessionStorage.setItem('user', JSON.stringify({ 
            username: this.form.username 
          }));
        }
        
        // 跳转到主页面
        // 如果使用Vue Router，应该使用this.$router.push('/')
        window.location.href = 'index.html';
      }, 1500);
    }
  }
}
</script>

<style scoped>
/* 可以根据需要添加组件的局部样式 */
/* 全局样式已通过Tailwind实现 */
</style>

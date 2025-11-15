const { app, BrowserWindow, Menu, dialog, shell } = require('electron')
const path = require('path')

// 确保只在主进程中运行
if (!app.requestSingleInstanceLock()) {
  app.quit()
}

// 创建主窗口实例的引用
let mainWindow

/**
 * 创建主窗口
 * @function createMainWindow
 */
function createMainWindow() {
  console.log('正在创建主窗口...')
  
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'Furina_Icon.png'), // 应用图标
    title: '芙宁娜AI聊天',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true,
      allowRunningInsecureContent: false
    },
    show: false, // 先不显示，等加载完成后再显示
    titleBarStyle: 'default',
    autoHideMenuBar: false // 显示菜单栏（开发者模式下）
  })

  // 加载应用的主页面
  mainWindow.loadFile('index.html')

  // 当 window 即将被关闭时触发
  mainWindow.once('ready-to-show', () => {
    console.log('主窗口加载完成，显示窗口')
    mainWindow.show()
    
    // 如果是开发模式，打开开发者工具
    if (process.argv.includes('--dev')) {
      mainWindow.webContents.openDevTools()
    }
  })

  // 当 window 被关闭时触发
  mainWindow.on('closed', () => {
    console.log('主窗口已关闭')
    mainWindow = null
  })

  // 处理外部链接
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  // 处理页面导航
  mainWindow.webContents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl)
    
    // 只允许本地文件协议和空白页面
    if (parsedUrl.origin !== 'file://') {
      event.preventDefault()
      console.log('阻止了外部导航到:', navigationUrl)
    }
  })
}

/**
 * 当 Electron 完成了初始化并准备创建浏览器窗口时触发
 */
app.whenReady().then(() => {
  console.log('Electron 应用启动完成')
  createMainWindow()

  // 在 macOS 上，当点击 dock 图标并且没有其他窗口打开时，重新创建一个窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

/**
 * 当所有窗口都被关闭时触发
 */
app.on('window-all-closed', () => {
  console.log('所有窗口已关闭')
  // 在 macOS 上，应用程序和它们的状态通常保持活动状态
  // 直到用户使用 Cmd + Q 显式退出
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

/**
 * 当应用程序即将退出时触发
 */
app.on('before-quit', () => {
  console.log('应用程序即将退出')
})

/**
 * 当用户尝试打开另一个应用程序实例时触发
 */
app.on('second-instance', () => {
  // 有人尝试运行第二个实例，我们应该聚焦到我们的窗口
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    mainWindow.focus()
  }
})

/**
 * 创建应用程序菜单
 * @function createMenu
 */
function createMenu() {
  const template = [
    {
      label: '文件',
      submenu: [
        {
          label: '新窗口',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            createMainWindow()
          }
        },
        { type: 'separator' },
        {
          label: '退出',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => {
            app.quit()
          }
        }
      ]
    },
    {
      label: '视图',
      submenu: [
        { role: 'reload', label: '重新加载' },
        { role: 'forceReload', label: '强制重新加载' },
        { role: 'toggleDevTools', label: '开发者工具' },
        { type: 'separator' },
        { role: 'resetZoom', label: '实际大小' },
        { role: 'zoomIn', label: '放大' },
        { role: 'zoomOut', label: '缩小' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: '全屏' }
      ]
    },
    {
      label: '窗口',
      submenu: [
        { role: 'minimize', label: '最小化' },
        { role: 'close', label: '关闭' }
      ]
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: '关于芙宁娜AI聊天',
              message: '芙宁娜AI聊天',
              detail: `版本: 1.0.0\n版权所有 (C) 2025 Aether-1013\n\n本程序是自由软件，遵循 GPL-3.0 许可证。\n\n项目地址: https://github.com/Aether-1013/furina-ai-chat`
            })
          }
        },
        {
          label: 'GitHub 仓库',
          click: () => {
            shell.openExternal('https://github.com/Aether-1013/furina-ai-chat')
          }
        }
      ]
    }
  ]

  // macOS 菜单特殊处理
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about', label: '关于' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide', label: '隐藏' },
        { role: 'hideothers', label: '隐藏其他' },
        { role: 'unhide', label: '显示全部' },
        { type: 'separator' },
        { role: 'quit', label: '退出' }
      ]
    })
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

// 创建应用程序菜单
createMenu()
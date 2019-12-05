# 导航栏

## navBar

| 变量      | 说明           | 类型    | 默认值    |
| --------- | -------------- | ------- | --------- |
| back      | 左边的 icon    | String  | 返回 icon |
| title     | 标题           | String  | /         |
| rightIcon | 右边的 icon    | Array   | /         |
| whiteBar  | 导航栏底色白色 | Boolean | false     |

### 插槽

| 插槽名称   | 说明     |
| ---------- | -------- |
| left-text  | 左边插槽 |
| title      | 标题插槽 |
| right-text | 右边插槽 |
| tab        | 底部插槽 |

#### 使用方法

```javascript
import navBar from '@/components/navBar'
```

##### 图示：

![](/images/navBar.jpg)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🎉 我的第一个 Railway 服务器已上线！wanbei714');
});

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});

# 个人学习记录：指导内容的本机参考实现

此目录用于核验教程中前端 → 后端 → SQLite 的完整流程，不是网站后端，也不代表学员已完成项目。学员按各步骤让 Codex 在自己的文件夹逐步制作，不必先复制全部代码。

## 启动

终端进入本目录（不要进入指南根目录）。Mac/Linux：

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python app.py
```

Windows PowerShell：

```powershell
py -3 -m venv .venv
.venv\Scripts\python.exe -m pip install -r requirements.txt
.venv\Scripts\python.exe app.py
```

打开运行输出中的实际网址，默认 http://127.0.0.1:5057 。按 Control+C 停止本服务。端口被占用时请 Codex 识别占用，不要结束不认识的进程。可通过 PORT 环境变量选择其他空闲端口，并以运行输出为准。

网页的输入和列表在 static/index.html；app.py 提供 GET/POST /api/entries；数据库默认保存在本目录 instance/journal.sqlite。首次启动非破坏性建表，重复启动不清数据。JOURNAL_DB 可指定隔离测试数据库。

## 亲手核对

1. 保存标题“练习 A”和内容，记录返回编号。
2. 在同一电脑的另一浏览器打开相同网址，能读到相同编号。
3. 停止服务、重新启动，记录仍在。
4. 空白/全空格/超长应被拒绝；直接调用接口也应被后端拒绝。
5. 停止本服务后保存，不显示成功且保留输入。恢复后先查列表再重试，避免不确定网络结果造成重复。
6. 同一次正在提交的操作防连点；这不是分布式网络重试幂等保证，不把两次独立提交合并。

## 备份与边界

SQLite backup API 能生成一致副本。恢复练习只能在独立目录，以 JOURNAL_DB 指向副本启动核对，不覆盖原库。自动隔离检查见 verify.py。

本例仅绑定 127.0.0.1，使用开发服务器；没有账户、权限隔离或生产部署。禁止将它直接开放到公网。Flask 安装依据：https://flask.palletsprojects.com/en/stable/installation/ 。数据库依据：https://flask.palletsprojects.com/en/stable/tutorial/database/ 。

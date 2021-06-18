<!--
 * @Author: xx
 * @Date: 2021-06-18 10:50:27
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-18 17:41:49
 * @FilePath: /vue-press/docs/git/README.md
-->

# git

## 基础

### 初始化仓库

1, 空项目

```bash
git init
git remote add origin <url>
```

或者直接克隆远程仓库

```bash
git clone <url>
```

2, 已有本地仓库

- 没有远程仓库直接添加即可
- 已有远程仓库参考[链接远程仓库](#工作区)

### 检查当前文件状态

可以用 git status 命令查看哪些文件处于什么状态。

```bash
git status

git status -s // 简洁模式
```

### 跟踪新文件

使用命令 git add 开始跟踪一个文件。 所以，要跟踪 README 文件，运行：

```bash
git add README
```

> 将这个命令理解为“精确地将内容添加到下一次提交中”而不是“将一个文件添加到项目中”要更加合适。

### 提交更新

```bash
git commit

git commit -m <提交说明>

git commit -a -m <提交说明> // 快速提交
```

提交说明格式建议：

- ADD-FEAT：新增功能提交（一般用于第一次功能代码提交）
- ADD-STYLE: 新增加代码风格样式修改
- MOD-STYLE：修改/ 整理代码风格样式，不涉及逻辑更改 （常用）
- MOD-FEAT: 修改功能代码（一般用于第一次之后的功能代码提交）
- BUGFIX: 用于平常测试的bug修复；
- HOTFIX: 用于线上紧急bug修复
- DEL-STYLE：对于代码风格上删除一些无用代码、注释等
- DEL-FEAT: 删除一些无用的功能块代码

### 移除文件

```bash
1. rm <文件名> 或者手动删除
2. git rm <文件名>
```

- 如果要删除之前修改过或已经放到暂存区的文件，则必须使用强制删除选项 -f（译注：即 force 的首字母）

 ```bash
git rm -f  <文件名>
```

- 只清除暂存区不删除文件

```bash
git rm --cached <文件名>
```

```git rm``` 命令后面可以列出文件或者目录的名字，也可以使用 glob 模式。比如：
删除 ```log/``` 目录下扩展名为 ```.log``` 的所有文件

```bash
git rm log/\*.log 
```

### 查看提交记录

```bash
git log
```

git log 后面可以接各种命令来筛选记录，比较麻烦建议直接使用可视化工具查看

```bash
git log --pretty=format:"%h %s" --graph
```

### 撤销操作

#### 已提交

```bash
git commit -m 'initial commit'
git add forgotten_file
git commit --amend
```

当前提交替换前一次提交

#### 未提交

- 将文件从缓存中撤销

```bash
git reset HEAD <文件名>
```

- 撤销文件的修改(重置为上一次提交)

```bash
git checkout -- <文件名>
```

### 远程仓库

- 查看远程仓库

```bash
git remote -v
```

```-v```，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。

- 添加远程仓库

```bash
git remote add <shortname>
```

- 从远程仓库中抓取与拉取

```bash
git fetch <remote>
```

> 如果你使用 clone 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。 所以，git fetch origin 会抓取克隆（或上一次抓取）后新推送的所有工作。 必须注意 git fetch 命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。

- 推送到远程仓库

```bash
 git push origin master 或者 git push
```

- 查看某个远程仓库

```bash
 git remote show <remote>
```

- 远程仓库的重命名与移除

```bash
 git remote rename <old> <new>
```

同时也会修改你所有远程跟踪的分支名字

```bash
 git remote remove <remote>
```

### 标签

#### 查看标签

```bash
git tag
git tag -l "v1.8.5*" // 按条件查找
```

#### 创建标签

```bash
git tag -a v1.4 -m "my version 1.4" // 创建附注标签
git tag  v1.4 // 创建轻量标签
 git tag -a v1.2 <hash> // 历史提交打tag
```

#### 推送标签

默认情况下，git push 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样——你可以运行 ```git push origin <tagname>```,推送所有```git push origin --tags```

#### 删除标签

```bash
git tag -d <tagname>
```

上述命令并不会从任何远程仓库中移除这个标签，你必须用 ```git push <remote> :refs/tags/<tagname>``` 来更新你的远程仓库,或者```git push origin --delete <tagname>```

### Git 别名

> Git 并不会在你输入部分命令时自动推断出你想要的命令。 如果不想每次都输入完整的 Git 命令，可以通过 git config 文件来轻松地为每一个命令设置一个别名。 这里有一些例子你可以试试：

```bash
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status```
### .gitignore

```gitignore
node_modules // 忽略node_modules下所有文件
.temp
.cache
dist
```

```.gitignore``` 的格式规范如下：

- 所有空行或者以 # 开头的行都会被 Git 忽略。

- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。

- 匹配模式可以以（/）开头防止递归。

- 匹配模式可以以（/）结尾指定目录。

- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。

> glob 模式是指 shell 所使用的简化了的正则表达式。 星号（*）匹配零个或多个任意字符；[abc] 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（?）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。 使用两个星号（**）表示匹配任意中间目录，比如 a/**/z 可以匹配 a/z 、 a/b/z 或 a/b/c/z 等。

```gitignore
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

Tip:

GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表， 你可以在 <https://github.com/github/gitignore> 找到它。

### 补救

撤消对文件的修改

```bash
 git checkout -- <file>
```

```git checkout .``` 放弃所有更改

回滚

```bash
git log 查看提交记录
git reset --hard 版本号
```

## 工作流

### 1. 集中式工作流

只有一个主分支，成员在同一个分枝上更新，推送及解决冲突

### 2. 功能分支工作流

Pull Requests是关键

每个功能在单独的分枝上开发，开发完成提合并请求，然后再合并到主分支。

### 3. Gitflow工作流

> Gitflow工作流通过为功能开发、发布准备和维护分配独立的分支，让发布迭代过程更流畅。严格的分支模型也为大型项目提供了一些非常必要的结构。

分支构成：

- master:主分支（用来发布）
- develop:功能集成分支 （用来合并功能分支）
- 功能分支

#### 发布分支

develop分支切一个分支出来作为发布的分支,然后在合并到master分枝上，并打上标记。（只要创建这个分支并push到中央仓库，这个发布就是功能冻结的。任何不在develop分支中的新功能都推到下个发布循环中。）

#### 维护分支

直接从master切一个修复分支，修复后合并到master及develop。

[参考链接](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md)

## 常见问题

### matches more than one

> Dst refspec hr-portal-app_v2.0 matches more than one.failed to push some refs

原因: 标签名和分支名相同导致

解决：删除其中一个即可

```bash
git push origin :refs/tags/dev_test
```

### refusing to merge

> refusing to merge unrelated histories

本地和仓库是独立的两个库

```bash
git pull origin master --allow-unrelated-histories
```

## 相关资源

[Pro Git](https://git-scm.com/book/zh/v2)

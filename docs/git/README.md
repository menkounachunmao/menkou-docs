<!--
 * @Author: xx
 * @Date: 2021-06-18 10:50:27
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-18 11:32:15
 * @FilePath: /vue-press/docs/git/README.md
-->

# git

## 基础

todo

## 命令

### 配置相关

1、查看用户名以及邮箱

```bash
git config user.name
git config user.email
```

2、修改用户名以及邮箱

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

### 工作区

流程：工作区 缓存区 本地仓库 远程仓库

- 创建本地仓库

```bash
 git init --bare helloword.git
```

- add工作到缓存

**git add -A** 提交所有变化,是下面两个功能的合集（git add --all的缩写）

```bash
git add -A
```

git add .  

> 他会监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区，包括文件内容修改(modified)以及新文件(new)，但不包括被删除的文件。

git add -u
> 他仅监控已经被add的文件（即tracked file），他会将被修改的文件提交到暂存区。add -u 不会提交新文件（untracked file）。（git add --update的缩写）

- 提交到本地仓库

```bash
git commit -m"注释"
```

- 链接远程仓库

```bash
git remote -v  查看远程仓库
git remote rename pb paul 修改远程仓库本地简称
git remote add <shortname> <url> 添加远程仓库
```

### 分支

- 创建分支

```bash
git checkout -b dev
// -b 表示创建并切换到该分支
```

- 查看当前分支

```bash
git branch
```

- 查看所有分支

```bash
git branch -a
```

- 合并分支

```bash
git merge dev
```

- 将远程git仓库里的指定分支拉取到本地（本地不存在的分支）

```bash
git checkout -b 本地分支名 origin/远程分支名
```

- 修剪远程分支

当某些分支远程已经删除本地还是存在时

```bash
git remote prune origin
```

- 修补上次提交

对上次提交进行修改，添加文件或者修改注释

```bash
git commit --amend
```

- 同步远程仓库中所有分支的引用

```bash
 git fetch <remote>
```

### 补救

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

export const gitContent = {
  "1": {
    title: "Git vs GitHub — what's the difference?",
    sections: [
      {
        heading: "Git",
        text: "Git is a distributed version control system that tracks changes in source code[reference:35]. It operates locally on your machine — you can commit, branch, and merge without a network connection[reference:36]."
      },
      {
        heading: "GitHub",
        text: "GitHub is a cloud-based hosting service for Git repositories. It adds collaboration features like Pull Requests, issue tracking, project boards, and CI/CD integration[reference:37]. Git is the tool; GitHub is the platform[reference:38]."
      }
    ]
  },
  "2": {
    title: "What are the basic Git commands every developer should know?",
    sections: [
      {
        heading: "Essential Commands",
        text: "`git clone <url>` — copies a remote repository locally. `git add <file>` — stages changes for commit. `git commit -m 'message'` — saves staged changes to local history. `git push` — uploads commits to remote. `git pull` — fetches and merges remote changes[reference:39]. `git status` — shows current state. `git log` — displays commit history[reference:40]."
      }
    ]
  },
  "3": {
    title: "How do you create, switch, merge, and delete branches?",
    sections: [
      {
        heading: "Branch Commands",
        text: "`git branch <name>` — creates a new branch. `git switch <branch>` or `git checkout <branch>` — switches to a branch. `git merge <branch>` — integrates changes from another branch. `git branch -d <branch>` — deletes a branch after merging[reference:41]."
      }
    ]
  },
  "4": {
    title: "Git Merge vs Git Rebase — when to use each?",
    sections: [
      {
        heading: "Merge",
        text: "Creates a new merge commit that preserves the complete history including branch splits. Non-destructive and safe for shared branches[reference:42]."
      },
      {
        heading: "Rebase",
        text: "Moves the entire branch to the tip of the target branch, rewriting commit history. Creates a clean linear history. Dangerous for shared branches because it rewrites history[reference:43]."
      },
      {
        heading: "When to Use",
        text: "Use merge for public/shared branches. Use rebase for local cleanup before merging to main to keep history clean[reference:44]."
      }
    ]
  },
  "5": {
    title: "How do you resolve merge conflicts?",
    sections: [
      {
        heading: "Resolution Process",
        text: "Git marks conflicts in files with `<<<<<<<`, `=======`, and `>>>>>>>` markers. Manually edit the file to keep the correct changes, then `git add` and `git commit` to complete the merge[reference:45]."
      },
      {
        heading: "Tools",
        text: "Use `git mergetool` or your IDE's built-in merge editor (VS Code has excellent support). `git diff` helps view differences between versions[reference:46]."
      }
    ]
  },
  "6": {
    title: "What are Git Flow and GitHub Flow?",
    sections: [
      {
        heading: "Git Flow",
        text: "A structured branching model with dedicated branches: `develop`, `feature/*`, `release/*`, and `hotfix/*`. Suitable for projects with scheduled releases but can be complex[reference:47]."
      },
      {
        heading: "GitHub Flow",
        text: "A simpler workflow: `main` branch is always deployable. All work happens in feature branches, merged via Pull Requests. Works well for continuous delivery[reference:48]."
      }
    ]
  },
  "7": {
    title: "What is git stash and when do you use it?",
    sections: [
      {
        heading: "Stash Commands",
        text: "`git stash` — saves uncommitted changes and reverts the working directory to the last commit. `git stash pop` — applies the stash and removes it. `git stash apply` — applies the stash but keeps it[reference:49]."
      },
      {
        heading: "Use Case",
        text: "When you need to switch branches urgently but aren't ready to commit your current changes. Stashing lets you save your work temporarily and come back to it later[reference:50]."
      }
    ]
  },
  "8": {
    title: "Git Reset vs Git Revert vs Git Restore — what's the difference?",
    sections: [
      {
        heading: "git reset",
        text: "Moves the current branch pointer. `--soft` keeps changes staged, `--mixed` unstages changes, `--hard` discards changes completely (dangerous — data loss)[reference:51]."
      },
      {
        heading: "git revert",
        text: "Creates a new commit that undoes a previous commit. Safe for shared history because it doesn't rewrite history[reference:52]."
      },
      {
        heading: "git restore",
        text: "Restores working tree files. Can unstage changes or discard local modifications. More targeted than reset[reference:53]."
      }
    ]
  },
  "9": {
    title: "What is origin vs upstream in Git?",
    sections: [
      {
        heading: "origin",
        text: "The default name for your remote repository (typically your fork). `git push origin main` pushes to your fork[reference:54]."
      },
      {
        heading: "upstream",
        text: "Conventionally the original repository you forked from. Used in open source to sync with the main project: `git fetch upstream`[reference:55]."
      },
      {
        heading: "fetch vs pull",
        text: "`git fetch` downloads remote changes without merging. `git pull` fetches AND merges (fetch + merge)[reference:56]."
      }
    ]
  },
  "10": {
    title: "What is a Pull Request and how does code review work?",
    sections: [
      {
        heading: "PR Workflow",
        text: "Push a feature branch, open a Pull Request on GitHub. Reviewers comment on the code, request changes, or approve. Once approved and CI passes, merge into the main branch[reference:57]."
      },
      {
        heading: "Best Practices",
        text: "Keep PRs small and focused. Write descriptive titles and descriptions. Use PR templates. Ensure CI/CD pipelines pass. Address review comments promptly[reference:58]."
      }
    ]
  }
};